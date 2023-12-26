import { ReactNode, createContext, useEffect, useState } from 'react'

export type CoffeeTags =
  | 'tradicional'
  | 'gelado'
  | 'com leite'
  | 'alcoólico'
  | 'especial'

export interface CoffeeProps {
  coffeeName: string
  coffeeDescription: string
  coffeePrice: number
  coffeeImage: string
  coffeeTags: CoffeeTags[]
  coffeeAmount: number
}

export interface OrderProps {
  cep: string
  city: string
  complement: string
  district: string
  numberAddress: number
  street: string
  uf: string
  paymentMethod?: string
  coffees: CoffeeProps[]
}

interface CartContextProps {
  coffees: CoffeeProps[]
  order: OrderProps | null
  setCoffees: React.Dispatch<React.SetStateAction<CoffeeProps[]>>
  setOrder: React.Dispatch<React.SetStateAction<OrderProps | null>>
  addNewCoffee: (newCoffee: CoffeeProps) => void
  removeCoffee: (coffeeToRemove: CoffeeProps) => void
}

export const CartContext = createContext({} as CartContextProps)

interface CartContextProviderProps {
  children: ReactNode
}

export default function CartContextProvider({
  children,
}: CartContextProviderProps) {
  // Valores iniciais dos Cafés e do pedido guardados no localstorage

  const initialCoffees = localStorage.getItem('@coffee-delivery:coffees')
  const savedOrder = localStorage.getItem('@coffee-delivery:order')

  // Estados de Café e do Pedido

  const [coffees, setCoffees] = useState<CoffeeProps[]>(
    initialCoffees ? JSON.parse(initialCoffees) : [],
  )
  const [order, setOrder] = useState<OrderProps | null>(
    savedOrder ? JSON.parse(savedOrder) : null,
  )

  // Adicionar o café no carrinho

  function addNewCoffee(newCoffee: CoffeeProps) {
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

  // Remover o café do carrinho

  function removeCoffee(coffeeToRemove: CoffeeProps) {
    const coffeesWithoutDeletedOne = coffees.filter((coffee) => {
      return coffee.coffeeName !== coffeeToRemove.coffeeName
    })
    setCoffees(coffeesWithoutDeletedOne)
  }

  // Guardar o pedido e os cafés no localstorage

  useEffect(() => {
    localStorage.setItem('@coffee-delivery:coffees', JSON.stringify(coffees))
  }, [coffees])

  useEffect(() => {
    localStorage.setItem('@coffee-delivery:order', JSON.stringify(order))
  }, [order])

  return (
    <CartContext.Provider
      value={{
        coffees,
        setCoffees,
        order,
        setOrder,
        addNewCoffee,
        removeCoffee,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
