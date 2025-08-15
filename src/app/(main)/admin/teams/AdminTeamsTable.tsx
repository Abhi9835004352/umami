import { useState } from 'react';
import { Row, Text, Icon, DataTable, DataColumn, MenuItem, Modal } from '@umami/react-zen';
import Link from 'next/link';
import { Trash } from '@/components/icons';
import { useMessages } from '@/components/hooks';
import { Edit } from '@/components/icons';
import { MenuButton } from '@/components/input/MenuButton';
import { DateDistance } from '@/components/common/DateDistance';

export function AdminTeamsTable({
  data = [],
  showActions = true,
}: {
  data: any[];
  showActions?: boolean;
}) {
  const { formatMessage, labels } = useMessages();
  const [deleteUser, setDeleteUser] = useState(null);

  return (
    <>
      <DataTable data={data}>
        <DataColumn id="name" label={formatMessage(labels.name)} width="1fr">
          {(row: any) => <Link href={`/admin/teams/${row.id}`}>{row.name}</Link>}
        </DataColumn>
        <DataColumn id="websites" label={formatMessage(labels.members)} width="140px">
          {(row: any) => row?._count?.members}
        </DataColumn>
        <DataColumn id="members" label={formatMessage(labels.websites)} width="140px">
          {(row: any) => row?._count?.websites}
        </DataColumn>
        <DataColumn id="owner" label={formatMessage(labels.owner)}>
          {(row: any) => {
            const name = row?.members?.[0]?.user?.username;

            return (
              <Text title={name} truncate>
                <Link href={`/admin/users/${row?.members?.[0]?.user?.id}`}>{name}</Link>
              </Text>
            );
          }}
        </DataColumn>
        <DataColumn id="created" label={formatMessage(labels.created)} width="160px">
          {(row: any) => <DateDistance date={new Date(row.createdAt)} />}
        </DataColumn>
        {showActions && (
          <DataColumn id="action" align="end" width="50px">
            {(row: any) => {
              const { id } = row;

              return (
                <MenuButton>
                  <MenuItem href={`/admin/teams/${id}`} data-test="link-button-edit">
                    <Row alignItems="center" gap>
                      <Icon>
                        <Edit />
                      </Icon>
                      <Text>{formatMessage(labels.edit)}</Text>
                    </Row>
                  </MenuItem>
                  <MenuItem
                    id="delete"
                    onAction={() => setDeleteUser(row)}
                    data-test="link-button-delete"
                  >
                    <Row alignItems="center" gap>
                      <Icon>
                        <Trash />
                      </Icon>
                      <Text>{formatMessage(labels.delete)}</Text>
                    </Row>
                  </MenuItem>
                </MenuButton>
              );
            }}
          </DataColumn>
        )}
      </DataTable>
      <Modal isOpen={!!deleteUser}></Modal>
    </>
  );
}
