import { useApi } from '../useApi';
import { useModified } from '@/components/hooks';
import { keepPreviousData } from '@tanstack/react-query';
import { ReactQueryOptions } from '@/lib/types';

export function useWebsiteCohortQuery(
  websiteId: string,
  cohortId: string,
  options?: ReactQueryOptions,
) {
  const { get, useQuery } = useApi();
  const { modified } = useModified(`cohorts`);

  return useQuery({
    queryKey: ['website:cohorts', { websiteId, cohortId, modified }],
    queryFn: () => get(`/websites/${websiteId}/cohorts/${cohortId}`),
    enabled: !!(websiteId && cohortId),
    placeholderData: keepPreviousData,
    ...options,
  });
}
