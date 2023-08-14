import { Box, Heading } from '@chakra-ui/react'
import { Icon } from '@iconify/react'
import { icons } from '../constants'

export const Skills = () => (
  <Box>
    <Heading as="h2" mb={5}>
      Skills
    </Heading>
    <div className="flex flex-wrap space-x-8 md:space-x-10">
      {icons.map((icon, index) => (
        <div key={index} className="pb-6">
          <Icon icon={icon} height={38} pb={10} />
        </div>
      ))}
    </div>
  </Box>
)
