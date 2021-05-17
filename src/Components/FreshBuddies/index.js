import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { Container } from '@/Theme/GlobalStyles/Container'
import { List, Title, Wrapper } from './styles'
import BuddyCard from '@/Components/BuddyCard'
import BuddiesList from '@/Components/BuddiesList'

const freshBuddiesQuery = gql`
  query GetFreshBuddies($limit: Int!) {
    buddies(last: $limit) {
      id
      name
      image
    }
  }
`

const FreshBuddies = () => {
  const { data, loading, error } = useQuery(freshBuddiesQuery, {
    variables: {
      limit: 10
    }
  })
  return (
    <Container>
      <Wrapper>
        <Title>Fresh cryptobuddies</Title>
        <BuddiesList list={data?.buddies} />
        {error && error}
      </Wrapper>
    </Container>
  )
}

export default FreshBuddies
