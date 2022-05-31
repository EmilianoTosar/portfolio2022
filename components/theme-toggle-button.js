import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

const ThemeToggleButton = () => {
  const { toggleColorMode } = useColorMode()

  return (
    <IconButton
      aria-label="Toggle theme"
      backgroundColor={useColorModeValue('#eaeaea', '#444444')}
      icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
      onClick={toggleColorMode}
      _focus={{outline: 'none'}}
    />
  )
}

export default ThemeToggleButton
