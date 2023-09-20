import React, { memo, Suspense } from 'react'
import { Link, Outlet } from 'react-router-dom'
import type { FC, ReactNode } from 'react'
import NavBar from './c-cpns/nav-bar/nav-bar'

interface IProps {
  children?: ReactNode
}

const Discover: FC<IProps> = (props) => {
  return (
    <div>
      <NavBar></NavBar>
      <Suspense fallback="">
        <Outlet></Outlet>
      </Suspense>
    </div>
  )
}
export default memo(Discover)
