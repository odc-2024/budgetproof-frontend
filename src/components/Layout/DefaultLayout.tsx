import React from 'react';
import { AppShell, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import LogoFull from '@/assets/logo-full.svg';
import Navbar from '@/components/Navbar/Navbar';
import LanguageSelect from '@/components/LanguageSelect.tsx';

const DefaultLayout: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [opened, { toggle }] = useDisclosure();
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'lg',
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header className="flex items-center justify-between px-3">
        <Burger
          opened={opened}
          onClick={toggle}
          hiddenFrom="lg"
          size="sm"
          className="mr-2"
        />
        <img src={LogoFull} className="h-[36px]" />
        <LanguageSelect />
      </AppShell.Header>

      <AppShell.Navbar p="md" className="!bg-neutral-50">
        <Navbar />
      </AppShell.Navbar>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
};

export default DefaultLayout;
