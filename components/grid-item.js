import { Text, Box, Button, Icon } from '@chakra-ui/react'
import { FaGithub, FaGlobe } from 'react-icons/fa'

export const ProyectGridItem = ({ proyecto }) => {
  return (
    <Box>
      <Box
        role="group"
        h={220}
        w="100%"
        borderRadius="md"
        backgroundImage={proyecto.thumbnail}
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        overflow="hidden"
        transition="transform 500ms ease"
        _hover={{ transform: 'scale(1.05)' }}
      >
        <Box
          display="none"
          padding={6}
          h="100%"
          _groupHover={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            background: 'linear-gradient(45deg, #a253ed, #7ee7c2)',
            opacity: '0.9',
          }}
        >
          <Text
            fontSize={13}
            color="white"
            opacity="0"
            transition="opacity 1000ms linear"
            _groupHover={{ opacity: '1' }}
          >
            {proyecto.description}
          </Text>
          <Box display="flex" justifyContent={proyecto.repo ? "space-between" : "center"}>
            {proyecto.repo ? (
              <a href={proyecto.repo} target="_blank" rel="noreferrer">
                <Button size="sm" variant="card-button">
                  <Icon as={FaGithub} />
                </Button>
              </a>
            ) : (
              ''
            )}
            <a href={proyecto.href} target="_blank" rel="noreferrer">
              <Button size="sm" variant="card-button">
                <Icon as={FaGlobe} />
              </Button>
            </a>
          </Box>
        </Box>
      </Box>
      <Text mt={2}>{proyecto.title}</Text>
    </Box>
  )
}
{
  /*

  <LinkBox as="article" cursor="pointer" w="100%" align="center">
   
      <NextLink href={proyecto.href} passHref>
        <LinkOverlay isExternal>
          <Image
            src={proyecto.thumbnail}
            alt={proyecto.alt}
            height={220}
            width="100%"
            borderRadius="md"
            align="center"
            css={css`
              background: linear-gradient(#fff, #fff) padding-box,
                linear-gradient(45deg, #7ee7c2, #a253ed) border-box;
              border: 5px solid transparent;
              border-radius: 15px;
            `}
          />
        </LinkOverlay>
      </NextLink>

    <Text fontSize={14}>{proyecto.description}</Text> 
    <Text fontSize={16} mt={2}>
      {proyecto.title}
    </Text>
  </LinkBox> 
  
  */
}
