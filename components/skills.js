import { Stack, Box, Heading } from '@chakra-ui/react'
import { Icon } from '@iconify/react'
import { icons } from '../constants'

export const Skills = () => (
  <Box>
    <Heading as="h2" mb={5}>
      Skills
    </Heading>
    <Stack direction={['column', 'row']} spacing={6}>
      {icons.map((icon, index) => (
        <Icon key={index} icon={icon} height={38} />
      ))}
    </Stack>
  </Box>
)
