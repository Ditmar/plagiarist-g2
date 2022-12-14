import React from 'react'
import {useLocation} from 'react-router-dom'

export const ListarTesis = () => {

  const {pathname} = useLocation()

  console.log(pathname)
  return (
    <div>ListarTesis</div>
  )
}
