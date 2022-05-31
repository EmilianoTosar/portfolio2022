import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import { ProyectGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'

import { proyectos, frontendExercises } from '../constants'

const Proyects = () => {
  return (
    <Layout>
      <Container mt={{ base: 12, md: 16 }} maxW="100%">
        <Heading as="h2" fontSize={32} mb={8}>
          Proyectos
        </Heading>
        <SimpleGrid columns={[1, 1, 3]} spacing={8} minChildWidth="200px">
          {proyectos.map((proyecto, i) => {
            return <ProyectGridItem proyecto={proyecto} key={i}/>
          })}
        </SimpleGrid> 
        <Divider mt={12} mb={12}/>
        <Heading as="h2" fontSize={32} mb={8}>
          Componentes
        </Heading>
        <SimpleGrid columns={[1, 1, 3]} spacing={8} minChildWidth="200px">
          {frontendExercises.map((proyecto, i) => {
            return <ProyectGridItem proyecto={proyecto} key={i}/>
          })}
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Proyects

