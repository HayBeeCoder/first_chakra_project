import { Container, Flex, VStack } from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import Cart from '../components/Cart'
import Details from '../components/Details'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Container maxW="container.xl" p={0}>

      <Flex h="100vh" py={10}>
     <Details/>
     <Cart/>

    

      </Flex>
    </Container>
  )
}
