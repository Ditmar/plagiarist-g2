import React from 'react'
import { NavBar } from './NavBar'
import { SideBar } from './SideBar'

export const MainPage = () => {
  return (
    <>
      <section>
        <div>
          <NavBar />
        </div>
      </section>
      <section>
        <div>
          <SideBar />
        </div>
      </section>
    </>
  )
}
