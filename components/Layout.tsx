import React, { Children } from 'react'
import Header from './Header'

interface Props {
    children : any
}

function Layout({children }: Props) {
  return (
    <>
        <Header />
        {Children}
    </>
  )
}

export default Layout