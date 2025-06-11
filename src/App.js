// portfolio/src/App.jsx
import React, { useState } from 'react';
import {
    Box,
    HStack,
    Button,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton
} from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route, Link as RouterLink } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';

function App() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Router>
            <Box p={4} bg="white" borderBottom="1px" borderColor="gray.200">
                <HStack spacing={4} justify="center">
                    <Button as={RouterLink} to="/" variant="link" colorScheme="teal">
                        Home
                    </Button>
                    <Button onClick={onOpen} variant="link" colorScheme="teal">
                        Get in Touch
                    </Button>
                </HStack>
            </Box>

            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>

            <Modal isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Contact Me</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <Contact />
                    </ModalBody>
                </ModalContent>
            </Modal>
        </Router>
    );
}

export default App;
