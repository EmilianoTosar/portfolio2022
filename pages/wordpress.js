import {
  Container,
  Heading,
  SimpleGrid,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { ProyectGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'

import { wordpressWorks } from '../constants'

const Proyects = () => {
  return (
    <Layout>
      <Container mt={{ base: 12, md: 16 }} maxW="100%">
        <Heading as="h2" fontSize={32} mb={8}>
          Proyectos hechos en Wordpress
        </Heading>
        <Text
          mt={4}
          mb={8}
          align={'justify'}
          color={useColorModeValue('black', 'gray')}
        >
          Desde 2022 me encuentro trabajando como desarrollador Wordpress. He
          trabajado de manera freelance para diversas agencias de marketing,
          desarrollando landing pages, plataformas de e-commerce e
          institucionales. Tengo experiencia en el desarrollo de themes,
          plugins, manejo de custom fields, custom post types, uso de la api de
          Wordpress, etc. A continuación te dejo una pequeña muestra de mis
          trabajos:
        </Text>
        <SimpleGrid columns={[1, 1, 3]} spacing={8} minChildWidth="200px">
          {wordpressWorks.map((proyecto, i) => {
            return <ProyectGridItem proyecto={proyecto} key={i} />
          })}
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Proyects
