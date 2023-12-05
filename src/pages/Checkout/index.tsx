import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Minus,
  Money,
  Plus,
  Trash,
} from 'phosphor-react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CoffeeContext, CoffeeProps } from '../../contexts/CoffeeContext'
import {
  ActionsCoffee,
  AddressContainer,
  AddressForm,
  AmountCounter,
  CheckoutCoffee,
  CheckoutContainer,
  Coffee,
  CoffeePrice,
  CompleteOrder,
  ConfirmOrder,
  MainContainer,
  OrderSummary,
  PaymentContainer,
  PaymentMethod,
  RemoveButton,
  SelectedCoffees,
} from './styled'

export default function Checkout() {
  const navigate = useNavigate()
  const { coffees, setCoffees } = useContext(CoffeeContext)

  function handleRemoveCoffee(coffeeToRemove: CoffeeProps) {
    const coffeesWithoutDeletedOne = coffees.filter((coffee) => {
      return coffee.coffeeName !== coffeeToRemove.coffeeName
    })
    setCoffees(coffeesWithoutDeletedOne)
    console.log(coffeesWithoutDeletedOne)
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
            <input type="number" placeholder="CEP" className="cep" />
            <input type="text" placeholder="Rua" className="street" />
            <input
              type="number"
              placeholder="Número"
              className="numberAddress"
            />
            <input
              type="text"
              placeholder="Complemento"
              className="complement"
            />
            <input type="text" placeholder="Bairro" className="district" />
            <input type="text" placeholder="Cidade" className="city" />
            <input type="text" placeholder="UF" className="uf" maxLength={2} />
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
          <PaymentMethod>
            <button>
              <CreditCard size={16} /> Cartão de Crédito
            </button>
            <button>
              <Bank size={16} />
              Cartão de Débito
            </button>
            <button>
              <Money size={16} />
              Dinheiro
            </button>
          </PaymentMethod>
        </PaymentContainer>
      </CompleteOrder>
      <SelectedCoffees>
        <h3>Cafés selecionados</h3>
        <CheckoutContainer>
          <CheckoutCoffee>
            {coffees.map((coffee) => {
              return (
                <>
                  <Coffee key={coffee.coffeeName}>
                    <div className="coffeeDetail">
                      <img src={coffee.coffeeImage} alt="" />
                      <ActionsCoffee>
                        <span>{coffee.coffeeName}</span>
                        <div>
                          <AmountCounter>
                            <button>
                              <Minus />
                            </button>
                            <span>{coffee.coffeeAmount}</span>
                            <button>
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

                    <CoffeePrice>{`R$ ${coffee.coffeePrice}`}</CoffeePrice>
                  </Coffee>
                </>
              )
            })}
          </CheckoutCoffee>
          <OrderSummary>
            <div>
              <p>Total de itens</p>
              <span>R$ 29,70</span>
            </div>
            <div>
              <p>Entrega</p>
              <span>R$ 3,50</span>
            </div>
            <div>
              <strong>Total</strong>
              <strong>R$ 33,20</strong>
            </div>
          </OrderSummary>
          <ConfirmOrder onClick={() => navigate('/success')}>
            Confirmar pedido
          </ConfirmOrder>
        </CheckoutContainer>
      </SelectedCoffees>
    </MainContainer>
  )
}
