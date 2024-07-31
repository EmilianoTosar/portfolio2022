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
          Tengo experiencia en el desarrollo y personalización de temas de WordPress, incluyendo la creación de child themes. Soy experto en la configuración y optimización de plugins, así como en el desarrollo de soluciones personalizadas. Manejo prácticas de seguridad, gestión de usuarios y optimización SEO. Además, tengo conocimientos en HTML, CSS, y JavaScript para personalizaciones avanzadas, y experiencia en e-commerce con WooCommerce. También realizo migraciones de sitios y utilizo herramientas como Google Analytics para mejorar el rendimiento de los sitios.
        </Text>
        <Text
          mt={4}
          mb={8}
          align={'justify'}
          color={useColorModeValue('black', 'gray')}
        >
          A continuación, una pequeña muestra de mis trabajos:
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
