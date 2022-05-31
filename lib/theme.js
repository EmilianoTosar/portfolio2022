import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('#f9fafb', '#111111')(props),
    },
  }),
}

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4,
      },
    },
  },
  Link: {
    baseStyle: props => ({
      color: mode('black', 'grey')(props),
      borderRadius: 'md',
      _hover: {
        textDecoration: 'none',
        backgroundColor: '#a3a3a3',
      },
    }),
    variants: {
      download: {
        fontSize: '14px',
        _hover: {
          background: 'transparent',
          textDecoration: 'underline',
          color: mode('grey', 'white'),
        },
      },
    },
  },
  Input: {
    baseStyle: props => ({
      border: 'none',
      backgroundColor: mode('#ffffff', '#222222')(props),
    }),
  },
  Button: {
    variants: {
      'card-button': {
        bg: '#6e44ff',
        _hover: {
          bg: '#7ee7c2',
        },
      },
    },
  },
}

const fonts = {
  heading: "'IBM Plex Sans'",
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const theme = extendTheme({
  config,
  styles,
  components,
  fonts,
})

export default theme
