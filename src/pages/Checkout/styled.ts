import styled from 'styled-components'

export const MainContainer = styled.main`
  max-width: 70rem;
  width: 100%;
  margin: 2rem auto;
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;

  @media (max-width: 1200px) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  @media (max-width: 1000px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 600px) {
    padding-left: 1.25rem;
    padding-right: 1.25rem;
  }
`

export const CompleteOrder = styled.div`
  flex: 1;
  max-width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  h3 {
    margin-bottom: 1rem;
  }

  span {
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 0.5rem;
    line-height: 0;
    color: ${(props) => props.theme['base-800']};
  }

  span svg {
    margin-top: -0.12rem;
  }

  .address svg {
    color: ${(props) => props.theme['yellow-700']};
  }

  .payment svg {
    color: ${(props) => props.theme['purple-500']};
  }

  p {
    margin-left: 30px;
    margin-top: 0.125rem;
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-700']};
  }
`

export const AddressContainer = styled.div`
  background-color: ${(props) => props.theme['base-200']};
  padding: 2.5rem;
  border-radius: 6px;

  @media (max-width: 600px) {
    padding-left: 1.25rem;
    padding-right: 1.25rem;
  }
`

export const AddressForm = styled.form`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr 3.75rem;
  gap: 1rem 0.75rem;

  .street {
    grid-column: 1 / -1;
  }

  .complement {
    grid-column: 2 / -1;
  }

  input {
    background-color: ${(props) => props.theme['base-300']};
    border: 1px solid ${(props) => props.theme['base-400']};
    border-radius: 4px;
    padding: 0.75rem;
    color: ${(props) => props.theme['base-700']};
    font-size: 0.875rem;
    width: 100%;
  }

  input::placeholder {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-600']};
  }
`
export const PaymentContainer = styled.div`
  background-color: ${(props) => props.theme['base-200']};
  padding: 2.5rem;
  border-radius: 6px;
  @media (max-width: 600px) {
    padding-left: 1.25rem;
    padding-right: 1.25rem;
  }
`
export const PaymentMethod = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 2rem;

  button {
    flex: 1;
    background-color: ${(props) => props.theme['base-400']};
    border: 0;
    border-radius: 6px;
    padding: 1rem;
    font-size: 0.75rem;
    text-transform: uppercase;
    color: ${(props) => props.theme['base-700']};
    display: flex;
    gap: 0.75rem;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  button svg {
    color: ${(props) => props.theme['purple-500']};
    line-height: 0;
    margin-top: -0.1rem;
  }

  button:hover {
    background-color: ${(props) => props.theme['base-500']};
    transition: all 0.2s;
  }
`

export const SelectedCoffees = styled.div`
  flex: 1;
  max-width: 28rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  h3 {
    margin-bottom: 1rem;
  }
`
export const CheckoutContainer = styled.div`
  background-color: ${(props) => props.theme['base-200']};
  border-top-left-radius: 6px;
  border-bottom-left-radius: 44px;
  border-top-right-radius: 44px;
  border-bottom-right-radius: 6px;
  padding: 2.5rem;
  @media (max-width: 600px) {
    padding-left: 1.25rem;
    padding-right: 1.25rem;
  }
`
export const CheckoutCoffee = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export const Coffee = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 2rem;
  border-bottom: 1px solid ${(props) => props.theme['base-400']};

  span {
    color: ${(props) => props.theme['base-800']};
  }

  .coffeeDetail {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.25rem;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`

export const ActionsCoffee = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  div {
    display: flex;
  }
`

export const AmountCounter = styled.div`
  margin-right: 0.5rem;

  background-color: ${(props) => props.theme['base-400']};
  border-radius: 6px;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  button {
    line-height: 0;
    background: none;
    border: 0;
    cursor: pointer;
  }

  svg {
    color: ${(props) => props.theme['purple-500']};
  }
`

export const RemoveButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 0;
  gap: 0.25rem;
  background-color: ${(props) => props.theme['base-400']};
  color: ${(props) => props.theme['base-700']};
  text-transform: uppercase;
  font-size: 0.875rem;
  border-radius: 6px;
  border: 0;
  padding: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme['base-500']};
    transition: all 0.2s;
  }

  svg {
    color: ${(props) => props.theme['purple-500']};
  }
`

export const CoffeePrice = styled.span`
  padding: 0.5rem 0.25rem;
  font-weight: 700;
  color: ${(props) => props.theme['base-700']};
  align-self: start;
  flex: 1;
`

export const OrderSummary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1.5rem;

  div {
    display: flex;
    justify-content: space-between;

    p {
      color: ${(props) => props.theme['base-700']};
      font-size: 0.875rem;
    }

    span {
      color: ${(props) => props.theme['base-700']};
    }

    strong {
      color: ${(props) => props.theme['base-800']};
      font-size: 1.25rem;
      font-weight: bold;
    }
  }
`
export const ConfirmOrder = styled.button`
  width: 100%;
  background-color: ${(props) => props.theme['yellow-500']};
  color: ${(props) => props.theme.white};
  font-size: 0.875rem;
  font-weight: bold;
  text-transform: uppercase;
  padding: 0.75rem;
  border: 0;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme['yellow-700']};
    transition: all 0.2s;
  }
`
