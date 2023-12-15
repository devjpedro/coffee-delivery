import { Check, Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useContext, useState } from 'react'
import { Fade } from 'react-awesome-reveal'
import {
  CartContext,
  CoffeeProps,
  CoffeeTags,
} from '../../../../contexts/CartContext'
import {
  ActionsCardCoffee,
  AddCartButton,
  AmountCounter,
  CheckedButton,
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
  const { coffees, setCoffees } = useContext(CartContext)
  const [coffeeAmount, setCoffeeAmount] = useState<number>(1)
  const [loading, setLoading] = useState(false)

  function handleSubtract() {
    if (coffeeAmount > 1) {
      setCoffeeAmount(coffeeAmount - 1)
    }
  }

  function handleAdd() {
    setCoffeeAmount(coffeeAmount + 1)
  }

  function handleAddNewCoffee() {
    setLoading(true)

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

    const updateCoffees = () => {
      if (coffeeIndex === -1) {
        setCoffees([...coffees, newCoffee])
      } else {
        const updatedCoffees = [...coffees]
        updatedCoffees[coffeeIndex].coffeeAmount += newCoffee.coffeeAmount
        setCoffees(updatedCoffees)
      }
      setCoffeeAmount(1)
      setLoading(false)
    }

    setTimeout(updateCoffees, 1000)
  }

  return (
    <CoffeeCardStyle>
      <Fade triggerOnce>
        <img src={coffeeImage} alt="Café Expresso Tradicional" />
        <TagCoffee>
          {coffeeTags.map((tag: CoffeeTags) => (
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
            {!loading ? (
              <AddCartButton onClick={handleAddNewCoffee} disabled={loading}>
                <ShoppingCart weight="fill" size={22} />
              </AddCartButton>
            ) : (
              <CheckedButton onClick={handleAddNewCoffee} disabled={loading}>
                <Check weight="fill" size={32} />
              </CheckedButton>
            )}
          </ActionsCardCoffee>
        </FooterCoffeeCard>
      </Fade>
    </CoffeeCardStyle>
  )
}
