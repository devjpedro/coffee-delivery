import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useContext, useState } from 'react'
import { CoffeeContext, CoffeeProps } from '../../../../contexts/CoffeeContext'
import {
  ActionsCardCoffee,
  AddCartButton,
  AmountCounter,
  CoffeeCardStyle,
  FooterCoffeeCard,
  TagCoffee,
} from '../styled'

export function CoffeeCard({
  coffeeName,
  coffeeDescription,
  coffeePrice,
  coffeeImage,
  coffeeTags,
}: CoffeeProps) {
  const { coffees, setCoffees } = useContext(CoffeeContext)
  const [coffeeAmount, setCoffeeAmount] = useState<number>(1)

  function handleSubtract() {
    if (coffeeAmount > 1) {
      setCoffeeAmount(coffeeAmount - 1)
    }
  }

  function handleAdd() {
    setCoffeeAmount(coffeeAmount + 1)
  }

  function handleAddNewCoffee() {
    const newCoffee = {
      coffeeName,
      coffeeDescription,
      coffeePrice,
      coffeeImage,
      coffeeTags,
      coffeeAmount,
    }

    const coffeeIndex = coffees.findIndex(
      (coffee) => coffee.coffeeName === newCoffee.coffeeName,
    )

    if (coffeeIndex === -1) {
      setCoffees([...coffees, newCoffee])
    } else {
      const updatedCoffees = [...coffees]
      updatedCoffees[coffeeIndex].coffeeAmount += newCoffee.coffeeAmount
      setCoffees(updatedCoffees)
    }
  }

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
        <strong>{coffeePrice.toFixed(2).replace('.', ',')}</strong>
        <ActionsCardCoffee>
          <AmountCounter>
            <button onClick={handleSubtract}>
              <Minus size={16} />
            </button>

            <span>{coffeeAmount}</span>
            <button onClick={handleAdd}>
              <Plus size={16} />
            </button>
          </AmountCounter>
          <AddCartButton onClick={handleAddNewCoffee}>
            <ShoppingCart weight="fill" size={22} />
          </AddCartButton>
        </ActionsCardCoffee>
      </FooterCoffeeCard>
    </CoffeeCardStyle>
  )
}
