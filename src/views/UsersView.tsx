import React from 'react';
import {
  MRT_Cell,
  MRT_ColumnDef,
  MantineReactTable,
  useMantineReactTable,
} from 'mantine-react-table';
import { Badge, Box, Button, Menu, rem } from '@mantine/core';
import { Role } from '@/types';
import { IconAdjustments } from '@tabler/icons-react';
import DefaultLayout from '@/components/Layout/DefaultLayout.tsx';

type Data = {
  id: number;
  firstName: string;
  lastName: string;
  role: Role;
};

const columns: MRT_ColumnDef<Data>[] = [
  { accessorKey: 'id', header: 'ID' },
  { accessorKey: 'firstName', header: 'First Name' },
  { accessorKey: 'lastName', header: 'Last Name' },
  {
    accessorKey: 'role',
    header: 'Role',
    Cell: ({ cell }: { cell: MRT_Cell<Data> }) => {
      switch (cell.getValue<Role>()) {
        case Role.Admin:
          return <Badge color="red">Admin</Badge>;
        case Role.Volunteer:
          return <Badge color="yellow">Volunteer</Badge>;
        case Role.Participant:
          return <Badge color="green">Participant</Badge>;
      }
      return <Badge color="grey">Unknown</Badge>;
    },
  },
];

const data: Data[] = [
  { id: 1, firstName: 'Sardorjon', lastName: 'Qodirjonov', role: Role.Admin },
  { id: 2, firstName: 'Shaxzod', lastName: 'Qudratov', role: Role.Participant },
  { id: 3, firstName: 'Rasuljon', lastName: 'Qodiriy', role: Role.Volunteer },
  { id: 4, firstName: 'Saidbek', lastName: 'Abdiganiyev', role: Role.Unknown },
];

const UsersView: React.FC<{ withLayout?: boolean }> = ({ withLayout }) => {
  const table = useMantineReactTable<Data>({
    state: {
      density: 'xs',
    },
    columns,
    data,
    enableRowSelection: true,
    enableDensityToggle: false,
    columnFilterDisplayMode: 'subheader',
    paginationDisplayMode: 'pages',
    positionToolbarAlertBanner: 'bottom',
    renderTopToolbarCustomActions: ({ table }) => (
      <Box
        style={{
          display: 'flex',
          gap: '16px',
          padding: '8px',
          flexWrap: 'wrap',
        }}
      >
        <Button.Group>
          <Button
            disabled={!table.getIsSomeRowsSelected() && !table.getIsAllRowsSelected()}
            variant="outline"
            size="xs"
          >
            Add Participant
          </Button>

          <Menu shadow="md" width={200}>
            <Menu.Target>
              <Button
                variant="outline"
                aria-label="Settings"
                size="xs"
                pr={0}
                px={rem(6)}
                disabled={!table.getIsSomeRowsSelected() && !table.getIsAllRowsSelected()}
              >
                <IconAdjustments style={{ width: '70%', height: '70%' }} stroke={1.5} />
              </Button>
            </Menu.Target>

            <Menu.Dropdown>
              <Menu.Item>Add Participant</Menu.Item>
              <Menu.Item>Add Volunteer</Menu.Item>
              <Menu.Item>Add Admin</Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Button.Group>
      </Box>
    ),
  });

  if (!withLayout) return <MantineReactTable table={table} />;

  return (
    <DefaultLayout>
      <MantineReactTable table={table} />
    </DefaultLayout>
  );
};

export default UsersView;
