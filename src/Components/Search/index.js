import React, { useState } from 'react'
import { Container } from './styles'
import { useQuery, gql } from '@apollo/client'

const searchQuery = gql`
  query GetBuddies($name: String!) {
    buddies(where: { name_contains: $name }) {
      id
      name
      image
    }
  }
`

const Search = () => {
  const [name, setName] = useState('')
  const { data, loading, error } = useQuery(searchQuery, {
    variables: { name }
  })
  return (
    <Container>
      <input type="search" onChange={(event) => setName(event.target.value)} />
    </Container>
  )
}

export default Search
