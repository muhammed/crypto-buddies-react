import React, { useState } from 'react'
import { Wrapper } from './styles'
import { useQuery, useLazyQuery, gql } from '@apollo/client'
import { Container } from '@/Theme/GlobalStyles/Container'

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
  const [getSearch, { data, loading, error }] = useLazyQuery(searchQuery)

  const handleSearch = (value) => {
    console.log({ value })
    if (!value || value === '') {
      return
    }
    console.log(222, { value })
    setName(value)
    getSearch({
      variables: { name: value }
    })
  }

  return (
    <Wrapper>
      <Container>
        <input
          type="search"
          onChange={(event) => handleSearch(event.target.value)}
        />
        <button onClick={() => handleSearch(name)}>get search</button>
      </Container>
    </Wrapper>
  )
}

export default Search
