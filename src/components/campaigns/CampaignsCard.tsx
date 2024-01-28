import React, { useState } from 'react';
import { Card, Code, Group, RingProgress, Text } from '@mantine/core';
import { Campaign } from '@/contract';

const CampaignsCard: React.FC<{ campaign: Campaign }> = ({ campaign }) => {
  const [campaignProgressPercentage] = useState(((campaign.amount - campaign.remainingAmount) / 100n) * 100n); // TODO: fix the calculation

  return (
    <Card shadow="sm" padding="lg" radius="lg" withBorder>
      <Group justify="space-between" mb="xs">
        <Text fw={600}>{ campaign.name }</Text>
        <Code>{campaign.contractAddress.substring(0, 9)}..</Code>
      </Group>

      <Text size="sm" c="dimmed" mb="xs">
        With Fjord Tours you can explore more of the magical fjord landscapes with tours
        and activities on and around the fjords of Norway
      </Text>

      <Group className='flex'>
        <RingProgress
          size={40}
          thickness={4}
          roundCaps
          label={
            <Text size={'8'} ta="center" style={{ pointerEvents: 'none' }}>
              {campaignProgressPercentage.toString()}%
            </Text>
          }
          sections={[
            { value: Number(campaignProgressPercentage), color: 'green' },
          ]}
        />
        <Text>{ (campaign.amount - campaign.remainingAmount).toLocaleString() } { campaign.unit } / { campaign.amount.toLocaleString() } { campaign.unit }</Text>
      </Group>
    </Card>
  );
};

export default CampaignsCard;
