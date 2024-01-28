import React from 'react';
import { Button, Grid, Group, Stack, Title } from '@mantine/core';
import CampaignsCard from '@/components/campaigns/CampaignsCard.tsx';
import DefaultLayout from '@/components/Layout/DefaultLayout.tsx';
import { CampaignStatus } from '@/types';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const campaigns = [
  { item: <CampaignsCard />, link: '/campaigns/view' },
  { item: <CampaignsCard />, link: '/campaigns/view' },
  { item: <CampaignsCard />, link: '/campaigns/view' },
];

const CampaignsView: React.FC = () => {
  const { t } = useTranslation();
  const [status, setStatus] = React.useState<CampaignStatus>(CampaignStatus.Current);

  const statuses = {
    [CampaignStatus.Current]: t('current'),
    [CampaignStatus.Upcoming]: t('upcoming'),
    [CampaignStatus.Past]: t('past'),
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
            <Link to="/campaigns/add">
              <Button variant="outline">Add new campaign</Button>
            </Link>
          </Group>
          <Grid>
            {campaigns.map((value, index) => (
              <Grid.Col key={index} span={{ base: 12, md: 6, lg: 4 }}>
                <Link to={value.link}>{value.item}</Link>
              </Grid.Col>
            ))}
          </Grid>
        </Stack>
      </div>
    </DefaultLayout>
  );
};

export default CampaignsView;
