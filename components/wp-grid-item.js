import { Text, Box } from '@chakra-ui/react'

export const ProyectGridItem = ({ proyecto }) => {

  return (
    <Box>
      <a href={proyecto.href} target="_blank" rel="noreferrer">
        <Box
          role="group"
          h={220}
          w="100%"
          borderRadius="md"
          position="relative"
          overflow="hidden"
          transition={'transform 500ms ease'}
          _hover={{ transform: 'scale(1.01)' }}
        >
          <Box
            position="absolute"
            top="0"
            left="0"
            right="0"
            bottom="0"
            backgroundImage={proyecto.thumbnails[0]}
            backgroundSize="cover"
            backgroundRepeat="no-repeat"
            backgroundPosition="center"
          />
          <Box
            position="absolute"
            top="0"
            left="0"
            right="0"
            bottom="0"
            bg='linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)'
            opacity={0}
            transition="opacity 500ms ease"
            _groupHover={{ opacity: 1 }}
            zIndex={1}
          />
          <Box
            display="none"
            padding={6}
            h="100%"
            position="relative"
            zIndex={1}
            _groupHover={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'end',
            }}
          >
            <Text
              fontSize={16}
              color='white'
              opacity="0"
              as="b"
              transition="opacity 1000ms linear"
              _groupHover={{ opacity: '1' }}
            >
              {proyecto.description}
            </Text>
          </Box>
        </Box>
        <Text mt={2}>{proyecto.title}</Text>
      </a>
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
