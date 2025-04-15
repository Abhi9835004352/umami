import { UseQueryOptions } from '@tanstack/react-query';
import { useApi } from '../useApi';
import { useFilterParams } from '../useFilterParams';
import { useSearchParams } from 'next/navigation';

export function useWebsiteMetricsQuery(
  websiteId: string,
  queryParams: { type: string; limit?: number; search?: string; startAt?: number; endAt?: number },
  options?: Omit<UseQueryOptions & { onDataLoad?: (data: any) => void }, 'queryKey' | 'queryFn'>,
) {
  const { get, useQuery } = useApi();
  const filterParams = useFilterParams(websiteId);
  const searchParams = useSearchParams();

  return useQuery({
    queryKey: [
      'websites:metrics',
      {
        websiteId,
        ...filterParams,
        ...queryParams,
      },
    ],
    queryFn: async () => {
      const data = await get(`/websites/${websiteId}/metrics`, {
        ...filterParams,
        [searchParams.get('view')]: undefined,
        ...queryParams,
      });

      options?.onDataLoad?.(data);

      return data;
    },
    enabled: !!websiteId,
    ...options,
  });
}
