// portfolio/src/components/Contact.jsx
import React from 'react';
import { Box, Heading, Text, VStack, Link, Container, HStack } from '@chakra-ui/react';
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
    return (
        <Box bg="#f8f6f3" py={10}>
            <Container maxW="container.sm">
                <VStack align="start" spacing={6}>
                    <Heading size="lg">Let’s work together</Heading>
                    <Text fontSize="md">
                        Want to collaborate, work on a project, or just say hi? I'm always open to connecting!
                    </Text>

                    <VStack align="start" spacing={4}>
                        <HStack spacing={3}>
                            <FaEnvelope />
                            <Link href="mailto:harxachikyan2020@mail.ru" color="teal.600" fontSize="md" isExternal>
                                harxachikyan2020@mail.ru
                            </Link>
                        </HStack>

                        <HStack spacing={3}>
                            <FaPhone />
                            <Text fontSize="md">+374 93 001064</Text>
                        </HStack>

                        <HStack spacing={3}>
                            <FaGithub />
                            <Link href="https://github.com/harxachikyan" color="teal.600" fontSize="md" isExternal>
                                GitHub
                            </Link>
                        </HStack>

                        <HStack spacing={3}>
                            <FaLinkedin />
                            <Link href="https://www.linkedin.com/in/har-xachikyan-a63ba91bb/" color="teal.600" fontSize="md" isExternal>
                                LinkedIn
                            </Link>
                        </HStack>
                    </VStack>
                </VStack>
            </Container>
        </Box>
    );
};

export default Contact;
