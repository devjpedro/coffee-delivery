import { MapPin, ShoppingCart } from 'phosphor-react'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import { Cart, HeaderContainer, Location } from './styled'

export default function Header() {
  const navigate = useNavigate()
  return (
    <HeaderContainer>
      <Link to="/">
        <img src={Logo} alt="" />
      </Link>
      <div>
        <Location>
          <MapPin size={22} weight="fill" />
          Brasília, DF
        </Location>
        <Cart onClick={() => navigate('/checkout')}>
          <ShoppingCart size={22} weight="fill" />
        </Cart>
      </div>
    </HeaderContainer>
  )
}
