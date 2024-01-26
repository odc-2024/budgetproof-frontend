import { AppShell, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import React from 'react';

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
        <div className="bg-red-50 text-2xl">hello</div>
      </AppShell.Main>
    </AppShell>
  );
};

export default App;
