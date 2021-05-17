import React from 'react'
import { HOME_PATH, USER_PATH } from '@/Constants/routeNames'
import Link from '@/Components/Link'
import { Container } from './styles'

const Navigation = () => {
  return (
    <Container>
      <Link to={HOME_PATH}>
        <img src="/images/icons-logo.svg" />
      </Link>
      <Link to={USER_PATH}>
        <img src="/images/icons-user.svg" />
      </Link>
    </Container>
  )
}

export default Navigation
