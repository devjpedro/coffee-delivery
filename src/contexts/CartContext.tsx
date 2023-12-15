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
  setCoffees: React.Dispatch<React.SetStateAction<CoffeeProps[]>>
  order: OrderProps | null
  setOrder: React.Dispatch<React.SetStateAction<OrderProps | null>>
}

export const CartContext = createContext({} as CartContextProps)

interface CartContextProviderProps {
  children: ReactNode
}

export default function CartContextProvider({
  children,
}: CartContextProviderProps) {
  const initialCoffees = localStorage.getItem('@coffee-delivery:coffees')
  const [coffees, setCoffees] = useState<CoffeeProps[]>(
    initialCoffees ? JSON.parse(initialCoffees) : [],
  )
  const [order, setOrder] = useState<OrderProps | null>(null)

  useEffect(() => {
    localStorage.setItem('@coffee-delivery:coffees', JSON.stringify(coffees))
  }, [coffees])

  return (
    <CartContext.Provider value={{ coffees, setCoffees, order, setOrder }}>
      {children}
    </CartContext.Provider>
  )
}
