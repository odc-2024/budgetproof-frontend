import React, { useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from '@/router';
import { Modal, Button, Image, Flex, Text, CopyButton, Code, Box } from '@mantine/core';

const App: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const urlParams = new URLSearchParams(window.location.search);
  const privateKey = urlParams.get('private_key');

  function onPrivateKeyCopy(copyCallback: any) {
    copyCallback();
    setTimeout(() => {
      setIsModalVisible(false);
    }, 500);
  }

  return (
    <div>
      <Modal opened={isModalVisible} onClose={() => {}} title="Authorization" centered>
        {privateKey ? (
          <div>
            <Box mb={'lg'}>
              <Code w="full" fz="lg">
                {privateKey.slice(0, 24)}...
              </Code>
            </Box>
            <Box>
              <CopyButton value={privateKey}>
                {({ copied, copy }) => (
                  <Button
                    color={copied ? 'teal' : 'blue'}
                    onClick={() => onPrivateKeyCopy(copy)}
                  >
                    {copied ? 'Copied!' : 'Copy private key'}
                  </Button>
                )}
              </CopyButton>
            </Box>
          </div>
        ) : (
          <Flex justify={'center'} gap={20}>
            <Button
              h={200}
              color="#EEEDEB"
              onClick={() => {
                window.location.href = 'http://localhost:3000';
              }}
            >
              <Flex direction={'column'} align={'center'}>
                <Image
                  src={
                    'https://play-lh.googleusercontent.com/Pcn6hSM1uFWHDwE_JE8PYVGglnUGqMmvYzhcpJedEZDu7toPScEgWnI2A_2mOqVQEEM'
                  }
                  w={150}
                />
                <Text color="black">MyID.uz</Text>
              </Flex>
            </Button>

            <Button h={200} color="#EEEDEB">
              <Flex direction={'column'} align={'center'}>
                <Image
                  src={
                    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/1024px-MetaMask_Fox.svg.png'
                  }
                  w={150}
                />
                <Text color="black">MetaMask</Text>
              </Flex>
            </Button>
          </Flex>
        )}
      </Modal>
      <RouterProvider router={router} />;
    </div>
  );
};

export default App;
