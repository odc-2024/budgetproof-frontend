import React from 'react';
import { Badge, Card, Group, Text } from '@mantine/core';

const CampaignsCard: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <Card shadow="sm" padding="lg" radius="lg" withBorder>
      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>Norway Fjord Adventures</Text>
        <Badge color="#5D773F">19,999,999 soums</Badge>
      </Group>

      <Text size="sm" c="dimmed">
        With Fjord Tours you can explore more of the magical fjord landscapes with tours
        and activities on and around the fjords of Norway
      </Text>
      {children}
    </Card>
  );
};

export default CampaignsCard;
