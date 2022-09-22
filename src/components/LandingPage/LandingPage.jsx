import React from 'react'
import useStyles from './LandingPage.styles'

export const LandingPage = ({ children }) => {
    const classes = useStyles();
  return (
    <div className={classes.container}>
        { children }
    </div>
  )
}
