import React from 'react';
import DefaultLayout from '@/components/Layout/DefaultLayout.tsx';
import { Stack, Title, Image } from '@mantine/core';
import ArchImage from '@/assets/arch.png';

const AboutView: React.FC = () => {
  return (
    <DefaultLayout>
      <div className="container mx-auto px-5">
        <Stack>
          <Title order={1}>How it works</Title>
          <Image src={ArchImage} w={800} />
        </Stack>
      </div>
    </DefaultLayout>
  );
};

export default AboutView;
