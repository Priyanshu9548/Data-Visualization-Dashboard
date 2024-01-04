import React, { useState } from 'react';
import {
  Box,
  Container,
  FormControl,
  FormLabel,
  Input,
  Button,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from '@chakra-ui/react';

const LoginPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    setIsOpen(true);
    setTimeout(() => {
      setIsOpen(false);
      window.location.href = '/dashboard';
    }, 2000);
  };

  return (
    <Box
      bg="linear-gradient(to right, #ff9966, #ff5e62, #ff2a6a)"
      minH="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Container
        p={6}
        height={330}
        width={690}
        borderWidth={2}
        borderRadius="xl"
        boxShadow="xl"
        borderColor="white" 
        textAlign="center"
      >
        <p style={{ color: 'white', fontSize: "20px" }}>Welcome Admin !!!</p>
        <form>
          <FormControl>
            <FormLabel style={{ color: 'white' }}>Admin Email</FormLabel>
            <Input
              type="text"
              placeholder="Enter your username"
              value="admin@gmail.com"
              borderColor="white" 
              enabled
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel style={{ color: 'white' }}>Password</FormLabel>
            <Input
              type="password"
              placeholder="Enter your password"
              value="admin" 
              borderColor="white"
              enabled
            />
          </FormControl>
          <Button colorScheme="green" mt={6} w="100%" onClick={handleLogin}>
            Login
          </Button>
          {/* AlertDialog */}
          <AlertDialog isOpen={isOpen} leastDestructiveRef={undefined}>
            <AlertDialogOverlay>
              <AlertDialogContent bg="#5F8670" color="white">
                <AlertDialogHeader>Welcome Admin !!!</AlertDialogHeader>
                <AlertDialogBody>
                  Redirecting to the dashboard page...
                </AlertDialogBody>
                <AlertDialogFooter>
                  <Button onClick={() => setIsOpen(false)}>Cancel</Button>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialogOverlay>
          </AlertDialog>
        </form>
      </Container>
    </Box>
  );
};

export default LoginPage;
