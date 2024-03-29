import React, { useState } from 'react';
import DefaultLayout from '@/components/Layout/DefaultLayout.tsx';
import { Group, Stack, Title, Button, Badge, Text, Code } from '@mantine/core';
import { BudgetAllocation, Campaign, contract } from '@/contract';
import { Link, useParams } from 'react-router-dom';

import {
  MRT_Cell,
  MRT_ColumnDef,
  MantineReactTable,
  useMantineReactTable,
} from 'mantine-react-table';

const CampaignsCardView: React.FC = () => {
  const [campaign, setCampaign] = useState<Campaign | null>(null);
  const [allocations, setAllocations] = useState<BudgetAllocation[]>([]);
  const params = useParams();

  const [, setEthereumAddress] = useState<string>();

  const loadEthereumAddress = async () => {
    const [accounts] = await Promise.all([
      (window as any).ethereum.request({ method: 'eth_requestAccounts' }),
    ]);

    if (accounts) setEthereumAddress(accounts[0]);
  };

  if ((window as any).ethereum) loadEthereumAddress();

  React.useEffect(() => {
    contract.getCampaign((params as any).id).then((campaign) => {
      setCampaign(campaign);
    });

    contract.getAllocations((params as any).id).then((allocations) => {
      setAllocations(allocations);
    });
  }, []);

  const columns: MRT_ColumnDef<BudgetAllocation>[] = [
    {
      header: '1. Receiver',
      Cell: ({ cell }: { cell: MRT_Cell<BudgetAllocation> }) => {
        const name = cell.row.original.receiverUsername;
        const address = cell.row.original.receiverAddress;

        return (
          <div>
            <Text>{name}</Text>
            <Code>{address}</Code>
          </div>
        );
      },
    },
    {
      header: '2. Volunteer',
      Cell: ({ cell }: { cell: MRT_Cell<BudgetAllocation> }) => {
        const name = cell.row.original.volunteerUsername;
        const address = cell.row.original.volunteerAddress;

        return (
          <div>
            <Text>{name}</Text>
            <Code>{address}</Code>
          </div>
        );
      },
    },
    {
      header: '3. Amount',
      Cell: ({ cell }: { cell: MRT_Cell<BudgetAllocation> }) => {
        const amount = cell.row.original.amount;
        return (
          <Badge color="grey">
            {amount.toLocaleString()} {campaign?.unit}
          </Badge>
        );
      },
    },
    {
      header: '4. State',
      Cell: ({ cell }: { cell: MRT_Cell<BudgetAllocation> }) => {
        const state = cell.row.original.state;
        if (state == BigInt(1)) {
          return <Badge color="green">Confirmed</Badge>;
        } else if (state == BigInt(0)) {
          return <Badge color="red">Not confirmed</Badge>;
        }

        return <Badge color="grey">Unknown</Badge>;
      },
    },
    {
      header: '5. Actions',
      Cell: ({ cell }: { cell: MRT_Cell<BudgetAllocation> }) => {
        const budgetId = BigInt((params as any).id);
        const allocationId = cell.row.original.id;
        const state = cell.row.original.state;

        if (state == BigInt(1)) return <></>;

        return (
          <Button
            onClick={async () => {
              await contract.confirmAllocation(budgetId, allocationId);
            }}
          >
            Confirm
          </Button>
        );
      },
    },
  ];

  const table = useMantineReactTable<BudgetAllocation>({
    state: {
      density: 'xs',
    },
    columns,
    data: allocations,
    // enableRowSelection: true,
    enableDensityToggle: false,
    columnFilterDisplayMode: 'subheader',
    paginationDisplayMode: 'pages',
    positionToolbarAlertBanner: 'bottom',
  });

  return (
    <DefaultLayout>
      <div className="container mx-auto px-5">
        <Stack>
          <Group justify="space-between">
            <div>
              <Title order={1}>{campaign?.name}</Title>
              <Title size={20} fw={0} order={1}>
                {campaign?.remainingAmount.toLocaleString()} /{' '}
                {campaign?.amount.toLocaleString()} {campaign?.unit}
              </Title>
            </div>
            <Link to="/">
              <Button px={40} variant="outline">
                Back
              </Button>
            </Link>
          </Group>

          <div>
            <MantineReactTable table={table} />
          </div>
        </Stack>
      </div>
    </DefaultLayout>
  );
};

export default CampaignsCardView;
