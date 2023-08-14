import { Center, useColorModeValue } from '@chakra-ui/react'

const Footer = () => {
  const year = new Date()
  return (
    <Center
      as="foot"
      w="100%"
      bg={useColorModeValue('#ffffff', '#202023')}
      zIndex={1}
      p={4}
      mt={16}
    >
      <h6>Copyright {year.getYear() + 1900}, Emiliano Tosar</h6>
    </Center>
  )
}

export default Footer
