import React, { useState } from 'react';
import { AppShell, Burger, Avatar } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import LogoFull from '@/assets/logo-full.svg';
import Navbar from '@/components/Navbar/Navbar';

const DefaultLayout: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [opened, { toggle }] = useDisclosure();
  const [ethereumAddress, setEthereumAddress] = useState<string>();
  const [ethereumChainId, setEthereumChainId] = useState<string>();

  const loadEthereumAddress = async () => {
    const [accounts, chainId] = await Promise.all([
      window.ethereum!.request({ method: 'eth_requestAccounts' }),
      window.ethereum!.request({ method: 'eth_chainId' }),
    ]);

    if (accounts) setEthereumAddress(accounts[0]);
    setEthereumChainId(chainId as string);
  };

  if (window.ethereum) loadEthereumAddress();

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
      <AppShell.Header className="flex items-center justify-between px-4">
        <div className="flex items-center px-3">
          <Burger
            opened={opened}
            onClick={toggle}
            hiddenFrom="lg"
            size="sm"
            className="mr-2"
          />
          <img src={LogoFull} className="h-[36px]" />
        </div>
        {ethereumAddress && (
          <div>
            <div className="flex items-center gap-2">
              <Avatar
                color="cyan"
                radius="xl"
                src={'https://api.dicebear.com/7.x/identicon/svg?seed=' + ethereumAddress}
              ></Avatar>
              <div className="flex flex-col">
                <code className="text-sm font-semibold">
                  0x{ethereumAddress?.substring(0, 12)}..
                </code>
                <code className="text-xs">Chain id: {parseInt(ethereumChainId, 16)}</code>
              </div>
            </div>
          </div>
        )}
      </AppShell.Header>

      <AppShell.Navbar p="md" className="!bg-neutral-50">
        <Navbar />
      </AppShell.Navbar>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
};

export default DefaultLayout;
