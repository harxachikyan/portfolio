// portfolio/src/components/Home.jsx
import React from 'react';
import {
    Box,
    Heading,
    Text,
    VStack,
    HStack,
    Image,
    SimpleGrid,
    Container,
    Button,
    useToast
} from '@chakra-ui/react';
import lg1 from '../assets/images/lg1.png';
import lg2 from '../assets/images/lg2.png';
import lg3 from '../assets/images/lg3.png';
import sl1 from '../assets/images/sl1.png';
import sl2 from '../assets/images/sl2.png';
import sl3 from '../assets/images/sl3.png';
import sl4 from '../assets/images/sl4.png';

const avatarUrl = 'https://www.w3schools.com/howto/img_avatar.png';

const Home = () => {
    const toast = useToast();

    const handleCopyPhone = () => {
        navigator.clipboard.writeText('+37493001064');
        toast({
            title: 'Phone number copied.',
            description: '+374 93 001064',
            status: 'success',
            duration: 3000,
            isClosable: true,
        });
    };

    return (
        <Box bg="#f8f6f3" minH="100vh" py={10}>
            <Container maxW="container.lg">
                <VStack align="start" spacing={10}>
                    <HStack spacing={6} align="center">
                        <Image
                            borderRadius="full"
                            boxSize="100px"
                            src={avatarUrl}
                            alt="Harut Xachikyan"
                        />
                        <Box>
                            <Heading size="md">Harut Xachikyan</Heading>
                            <Text fontSize="sm">Full Stack Web Developer</Text>
                        </Box>
                    </HStack>

                    <Box bg="#f0e9e4" p={8} w="full" borderRadius="lg">
                        <VStack align="start" spacing={4}>
                            <Heading size="lg">Unleash the power of your brand</Heading>
                            <Text fontSize="md">Hello there, Harut here 👋</Text>
                            <Text fontSize="sm">
                                I’m a web developer passionate about clean architecture and meaningful user experiences. <br />
                                My skills include React, Chakra UI, JavaScript, CSS, HTML, PHP, MySQL, Symfony, Git, GitHub. <br />
                                Currently learning React Native and AWS with GraphQL.
                            </Text>
                            <Button size="sm" colorScheme="teal" onClick={handleCopyPhone}>Let’s Touch</Button>
                        </VStack>
                    </Box>

                    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} w="full">
                        <Box p={4} bg="white" borderRadius="md" boxShadow="md">
                            <Heading size="sm" mb={2}>Frontend Development</Heading>
                            <Text fontSize="sm">Building responsive interfaces with React, Chakra UI, and modern CSS.</Text>
                        </Box>
                        <Box p={4} bg="white" borderRadius="md" boxShadow="md">
                            <Heading size="sm" mb={2}>Backend Development</Heading>
                            <Text fontSize="sm">Powering apps with Symfony, PHP, and MySQL for solid data management.</Text>
                        </Box>
                        <Box p={4} bg="white" borderRadius="md" boxShadow="md">
                            <Heading size="sm" mb={2}>Learning & Cloud</Heading>
                            <Text fontSize="sm">Exploring React Native, AWS services, and GraphQL integration.</Text>
                        </Box>
                    </SimpleGrid>

                    <Box w="full">
                        <Heading size="md" mb={4}>Sneak peek of my recent projects</Heading>
                        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
                            {[lg1, lg2, lg3].map((img, i) => (
                                <Box
                                    key={`lt-${i}`}
                                    bg="white"
                                    borderRadius="md"
                                    boxShadow="md"
                                    overflow="hidden"
                                    transition="transform 0.3s ease"
                                    _hover={{ transform: 'scale(1.05)' }}
                                >
                                    <Image src={img} alt={`LegalTitan ${i + 1}`} />
                                    <Box p={4}>
                                        <Heading size="sm">LegalTitan</Heading>
                                        <Text fontSize="sm">Website for a law firm with clean layout and sectioned content.</Text>
                                    </Box>
                                </Box>
                            ))}
                            {[sl1, sl2, sl3, sl4].map((img, i) => (
                                <Box
                                    key={`sn-${i}`}
                                    bg="white"
                                    borderRadius="md"
                                    boxShadow="md"
                                    overflow="hidden"
                                    transition="transform 0.3s ease"
                                    _hover={{ transform: 'scale(1.05)' }}
                                >
                                    <Image src={img} alt={`SoulNest ${i + 1}`} />
                                    <Box p={4}>
                                        <Heading size="sm">SoulNest</Heading>
                                        <Text fontSize="sm">Therapy-focused site built with Chakra UI for emotional connection.</Text>
                                    </Box>
                                </Box>
                            ))}
                        </SimpleGrid>
                    </Box>
                </VStack>
            </Container>
        </Box>
    );
};

export default Home;