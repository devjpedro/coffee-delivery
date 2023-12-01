import { MapPin } from 'phosphor-react'
import Logo from '../../assets/logo.png'
import { Cart, HeaderContainer, Location } from './styled'

export default function Header() {
  return (
    <HeaderContainer>
      <img src={Logo} alt="" />
      <div>
        <Location>
          <MapPin size={22} weight="fill" />
          Brasília, DF
        </Location>
        <Cart size={22} weight="fill" />
      </div>
    </HeaderContainer>
  )
}
