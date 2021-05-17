import React from 'react'
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom'

import { ThemeProvider } from 'styled-components'

import { GlobalProvider } from '@/Context/GlobalProvider'
import { ToastrProvider } from '@/Context/ToastrProvider'

import { defaultTheme } from '@/Theme/theme'
import GlobalStyle from '@/Theme/GlobalStyles/GlobalStyles'
import '@/Assets/scss/main.scss'

import ToastrList from '@/Components/ToastrList'
import Home from '@/Pages/Home'
import Page404 from '@/Pages/404'
import { HOME_PATH } from '@/Constants/routeNames'
import Navigation from '@/Components/Navigation'

const App = () => {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalProvider>
          <ToastrProvider>
            <ToastrList />
            <GlobalStyle />
            <BrowserRouter>
              <div className="page">
                <Navigation />
                <div className="page-content">
                  <Switch>
                    <Route exact path={HOME_PATH}>
                      <Home />
                    </Route>
                    <Route>
                      <Page404 />
                    </Route>
                  </Switch>
                </div>
              </div>
            </BrowserRouter>
          </ToastrProvider>
        </GlobalProvider>
      </ThemeProvider>
    </>
  )
}

export default App
