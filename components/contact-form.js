import {
  Flex,
  FormControl,
  Text,
  FormLabel,
  Input,
  Textarea,
  Button,
  Heading,
  HStack,
  Alert,
  AlertIcon,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { useColorModeValue } from '@chakra-ui/react'

export const ContactForm = () => {
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [form, setForm] = useState('')

  const handleChange = e => {
    setInputs(prev => ({
      ...prev,
      [e.target.id]: e.target.value,
    }))
  }

  const handleSubmit = async e => {
    e.preventDefault()

    if (inputs.name && inputs.email && inputs.message) {
      setForm({ state: 'loading' })
      try {
        const res = await fetch(`api/contact`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(inputs),
        })

        const { error } = await res.json()

        if (error) {
          setForm({
            state: 'error',
            message: error,
          })
          return
        }

        setForm({
          state: 'success',
          message: 'Mensaje enviado!',
        })
        setInputs({
          name: '',
          email: '',
          message: '',
        })
      } catch (error) {
        setForm({
          state: 'error',
          message: 'Ocurrió un error, probá comunicarte por dm de twitter o linkedin.',
        })
      }
    }
  }

  return (
    <form onSubmit={e => handleSubmit(e)}>
      <Flex
        width="100%"
        flexDirection="column"
        borderWidth={2}
        borderColor={useColorModeValue('#D8E9FF', '#151519')}
        borderRadius="md"
        backgroundColor={useColorModeValue('#eff6ff', '#101629')}
        p={6}
      >
        <Heading>Contacto</Heading>
        <Text fontWeight="semibold">
          Si te interesa mi trabajo, no dudes en contactarme.
        </Text>
        <HStack justifyContent="space-between" mt={2}>
          <FormControl width="40%" isRequired>
            <FormLabel htmlFor="email" requiredIndicator=""></FormLabel>
            <Input
              id="email"
              type="email"
              placeholder="email"
              onChange={handleChange}
              value={inputs.email}
              border="none"
              backgroundColor={useColorModeValue('#ffffff', '#222222')}
            />
          </FormControl>
          <FormControl width="40%" isRequired>
            <FormLabel htmlFor="name" requiredIndicator=""></FormLabel>
            <Input
              id="name"
              type="text"
              placeholder="nombre"
              onChange={handleChange}
              value={inputs.name}
              border="none"
              backgroundColor={useColorModeValue('#ffffff', '#222222')}
            />
          </FormControl>
        </HStack>
        <HStack>
          <FormControl isRequired>
            <FormLabel htmlFor="message" requiredIndicator=""></FormLabel>
            <Textarea
              id="message"
              placeholder="tu mensaje"
              onChange={handleChange}
              value={inputs.message}
              border="none"
              backgroundColor={useColorModeValue('#ffffff', '#222222')}
              resize="none"
              _focus={{ zIndex: '0' }}
            ></Textarea>
          </FormControl>
          <Button type="submit" position="absolute" right={14} isLoading={form.state === 'loading' ? true : false} loadingText='Enviando'>
            Enviar
          </Button>
        </HStack>
         {form.state === 'error' ? ( 
          <Alert status={form.status ==='error' ? 'error' : 'success'} background='transparent' fontSize={14} p={1} color='#2f965c'>
            <AlertIcon />
            {form.message}
          </Alert>
        ) : (
          form.state === 'success' && (
            <Alert status='success' background='transparent' fontSize={14} p={1} color='#36915a'>
              <AlertIcon />
              Mensaje enviado!
            </Alert>
          )
        )}  
      </Flex>
    </form>
  )
}
