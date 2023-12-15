import { MainContainer } from './styled'

import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import * as z from 'zod'
import { CompleteOrder } from './components/CompleteOrder'
import { SelectedCoffees } from './components/SelectedCoffees'

const newOrderFormValidationSchema = z.object({
  cep: z.string().min(1),
  street: z.string().min(1),
  numberAddress: z.number().min(1),
  complement: z.string(),
  district: z.string().min(1),
  city: z.string().min(1),
  uf: z.string().min(1),
  paymentMethod: z.string().min(1),
})

export type newOrderFormData = z.infer<typeof newOrderFormValidationSchema>

export default function Checkout() {
  const newOrderForm = useForm<newOrderFormData>({
    resolver: zodResolver(newOrderFormValidationSchema),
  })

  return (
    <MainContainer>
      <FormProvider {...newOrderForm}>
        <CompleteOrder />
        <SelectedCoffees />
      </FormProvider>
    </MainContainer>
  )
}
