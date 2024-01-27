import React from 'react';
import DefaultLayout from '@/components/Layout/DefaultLayout.tsx';
import { Stack, Text, Title } from '@mantine/core';

const AboutView: React.FC = () => {
  return (
    <DefaultLayout>
      <div className="container mx-auto px-5">
        <Stack>
          <Title order={1}>About the project</Title>
          <Text>
            <span className="font-bold text-lime-600">BudgetProof</span> - a project aimed
            at solving injustice and corruption within certain organizations distributing
            budget to citizens of Uzbekistan, the target audience of which, are poor and
            challenged people including orphans.
          </Text>
          <Title order={3} c="lime">
            Implementation
          </Title>
          <Text>
            One way to achieve a fair distribution of budget is the use of blockchain
            technology.
          </Text>
        </Stack>
      </div>
    </DefaultLayout>
  );
};

export default AboutView;
