import React from 'react';
import { Button, Grid, Group, Stack, Title } from '@mantine/core';
import CampaignsAddButton from '@/components/campaigns/CampaignsAddButton.tsx';
import CampaignsCard from '@/components/campaigns/CampaignsCard.tsx';
import DefaultLayout from '@/components/Layout/DefaultLayout.tsx';
import { CampaignStatus } from '@/types';

const campaigns = [
  { item: <CampaignsCard /> },
  { item: <CampaignsCard /> },
  { item: <CampaignsCard /> },
];

const CampaignsView: React.FC = () => {
  const [status, setStatus] = React.useState<CampaignStatus>(CampaignStatus.Current);

  const statuses = {
    [CampaignStatus.Current]: 'Current',
    [CampaignStatus.Upcoming]: 'Upcoming',
    [CampaignStatus.Past]: 'Past',
  };

  return (
    <DefaultLayout>
      <div className="container mx-auto flex flex-col gap-5 px-5">
        <Title order={1}>Campaigns</Title>

        <Stack>
          <Group justify="space-between">
            <Button.Group>
              {Object.entries(statuses).map(([key, label], index) => (
                <Button
                  key={index}
                  color={key == status ? 'lime' : 'gray'}
                  variant={key == status ? undefined : 'light'}
                  onClick={() => setStatus(key as CampaignStatus)}
                >
                  {label}
                </Button>
              ))}
            </Button.Group>
            <Button variant="outline">Add new campaign</Button>
          </Group>
          <Grid>
            {campaigns.map((value, index) => (
              <Grid.Col key={index} span={{ base: 12, md: 6, lg: 4 }}>
                {value.item}
              </Grid.Col>
            ))}
          </Grid>
        </Stack>
      </div>
    </DefaultLayout>
  );
};

export default CampaignsView;
