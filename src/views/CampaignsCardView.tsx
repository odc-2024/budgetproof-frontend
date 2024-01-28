import React, { useState } from 'react';
import DefaultLayout from '@/components/Layout/DefaultLayout.tsx';
import { Group, Stack, Title, Button, Table } from '@mantine/core';
import { Campaign, contract } from '@/contract';
/*
import CampaignsCard from '@/components/campaigns/CampaignsCard.tsx';
import UsersView from '@/views/UsersView.tsx';
*/
import { Link, useParams } from 'react-router-dom';

const CampaignsCardView: React.FC = () => {
  const [campaign, setCampaign] = useState<Campaign | null>(null);
  const [allocations, setAllocations] = useState<any | null>(null);
  const params = useParams()
  const allocationRows = [];

  React.useEffect(() => {
    contract.getCampaign(params.id).then((campaign) => {
      setCampaign(campaign);
    });

    contract.getAllocations(params.id).then((allocations) => {
      setAllocations(allocations);
    });
  }, []);

  return (
    <DefaultLayout>
      <div className="container mx-auto px-5">
        <Stack>
          <Group justify="space-between">
            <div>
              <Title order={1}>{campaign?.name}</Title>
              <Title size={20} fw={0} order={1}>{campaign?.remainingAmount.toLocaleString()} / {campaign?.amount.toLocaleString()} {campaign?.unit}</Title>
            </div>
            <Link to="/campaigns">
              <Button px={40} variant="outline">
                Back
              </Button>
            </Link>
          </Group>

          <div>

            <Table>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>ID</Table.Th>
                  <Table.Th>Receiver</Table.Th>
                  <Table.Th>Amount</Table.Th>
                  <Table.Th>Sender</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                { allocationRows }
              </Table.Tbody>
            </Table>
          </div>

          { /* 
          <CampaignsCard>
            <Stack gap={20}>
              <Text pt={20}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry standard dummy text ever since the
                1500s, when an unknown printer took a galley of type and scrambled it to
                make a type specimen book. It has survived not only five centuries, but
                also the leap into electronic typesetting, remaining essentially
                unchanged.
              </Text>
              <UsersView withLayout={false} />
            </Stack>
          </CampaignsCard>
          */ }
        </Stack>
      </div>
    </DefaultLayout>
  );
};

export default CampaignsCardView;
