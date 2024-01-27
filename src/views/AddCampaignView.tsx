import React from 'react';
import DefaultLayout from '@/components/Layout/DefaultLayout.tsx';
import { Input, Select, Stack } from '@mantine/core';
import { Button, Group, Title } from '@mantine/core';
import { Link } from 'react-router-dom';
import UsersView from '@/views/UsersView.tsx';

const AddCampaignView: React.FC = () => {
  return (
    <DefaultLayout>
      <div className="container mx-auto flex flex-col gap-10 px-5">
        <Stack gap={20}>
          <Group justify="space-between">
            <Title order={1}>New Campaign</Title>
            <Link to="/campaigns">
              <Button px={40} variant="outline">
                Back
              </Button>
            </Link>
          </Group>

          <Stack gap={5}>
            <Input.Wrapper label="Campaign Name" required>
              <Input placeholder="Enter campaign name" />
            </Input.Wrapper>
            <Input.Wrapper label="Description">
              <Input placeholder="Enter campaign description" />
            </Input.Wrapper>
            <Select
              label="Published Time"
              placeholder="Pick value"
              data={['Current', 'Upcoming']}
              required
            />
            <Button w={{ md: 200 }} mt={5}>
              Create campaign
            </Button>
          </Stack>

          <div className="mt-3 h-0.5 w-full bg-gray-200"></div>

          <Stack gap={5}>
            <Title order={3} c="lime">
              Volunteer
            </Title>
            <Input.Wrapper label="First Name" required>
              <Input placeholder="Enter first name" />
            </Input.Wrapper>
            <Input.Wrapper label="Last Name" required>
              <Input placeholder="Enter last name" />
            </Input.Wrapper>
            <Input.Wrapper label="Budget" required>
              <Input placeholder="Enter amount of budget" />
            </Input.Wrapper>
            <Button w={{ md: 200 }} mt={5}>
              Add volunteer
            </Button>
          </Stack>

          <Stack gap={5}>
            <Title order={3} c="lime">
              Participant
            </Title>
            <Input.Wrapper label="First Name" required>
              <Input placeholder="Enter first name" />
            </Input.Wrapper>
            <Input.Wrapper label="Last Name" required>
              <Input placeholder="Enter last name" />
            </Input.Wrapper>
            <Button w={{ md: 200 }} mt={5}>
              Add participant
            </Button>
          </Stack>
        </Stack>
        <UsersView />
      </div>
    </DefaultLayout>
  );
};

export default AddCampaignView;
