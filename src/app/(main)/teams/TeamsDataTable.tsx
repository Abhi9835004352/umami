import Link from 'next/link';
import { DataGrid } from '@/components/common/DataGrid';
import { TeamsTable } from './TeamsTable';
import { useLoginQuery, useNavigation, useUserTeamsQuery } from '@/components/hooks';

export function TeamsDataTable() {
  const { user } = useLoginQuery();
  const query = useUserTeamsQuery(user.id);
  const { pathname } = useNavigation();
  const isSettings = pathname.includes('/settings');

  const renderLink = (row: any) => {
    return (
      <Link key={row.id} href={`${isSettings ? '/settings' : ''}/teams/${row.id}`}>
        {row.name}
      </Link>
    );
  };

  return (
    <DataGrid query={query}>
      {({ data }) => {
        return <TeamsTable data={data} renderLink={renderLink} />;
      }}
    </DataGrid>
  );
}
