import { ReactNode, useMemo, useState } from 'react';
import { Loading, Icon, Text, SearchField, Row, Column } from '@umami/react-zen';
import { ErrorMessage } from '@/components/common/ErrorMessage';
import { LinkButton } from '@/components/common/LinkButton';
import { DEFAULT_ANIMATION_DURATION } from '@/lib/constants';
import { percentFilter } from '@/lib/filters';
import { useNavigation, useWebsiteMetricsQuery, useMessages, useFormat } from '@/components/hooks';
import { Arrow } from '@/components/icons';
import { ListTable, ListTableProps } from './ListTable';

export interface MetricsTableProps extends ListTableProps {
  websiteId: string;
  type?: string;
  className?: string;
  dataFilter?: (data: any) => any;
  limit?: number;
  delay?: number;
  onDataLoad?: (data: any) => void;
  onSearch?: (search: string) => void;
  allowSearch?: boolean;
  searchFormattedValues?: boolean;
  showMore?: boolean;
  params?: { [key: string]: any };
  children?: ReactNode;
}

export function MetricsTable({
  websiteId,
  type,
  className,
  dataFilter,
  limit,
  onDataLoad,
  delay = null,
  allowSearch = false,
  searchFormattedValues = false,
  showMore = true,
  params,
  children,
  ...props
}: MetricsTableProps) {
  const [search, setSearch] = useState('');
  const { formatValue } = useFormat();
  const { renderUrl } = useNavigation();
  const { formatMessage, labels } = useMessages();

  const { data, isLoading, isFetched, error } = useWebsiteMetricsQuery(
    websiteId,
    { type, limit, search: searchFormattedValues ? undefined : search, ...params },
    {
      retryDelay: delay || DEFAULT_ANIMATION_DURATION,
      onDataLoad,
    },
  );

  const filteredData = useMemo(() => {
    if (data) {
      let items = data as any[];

      if (dataFilter) {
        if (Array.isArray(dataFilter)) {
          items = dataFilter.reduce((arr, filter) => {
            return filter(arr);
          }, items);
        } else {
          items = dataFilter(items);
        }
      }

      if (searchFormattedValues && search) {
        items = items.filter(({ x, ...data }) => {
          const value = formatValue(x, type, data);

          return value?.toLowerCase().includes(search.toLowerCase());
        });
      }

      items = percentFilter(items);

      return items;
    }
    return [];
  }, [data, dataFilter, search, limit, formatValue, type]);

  return (
    <Column gap="3" justifyContent="space-between">
      {error && <ErrorMessage />}
      <Row alignItems="center" justifyContent="space-between">
        {allowSearch && <SearchField value={search} onSearch={setSearch} delay={300} />}
        {children}
      </Row>
      {data && !error && (
        <ListTable {...(props as ListTableProps)} data={filteredData} className={className} />
      )}
      {!data && isLoading && !isFetched && <Loading icon="dots" />}
      <Row justifyContent="center">
        {showMore && data && !error && limit && (
          <LinkButton href={renderUrl({ view: type })} variant="quiet">
            <Text>{formatMessage(labels.more)}</Text>
            <Icon size="sm">
              <Arrow />
            </Icon>
          </LinkButton>
        )}
      </Row>
    </Column>
  );
}
