'use client';
import { Icon, Loading, Text } from '@umami/react-zen';
import { SectionHeader } from '@/components/common/SectionHeader';
import { Pager } from '@/components/common/Pager';
import { WebsiteChartList } from '../websites/[websiteId]/WebsiteChartList';
import { DashboardSettingsButton } from '@/app/(main)/dashboard/DashboardSettingsButton';
import { DashboardEdit } from '@/app/(main)/dashboard/DashboardEdit';
import { EmptyPlaceholder } from '@/components/common/EmptyPlaceholder';
import { useMessages, useNavigation, useWebsites } from '@/components/hooks';
import { Arrow } from '@/components/icons';
import { useDashboard } from '@/store/dashboard';
import { LinkButton } from '@/components/common/LinkButton';

export function DashboardPage() {
  const { formatMessage, labels, messages } = useMessages();
  const { teamId, renderTeamUrl } = useNavigation();
  const { showCharts, editing, isEdited } = useDashboard();
  const pageSize = isEdited ? 200 : 10;

  const { result, query, params, setParams } = useWebsites({ teamId }, { pageSize });
  const { page } = params;
  const hasData = !!result?.data?.length;

  const handlePageChange = (page: number) => {
    setParams({ ...params, page });
  };

  if (query.isLoading) {
    return <Loading />;
  }

  return (
    <section style={{ marginBottom: 60 }}>
      <SectionHeader title={formatMessage(labels.dashboard)}>
        {!editing && hasData && <DashboardSettingsButton />}
      </SectionHeader>
      {!hasData && (
        <EmptyPlaceholder message={formatMessage(messages.noWebsitesConfigured)}>
          <LinkButton href={renderTeamUrl('/settings')}>
            <Icon>
              <Arrow />
            </Icon>
            <Text>{formatMessage(messages.goToSettings)}</Text>
          </LinkButton>
        </EmptyPlaceholder>
      )}
      {hasData && (
        <>
          {editing && <DashboardEdit teamId={teamId} />}
          {!editing && (
            <>
              <WebsiteChartList
                websites={result?.data as any}
                showCharts={showCharts}
                limit={pageSize}
              />
              <Pager
                page={page}
                pageSize={pageSize}
                count={result?.count}
                onPageChange={handlePageChange}
              />
            </>
          )}
        </>
      )}
    </section>
  );
}
