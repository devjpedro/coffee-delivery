import {
  Bank,
  Coffee,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Minus,
  Money,
  Plus,
  Trash,
} from 'phosphor-react'
import { useContext } from 'react'
import {
  ActionsCoffee,
  AddressContainer,
  AddressForm,
  AmountCounter,
  CheckoutCoffee,
  CheckoutContainer,
  CoffeePrice,
  Coffees,
  CompleteOrder,
  ConfirmOrder,
  MainContainer,
  NoOrders,
  OrderSummary,
  PaymentContainer,
  PaymentMethod,
  PaymentMethodButton,
  RemoveButton,
  SelectedCoffees,
} from './styled'

import InputMask from 'react-input-mask'

import * as z from 'zod'

import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { CartContext, CoffeeProps } from '../../contexts/CartContext'

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

type newOrderFormData = z.infer<typeof newOrderFormValidationSchema>

export default function Checkout() {
  const { coffees, setCoffees, order, setOrder } = useContext(CartContext)
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    setFocus,
    control,
    formState: { errors },
  } = useForm<newOrderFormData>({
    resolver: zodResolver(newOrderFormValidationSchema),
  })

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
    setOrder([...order, newOrder])
    setCoffees([])
    reset()
    navigate('/success')
  }

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

  const totalValueOrder = coffees.reduce(
    (acc, currentValue) =>
      acc + currentValue.coffeeAmount * currentValue.coffeePrice,
    0,
  )
  const deliveryFee = 3.5
  const totalValueOrderWithDeliveryFee = Number(totalValueOrder + deliveryFee)

  const checkCEP = () => {
    const cep = watch('cep')
    const formatedCep = cep.replace(/\D/g, '')
    fetch(`https://viacep.com.br/ws/${formatedCep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        setValue('street', data.logradouro)
        setValue('district', data.bairro)
        setValue('city', data.localidade)
        setValue('uf', data.uf)
        setFocus('numberAddress')
      })
  }

  return (
    <MainContainer>
      <CompleteOrder>
        <h3>Complete seu pedido</h3>
        <AddressContainer>
          <span className="address">
            <MapPinLine size={22} />
            Endereço de Entrega
          </span>
          <p>Informe o endereço onde deseja receber seu pedido</p>
          <AddressForm>
            <InputMask
              mask="99999-999"
              type="text"
              placeholder="CEP"
              className={`cep ${errors.cep ? 'errorInput' : ''}`}
              {...register('cep')}
              onBlur={checkCEP}
            />
            <input
              type="text"
              placeholder="Rua"
              className={`street ${errors.street ? 'errorInput' : ''}`}
              {...register('street')}
            />
            <input
              type="number"
              placeholder="Número"
              className={`numberAddress ${
                errors.numberAddress ? 'errorInput' : ''
              }`}
              {...register('numberAddress', {
                valueAsNumber: true,
              })}
            />
            <input
              type="text"
              placeholder="Complemento"
              className={`complement ${errors.complement ? 'errorInput' : ''}`}
              {...register('complement')}
            />
            <input
              type="text"
              placeholder="Bairro"
              className={`district ${errors.district ? 'errorInput' : ''}`}
              {...register('district')}
            />
            <input
              type="text"
              placeholder="Cidade"
              className={`city ${errors.city ? 'errorInput' : ''}`}
              {...register('city')}
            />
            <input
              type="text"
              placeholder="UF"
              className={`uf ${errors.uf ? 'errorInput' : ''}`}
              maxLength={2}
              {...register('uf')}
            />
          </AddressForm>
        </AddressContainer>
        <PaymentContainer>
          <span className="payment">
            <CurrencyDollar size={22} />
            Pagamento
          </span>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
          <Controller
            control={control}
            name="paymentMethod"
            render={({ field, fieldState }) => (
              <PaymentMethod onValueChange={field.onChange} value={field.value}>
                <PaymentMethodButton
                  className={fieldState.error ? 'errorInput' : ''}
                  value="creditCard"
                >
                  <CreditCard size={16} /> Cartão de Crédito
                </PaymentMethodButton>
                <PaymentMethodButton
                  className={fieldState.error ? 'errorInput' : ''}
                  value="debitCard"
                >
                  <Bank size={16} />
                  Cartão de Débito
                </PaymentMethodButton>
                <PaymentMethodButton
                  className={fieldState.error ? 'errorInput' : ''}
                  value="money"
                >
                  <Money size={16} />
                  Dinheiro
                </PaymentMethodButton>
              </PaymentMethod>
            )}
          />
        </PaymentContainer>
      </CompleteOrder>
      <SelectedCoffees>
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
                  <span>{`R$ ${deliveryFee
                    .toFixed(2)
                    .replace('.', ',')}`}</span>
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
      </SelectedCoffees>
    </MainContainer>
  )
}
