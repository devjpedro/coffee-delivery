import { ReactNode, createContext, useState } from 'react'

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
  cep: number
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
  order: OrderProps[]
  setOrder: React.Dispatch<React.SetStateAction<OrderProps[]>>
}

export const CartContext = createContext({} as CartContextProps)

interface CartContextProviderProps {
  children: ReactNode
}

export default function CartContextProvider({
  children,
}: CartContextProviderProps) {
  const [coffees, setCoffees] = useState<CoffeeProps[]>([])
  const [order, setOrder] = useState<OrderProps[]>([])
  return (
    <CartContext.Provider value={{ coffees, setCoffees, order, setOrder }}>
      {children}
    </CartContext.Provider>
  )
}
