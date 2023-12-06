import { ReactNode, createContext, useState } from 'react'

type CoffeeTags =
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

interface CoffeeContextProps {
  coffees: CoffeeProps[]
  setCoffees: React.Dispatch<React.SetStateAction<CoffeeProps[]>>
}

export const CoffeeContext = createContext({} as CoffeeContextProps)

interface CoffeeContextProviderProps {
  children: ReactNode
}

export default function CoffeeContextProvider({
  children,
}: CoffeeContextProviderProps) {
  const [coffees, setCoffees] = useState<CoffeeProps[]>([])
  return (
    <CoffeeContext.Provider value={{ coffees, setCoffees }}>
      {children}
    </CoffeeContext.Provider>
  )
}
