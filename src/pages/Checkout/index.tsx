import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Minus,
  Money,
  Plus,
  Trash,
} from "phosphor-react";
import { useNavigate } from "react-router-dom";
import ExpressoImg from "../../assets/CoffeeImages/expresso.png";
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
} from "./styled";

export default function Checkout() {
  const navigate = useNavigate();

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
            <Coffee>
              <img src={ExpressoImg} alt="" />
              <ActionsCoffee>
                <span>Expresso Tradicional</span>
                <div>
                  <AmountCounter>
                    <button>
                      <Minus />
                    </button>
                    <span>1</span>
                    <button>
                      <Plus />
                    </button>
                  </AmountCounter>
                  <RemoveButton>
                    <Trash size={16} />
                    Remover
                  </RemoveButton>
                </div>
              </ActionsCoffee>
            </Coffee>
            <CoffeePrice>R$ 9,90</CoffeePrice>
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
          <ConfirmOrder onClick={() => navigate("/success")}>
            Confirmar pedido
          </ConfirmOrder>
        </CheckoutContainer>
      </SelectedCoffees>
    </MainContainer>
  );
}
