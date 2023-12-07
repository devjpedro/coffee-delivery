import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useContext } from 'react'
import SuccessImage from '../../assets/SuccessImage.png'
import { CartContext } from '../../contexts/CartContext'
import { ContentContainer, MainContainer, OrderInfo } from './styled'
export default function Success() {
  const { order } = useContext(CartContext)

  return (
    <MainContainer>
      <ContentContainer>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
        <OrderInfo>
          <div className="local">
            <MapPin weight="fill" size={16} />
            <span>
              {`Entrega em ${order[0].street}, ${order[0].district} - ${order[0].city}, ${order[0].uf}`}
            </span>
          </div>
          <div className="deliveryForecast">
            <Timer size={16} weight="fill" />
            <div>
              <span>Previsão de entrega</span>
              <strong>20 min - 30 min</strong>
            </div>
          </div>
          <div className="paymentMethod">
            <CurrencyDollar size={16} />
            <div>
              <span>Pagamento na entrega</span>
              <strong>Cartão de Crédito</strong>
            </div>
          </div>
        </OrderInfo>
      </ContentContainer>
      <img src={SuccessImage} alt="" />
    </MainContainer>
  )
}
