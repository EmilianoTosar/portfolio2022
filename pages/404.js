import NextLink from 'next/link'
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button,
} from '@chakra-ui/react'

const NotFound = () => {
  return (
    <Container mt={{ base: 12, md: 16 }}>
      <Heading as="h1">Not Found</Heading>
      <Text>Parece que no hay nada por aquí</Text>
      <Divider my={6} />
      <Box my={6} align="center">
        <NextLink href="/" passHref>
          <Button colorScheme="teal">Volver al Home</Button>
        </NextLink>
      </Box>
    </Container>
  )
}

export default NotFound
