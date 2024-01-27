import React from 'react';
import DefaultLayout from '@/components/Layout/DefaultLayout';
import {
  MRT_ColumnDef,
  MantineReactTable,
  useMantineReactTable,
} from 'mantine-react-table';
import { Box, Button } from '@mantine/core';

type Data = { id: number; firstName: string; lastName: string };
const columns: MRT_ColumnDef<Data>[] = [{ accessorKey: 'id', header: 'ID' }];
const data: Data[] = [{ id: 1, firstName: 'Shakhzod', lastName: 'Kudratov' }];

const UsersView: React.FC = () => {
  const table = useMantineReactTable<Data>({
    columns,
    data,
    enableRowSelection: true,
    columnFilterDisplayMode: 'popover',
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
        <Button
          disabled={table.getPrePaginationRowModel().rows.length === 0}
          variant="filled"
        >
          Export All Rows
        </Button>
        <Button disabled={table.getRowModel().rows.length === 0} variant="filled">
          Export Page Rows
        </Button>
        <Button
          disabled={!table.getIsSomeRowsSelected() && !table.getIsAllRowsSelected()}
          variant="filled"
        >
          Export Selected Rows
        </Button>
      </Box>
    ),
  });

  return (
    <DefaultLayout>
      <MantineReactTable table={table} />
    </DefaultLayout>
  );
};

export default UsersView;
