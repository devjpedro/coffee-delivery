import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import {
  ActionsCardCoffee,
  AddCartButton,
  AmountCounter,
  CoffeeCardStyle,
  FooterCoffeeCard,
  TagCoffee,
} from '../styled'

type CoffeeTags =
  | 'tradicional'
  | 'gelado'
  | 'com leite'
  | 'alcoólico'
  | 'especial'
interface CoffeeCardProps {
  coffeeName: string
  coffeeDescription: string
  coffeePrice: string
  coffeeImage: string
  coffeeTags: CoffeeTags[]
}

export function CoffeeCard({
  coffeeName,
  coffeeDescription,
  coffeePrice,
  coffeeImage,
  coffeeTags,
}: CoffeeCardProps) {
  return (
    <CoffeeCardStyle>
      <img src={coffeeImage} alt="Café Expresso Tradicional" />
      <TagCoffee>
        {coffeeTags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </TagCoffee>
      <strong>{coffeeName}</strong>
      <p>{coffeeDescription}</p>
      <FooterCoffeeCard>
        <strong>{coffeePrice}</strong>
        <ActionsCardCoffee>
          <AmountCounter>
            <button>
              <Minus size={16} />
            </button>

            <span>1</span>
            <button>
              <Plus size={16} />
            </button>
          </AmountCounter>
          <AddCartButton>
            <ShoppingCart weight="fill" size={22} />
          </AddCartButton>
        </ActionsCardCoffee>
      </FooterCoffeeCard>
    </CoffeeCardStyle>
  )
}
