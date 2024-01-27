import React from 'react';
import { Button, Grid, Title } from '@mantine/core';
import CampaignsAddButton from '@/components/campaigns/CampaignsAddButton.tsx';
import CampaignsCard from '@/components/campaigns/CampaignsCard.tsx';
import DefaultLayout from '@/components/Layout/DefaultLayout.tsx';

const campaigns = [
  { item: <CampaignsCard /> },
  { item: <CampaignsCard /> },
  { item: <CampaignsCard /> },
];

const CampaignsView: React.FC = () => {
  const [filter, setFilter] = React.useState<'current' | 'upcoming' | 'past'>('current');
  return (
    <DefaultLayout>
      <div className="container mx-auto flex flex-col gap-5 px-5">
        <Title order={1}>Campaigns</Title>
        <Grid>
          <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
            <CampaignsAddButton />
          </Grid.Col>
        </Grid>

        <div className="flex flex-col gap-3">
          <Button.Group>
            {(
              [
                ['current', 'Current'],
                ['upcoming', 'Upcoming'],
                ['past', 'Past'],
              ] as ['current' | 'upcoming' | 'past', string][]
            ).map(([key, label], index) => (
              <Button
                key={index}
                color={filter == key ? 'lime' : 'gray'}
                onClick={() => setFilter(key)}
              >
                {label}
              </Button>
            ))}
          </Button.Group>
          <Grid>
            {campaigns.map((value, index) => (
              <Grid.Col key={index} span={{ base: 12, md: 6, lg: 4 }}>
                {value.item}
              </Grid.Col>
            ))}
          </Grid>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default CampaignsView;
