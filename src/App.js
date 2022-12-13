import React from 'react'
import { PagePrincipal } from './pages/PagePrincipal/PagePrincipal'
import {BrowserRouter as Router} from 'react-router-dom';

export const App = () => {
  return (
    <Router>
        <PagePrincipal />
    </Router>
  )
}