import React from 'react';
import { Text } from '@mantine/core';

const CampaignsAddButton: React.FC = () => {
  return (
    <button className="flex w-full items-center justify-center rounded-xl border-2 border-gray-200 px-6 py-16">
      <Text size="xl" fw={700} c="gray">
        +
      </Text>
    </button>
  );
};

export default CampaignsAddButton;
