import React from 'react'
import useStyles from './header.styles';
import {searchGiffs} from '../../services';
const Header = () => {
  searchGiffs('better call saul');
  const classes = useStyles();
  return (
    <>
        <div className={classes.header}>
            <h1 className={classes.h1}>
                Blog Data
            </h1>
        </div>
        <hr/>
    </>
  )
}
export default Header;