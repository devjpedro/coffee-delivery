import { ReactNode, createContext, useState } from 'react'

interface OrderContextProps {
  orders: unknown
  setOrders: unknown
}

const OrderContext = createContext({} as OrderContextProps)

interface OrderContextProviderProps {
  children: ReactNode
}

export default function OrderContextProvider({
  children,
}: OrderContextProviderProps) {
  const [orders, setOrders] = useState([])
  return (
    <OrderContext.Provider value={{ orders, setOrders }}>
      {children}
    </OrderContext.Provider>
  )
}
