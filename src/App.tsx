import { AppShell, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';

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
      <AppShell.Header>
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        <div>Logo</div>
      </AppShell.Header>

      <AppShell.Navbar p="md">Navbar</AppShell.Navbar>

      <AppShell.Main>
        <RouterProvider router={router} />
      </AppShell.Main>
    </AppShell>
  );
};

export default App;
