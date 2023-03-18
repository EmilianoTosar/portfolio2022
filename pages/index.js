import {
  Container,
  Box,
  Heading,
  Image,
  Text,
  SimpleGrid,
  Link,
  useColorModeValue,
  HStack,
  Icon,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import Layout from '../components/layouts/article'
import { proyectos } from '../constants'
import { ProyectGridItem } from '../components/grid-item'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { ContactForm } from '../components/contact-form'
import { Skills } from '../components/skills'
import { Chatbot } from '../components/chatbot.tsx'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

export default function Page() {
  const firstProyects = proyectos.slice(0, 3)

  return (
    <Layout>
      <Container maxWidth="100%">
        <Box
          display="flex"
          justifyContent="space-between"
          mt={{ base: 12, md: 16 }}
          flexDirection={{ base: 'column-reverse', md: 'row' }}
        >
          <Box pr={12}>
            <Heading as="h1" variant="page-title" mb={5} fontSize={48}>
              Emiliano Tosar
            </Heading>
            <p>Frontend Developer Jr.</p>
            <Text mt={4} color={useColorModeValue('black', 'gray')}>
              Desarrollador JavaScript autodidacta. Desde 2020 me encuentro en
              constante aprendizaje y estoy siempre en búsqueda de nuevos
              desafíos.
            </Text>
            <HStack mt={5} spacing={4}>
              <a
                href="https://github.com/EmilianoTosar"
                target="_blank"
                rel="noreferrer"
              >
                <Icon as={FaGithub} h={5} w={5} />
              </a>
              <a
                href="https://www.linkedin.com/in/emiliano-tosar-331482200"
                target="_blank"
                rel="noreferrer"
              >
                <Icon as={FaLinkedin} h={5} w={5} />
              </a>
              <a
                href="https://twitter.com/emiliano_ttt"
                target="_blank"
                rel="noreferrer"
              >
                <Icon as={FaTwitter} h={5} w={5} />
              </a>
            </HStack>
          </Box>
          <Box
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align={{ base: 'left', md: 'center' }}
            display='flex'
            flexDirection='column'
            alignItems='center'
          >
            <Image
              borderColor="whiteAlpha.200"
              borderWidth={2}
              borderStyle="solid"
              maxWidth={{ base: '160px', md: '200px' }}
              display="inline-block"
              borderRadius="full"
              src="/images/fotoDePerfil.png"
              alt="Foto de perfil"
            />
            <Link
              href=""
              download="Emiliano Tosar CV"
              variant="download"
            >
              descargá mi cv!
            </Link>
          </Box>
        </Box>
        <Box mt={{ base: 12, md: 16 }}>
          <Heading as="h2" mb={5}>
            Mis Proyectos
          </Heading>
          <SimpleGrid columns={[1, 1, 3]} spacing={8} minChildWidth="200px">
            {firstProyects.map((proyect, id) => {
              return <ProyectGridItem proyecto={proyect} key={id} />
            })}
          </SimpleGrid>
          <Box mt={5}>
            <NextLink href="/proyects" passHref>
              <Link
                fontSize={13}
                _hover={{ color: useColorModeValue('gray', 'white') }}
              >
                Ver más <ArrowForwardIcon />
              </Link>
            </NextLink> 
          </Box>
        </Box>
        <Box mt={{ base: 12, md: 24 }}>
          <Skills />
        </Box>
        <Box mt={{ base: 12, md: 24 }}>
          <Chatbot />
        </Box>
        <Box mt={{ base: 12, md: 24 }} id="contact">
          <ContactForm />
        </Box>
      </Container>
    </Layout>
  )
}
