import { Outlet } from 'react-router-dom'
import Header from '../../components/Header'
import { ScrollToTop } from '../../components/ScrolLToTop'

export default function DefaultContainer() {
  return (
    <>
      <Header />
      <ScrollToTop />
      <Outlet />
    </>
  )
}
