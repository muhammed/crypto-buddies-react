import React from 'react'
import { Container } from '@/Theme/GlobalStyles/Container'
import Search from '@/Components/Search'
import FreshBuddies from '@/Components/FreshBuddies'

const Home = () => {
  return (
    <Container>
      <Search />
      <FreshBuddies />
    </Container>
  )
}

export default Home
