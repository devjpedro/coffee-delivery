import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DefaultContainer from './layout/DefaultContainer'
import Checkout from './pages/Checkout'
import Home from './pages/Home'
import Success from './pages/Success'

export default function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultContainer />}>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/success" element={<Success />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
