import { Icon, Text, DataTable, DataColumn, Row } from '@umami/react-zen';
import { LinkButton } from '@/components/common/LinkButton';
import { useMessages, useLoginQuery, useNavigation } from '@/components/hooks';
import { REPORT_TYPES } from '@/lib/constants';
import { Arrow } from '@/components/icons';
import { ReportDeleteButton } from './ReportDeleteButton';

export function ReportsTable({ data = [] }: { data: any[]; showDomain?: boolean }) {
  const { formatMessage, labels } = useMessages();
  const { user } = useLoginQuery();
  const { renderTeamUrl } = useNavigation();

  return (
    <DataTable data={data}>
      <DataColumn id="name" label={formatMessage(labels.name)} />
      <DataColumn id="description" label={formatMessage(labels.description)} />
      <DataColumn id="type" label={formatMessage(labels.type)}>
        {(row: any) => {
          return formatMessage(
            labels[Object.keys(REPORT_TYPES).find(key => REPORT_TYPES[key] === row.type)],
          );
        }}
      </DataColumn>
      <DataColumn id="action" label="" align="end">
        {(row: any) => {
          const { id, name, userId, website } = row;
          return (
            <Row gap="3">
              {(user.id === userId || user.id === website?.userId) && (
                <ReportDeleteButton reportId={id} reportName={name} />
              )}
              <LinkButton href={renderTeamUrl(`/reports/${id}`)}>
                <Icon>
                  <Arrow />
                </Icon>
                <Text>{formatMessage(labels.view)}</Text>
              </LinkButton>
            </Row>
          );
        }}
      </DataColumn>
    </DataTable>
  );
}
