import {
  Container,
  Heading,
  SimpleGrid,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { ProyectGridItem } from '../components/wp-grid-item'
import Layout from '../components/layouts/article'

import { wordpressWorks } from '../constants'

const Proyects = () => {
  return (
    <Layout>
      <Container mt={{ base: 12, md: 16 }} maxW="100%">
        <Heading as="h2" fontSize={32} mb={8}>
          Desarrollo en Wordpress
        </Heading>
        <Text
          mt={4}
          align={'justify'}
          color={useColorModeValue('black', 'gray')}
        >
          Trabajo como desarrollador Wordpress desde el año 2022 de manera
          freelance, tanto con clientes propios como para distintas agencias de
          marketing, desarrollando landing pages, plataformas de e-commerce e
          institucionales.
        </Text>
        <Text
          mt={4}
          mb={8}
          align={'justify'}
          color={useColorModeValue('black', 'gray')}
        >
          Tengo experiencia en el desarrollo de themes, plugins, manejo de
          custom fields, custom post types, uso de la api de Wordpress, bloques
          Gutenberg. También trabajo haciendo limpieza de malware, levantamiento
          de sitios caídos, mejoras de seguridad, y todo lo que sea
          mantenimiento web.
        </Text>
        <Text
          mt={4}
          mb={8}
          align={'justify'}
          color={useColorModeValue('black', 'gray')}
        >
          A continuación te dejo una pequeña muestra de mis trabajos:
        </Text>
        <SimpleGrid columns={[1, 1, 2]} spacing={8} minChildWidth="300px">
          {wordpressWorks.map((proyecto, i) => {
            return <ProyectGridItem proyecto={proyecto} key={i} />
          })}
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Proyects
