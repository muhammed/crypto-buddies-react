import React, { useState } from 'react'
import { CloseButton, Wrapper } from './styles'
import { useQuery, useLazyQuery, gql } from '@apollo/client'
import { Container } from '@/Theme/GlobalStyles/Container'
import { Icon, InputWrapper, Input, List, Content } from './styles'
import BuddiesList from '@/Components/BuddiesList'

const searchQuery = gql`
  query GetBuddies($name: String!, $first: Int!) {
    buddies(where: { name_contains: $name }, first: $first) {
      id
      name
      image
    }
  }
`

const Search = () => {
  const [focused, setFocused] = useState(false)
  const [name, setName] = useState('')
  const [getSearch, { data }] = useLazyQuery(searchQuery)

  const handleSearch = (value) => {
    setName(value)
    if (!value || value === '') {
      return
    }
    getSearch({
      variables: { name: value, first: 4 }
    })
  }

  const handleClose = () => {
    setFocused(false)
    setName('')

    getSearch({
      variables: { name: undefined }
    })
  }

  return (
    <Wrapper active={focused}>
      <Content as={Container}>
        <InputWrapper>
          <Icon src="/images/icons-search.svg" />
          <Input
            placeholder="Crypto buddies"
            type="search"
            value={name}
            active={name?.length > 0}
            onChange={(event) => handleSearch(event.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
          />
          {name?.length > 0 && (
            <CloseButton onClick={handleClose}>
              <img src="/images/icons-close.svg" />
            </CloseButton>
          )}
        </InputWrapper>
        <List>
          {name?.length > 0 && (
            <BuddiesList list={data?.buddies} showAnimation={true} />
          )}
        </List>
      </Content>
    </Wrapper>
  )
}

export default Search
