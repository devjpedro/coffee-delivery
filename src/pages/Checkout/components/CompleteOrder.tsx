import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { Controller, useFormContext } from 'react-hook-form'
import InputMask from 'react-input-mask'
import {
  AddressContainer,
  AddressForm,
  CompleteOrderContainer,
  PaymentContainer,
  PaymentMethod,
  PaymentMethodButton,
} from '../styled'

export function CompleteOrder() {
  const {
    register,
    watch,
    setValue,
    setFocus,
    control,
    formState: { errors },
  } = useFormContext()

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
    <CompleteOrderContainer>
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
          <div className="complement">
            <input
              type="text"
              placeholder="Complemento"
              className={`${errors.complement ? 'errorInput' : ''}`}
              {...register('complement')}
            />
            <span>Opcional</span>
          </div>
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
        <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
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
    </CompleteOrderContainer>
  )
}
