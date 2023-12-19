import { MapPin, ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../../assets/logo.svg'
import { CartContext } from '../../contexts/CartContext'
import { Cart, HeaderContainer, Location } from './styled'

export default function Header() {
  const navigate = useNavigate()
  const { coffees } = useContext(CartContext)
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
          {coffees.length > 0 && <div>{coffees.length}</div>}
        </Cart>
      </div>
    </HeaderContainer>
  )
}
