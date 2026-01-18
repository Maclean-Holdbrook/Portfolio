import { Outlet, ScrollRestoration } from 'react-router-dom'
import Navbar from './Navbar'

const Layout = () => {
  return (
    <>
      <ScrollRestoration />
      <div>
        <Navbar />
      </div>
      <Outlet />
    </>
  )
}

export default Layout