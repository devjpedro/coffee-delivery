import { Coffee, Minus, Plus, Trash } from 'phosphor-react'
import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { newOrderFormData } from '..'
import { CartContext, CoffeeProps } from '../../../contexts/CartContext'
import {
  ActionsCoffee,
  AmountCounter,
  CheckoutCoffee,
  CheckoutContainer,
  CoffeePrice,
  Coffees,
  ConfirmOrder,
  NoOrders,
  OrderSummary,
  RemoveButton,
  SelectedCoffeesContainer,
} from '../styled'

export function SelectedCoffees() {
  const { handleSubmit, reset } = useFormContext<newOrderFormData>()
  const { coffees, setCoffees, setOrder } = useContext(CartContext)

  const navigate = useNavigate()

  const totalValueOrder = coffees.reduce(
    (acc, currentValue) =>
      acc + currentValue.coffeeAmount * currentValue.coffeePrice,
    0,
  )
  const deliveryFee = 3.5
  const totalValueOrderWithDeliveryFee = Number(totalValueOrder + deliveryFee)

  function handleAdd(coffee: CoffeeProps) {
    const updatedCoffees = coffees.map((c) => {
      if (c.coffeeName === coffee.coffeeName) {
        return { ...c, coffeeAmount: c.coffeeAmount + 1 }
      }
      return c
    })
    setCoffees(updatedCoffees)
  }

  function handleSubtract(coffee: CoffeeProps) {
    if (coffee.coffeeAmount > 1) {
      const updatedCoffees = coffees.map((c) => {
        if (c.coffeeName === coffee.coffeeName) {
          return { ...c, coffeeAmount: c.coffeeAmount - 1 }
        }
        return c
      })
      setCoffees(updatedCoffees)
    } else {
      handleRemoveCoffee(coffee)
    }
  }

  function handleRemoveCoffee(coffeeToRemove: CoffeeProps) {
    const coffeesWithoutDeletedOne = coffees.filter((coffee) => {
      return coffee.coffeeName !== coffeeToRemove.coffeeName
    })
    setCoffees(coffeesWithoutDeletedOne)
  }

  function handleSubmitOrder(data: newOrderFormData) {
    const newOrder = {
      cep: data.cep,
      city: data.city,
      complement: data.complement,
      district: data.district,
      numberAddress: data.numberAddress,
      street: data.street,
      uf: data.uf,
      paymentMethod: data.paymentMethod,
      coffees,
    }
    setOrder(newOrder)
    setCoffees([])
    reset()
    navigate('/success')
  }

  return (
    <SelectedCoffeesContainer>
      <h3>Cafés selecionados</h3>
      <CheckoutContainer>
        {coffees.length ? (
          <>
            <CheckoutCoffee>
              {coffees.map((coffee) => {
                return (
                  <Coffees key={coffee.coffeeName}>
                    <div className="coffeeDetail">
                      <img src={coffee.coffeeImage} alt="" />
                      <ActionsCoffee>
                        <span>{coffee.coffeeName}</span>
                        <div>
                          <AmountCounter>
                            <button onClick={() => handleSubtract(coffee)}>
                              <Minus />
                            </button>
                            <span>{coffee.coffeeAmount}</span>
                            <button onClick={() => handleAdd(coffee)}>
                              <Plus />
                            </button>
                          </AmountCounter>
                          <RemoveButton
                            onClick={() => handleRemoveCoffee(coffee)}
                          >
                            <Trash size={16} />
                            Remover
                          </RemoveButton>
                        </div>
                      </ActionsCoffee>
                    </div>

                    <CoffeePrice>{`R$ ${(
                      coffee.coffeePrice * coffee.coffeeAmount
                    )
                      .toFixed(2)
                      .replace('.', ',')}`}</CoffeePrice>
                  </Coffees>
                )
              })}
            </CheckoutCoffee>
            <OrderSummary>
              <div>
                <p>Total de itens</p>
                <span>{`R$ ${totalValueOrder
                  .toFixed(2)
                  .replace('.', ',')}`}</span>
              </div>
              <div>
                <p>Entrega</p>
                <span>{`R$ ${deliveryFee.toFixed(2).replace('.', ',')}`}</span>
              </div>
              <div>
                <strong>Total</strong>
                <strong>{`R$ ${totalValueOrderWithDeliveryFee
                  .toFixed(2)
                  .replace('.', ',')}`}</strong>
              </div>
            </OrderSummary>
            <ConfirmOrder onClick={handleSubmit(handleSubmitOrder)}>
              Confirmar pedido
            </ConfirmOrder>
          </>
        ) : (
          <NoOrders>
            <Coffee size={48} />
            <h2>Você ainda não fez nenhum pedido</h2>
            <p>Peça o seu café agora mesmo!</p>
          </NoOrders>
        )}
      </CheckoutContainer>
    </SelectedCoffeesContainer>
  )
}
