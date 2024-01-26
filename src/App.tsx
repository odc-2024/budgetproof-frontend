import { AppShell, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import LogoFull from './assets/logo-full.svg';

const App: React.FC = () => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header className="flex items-center px-3">
        <Burger
          opened={opened}
          onClick={toggle}
          hiddenFrom="sm"
          size="sm"
          className="mr-2"
        />
        <img src={LogoFull} className="h-[36px]" />
      </AppShell.Header>

      <AppShell.Navbar p="md">Navbar</AppShell.Navbar>

      <AppShell.Main>
        <RouterProvider router={router} />
      </AppShell.Main>
    </AppShell>
  );
};

export default App;
