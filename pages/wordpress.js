import { Container, Heading, SimpleGrid, Text, useColorModeValue } from '@chakra-ui/react'
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
        <Text mt={4} mb={8} align={'justify'} color={useColorModeValue('black', 'gray')}>
          Desde 2022 me encuentro trabajando como desarrollador Wordpress. Como siempre me interesó más el código que el diseño en sí, aproveché esta oportunidad para interiorizarme en el lenguaje sobre el que está construido WP y en la arquitectura del mismo. Actualmente me encuentro aprendiendo PHP, y estoy estudiando sobre desarrollo de themes, plugins, custom fields, custom post types, la api de Wordpress, etc., para agregarle valor al diseño en Wordpress y que no sea un mero copiar y pegar bloques.
          Llevo creados más de 15 sitios, a continuación te dejo una pequeña muestra de mis trabajos:
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
