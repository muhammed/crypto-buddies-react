import React from 'react'
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom'

import { ThemeProvider } from 'styled-components'

import { defaultTheme } from '@/Theme/theme'
import GlobalStyle from '@/Theme/GlobalStyles/GlobalStyles'
import '@/Assets/scss/main.scss'

import Home from '@/Pages/Home'
import Details from '@/Pages/Details'
import Page404 from '@/Pages/404'
import { DETAILS_PATH, HOME_PATH } from '@/Constants/routeNames'
import Navigation from '@/Components/Navigation'

import { ApolloProvider } from '@apollo/client/react'
import { ApolloClient, InMemoryCache } from '@apollo/client'
import Footer from '@/Components/Footer'

const client = new ApolloClient({
  uri: 'https://eu1.prisma.sh/nevena-djaja/mocks/dev',
  cache: new InMemoryCache()
})

const App = () => {
  return (
    <>
      <ApolloProvider client={client}>
        <ThemeProvider theme={defaultTheme}>
          <GlobalStyle />
          <BrowserRouter>
            <div className="page">
              <Navigation />
              <div className="page-content">
                <Switch>
                  <Route exact path={HOME_PATH}>
                    <Home />
                  </Route>
                  <Route path={`${DETAILS_PATH}/:id`}>
                    <Details />
                  </Route>
                  <Route>
                    <Page404 />
                  </Route>
                </Switch>
              </div>
              <Footer />
            </div>
          </BrowserRouter>
        </ThemeProvider>
      </ApolloProvider>
    </>
  )
}

export default App
