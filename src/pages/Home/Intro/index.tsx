import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import IntroImage from '../../../assets/Intro/intro-image.png'
import { IntroBackground, IntroContainer } from './styled'

export default function Intro() {
  return (
    <IntroBackground>
      <IntroContainer>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <ul>
            <li>
              <ShoppingCart className="cart" weight="fill" size={20} />
              Compra simples e segura
            </li>

            <li>
              <Package className="package" weight="fill" size={20} />
              Embalagem mantém o café intacto
            </li>
            <li>
              <Timer className="timer" weight="fill" size={20} />
              Entrega rápida e rastreada
            </li>
            <li>
              <Coffee className="coffee" weight="fill" size={20} />O café chega
              fresquinho até você
            </li>
          </ul>
        </div>
        <div>
          <img
            src={IntroImage}
            alt="Imagem de um copo de café estampado com a logo do Coffe Delivery e alguns grãos de café no fundo "
          />
        </div>
      </IntroContainer>
    </IntroBackground>
  )
}