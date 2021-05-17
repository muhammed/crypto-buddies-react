import React, { useEffect, useState } from 'react'
import { Container } from '@/Theme/GlobalStyles/Container'
import { useParams, useLocation } from 'react-router-dom'
import { useLazyQuery, gql } from '@apollo/client'
import BuddyDetails from '@/Components/BuddyDetails'

const buddyDetailsQuery = gql`
  query GetBuddyDetails($id: ID!) {
    buddies(where: { id: $id }) {
      id
      name
      image
    }
  }
`

const Details = (props) => {
  const { id } = useParams()
  const { state } = useLocation()
  const [details, setDetails] = useState({})
  const [getDetailsFromAPI, { data, loading, error }] =
    useLazyQuery(buddyDetailsQuery)

  const getDetails = () => {
    if (state?.initialItem) {
      setDetails(state.initialItem)
      return
    }
    getDetailsFromAPI({
      variables: { id: id }
    })
  }

  useEffect(() => {
    getDetails()
  }, [])

  useEffect(() => {
    if (!state?.initialItem) {
      setDetails(data?.buddies?.[0] || {})
    }
  }, [data])

  return (
    <Container>
      {state?.initialItem ? (
        <>
          <BuddyDetails details={details} />
        </>
      ) : (
        <>
          {loading && 'Loading...'}
          {error && error}
          {data?.buddies?.length && <BuddyDetails details={details} />}
        </>
      )}
    </Container>
  )
}

export default Details
