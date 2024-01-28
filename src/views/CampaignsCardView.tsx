import React from 'react';
import DefaultLayout from '@/components/Layout/DefaultLayout.tsx';
import { Group, Stack, /*Text,*/ Title, Button } from '@mantine/core';
/*
import CampaignsCard from '@/components/campaigns/CampaignsCard.tsx';
import UsersView from '@/views/UsersView.tsx';
*/
import { Link } from 'react-router-dom';

const CampaignsCardView: React.FC = () => {
  return (
    <DefaultLayout>
      <div className="container mx-auto px-5">
        <Stack>
          <Group justify="space-between">
            <Title order={1}>Campaign View</Title>
            <Link to="/campaigns">
              <Button px={40} variant="outline">
                Back
              </Button>
            </Link>
          </Group>
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
