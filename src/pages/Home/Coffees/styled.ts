import styled, { keyframes } from 'styled-components'

export const MainContainer = styled.main`
  max-width: 70rem;
  width: 100%;
  margin: 2rem auto;

  @media (max-width: 1200px) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  @media (max-width: 600px) {
    padding-left: 1.25rem;
    padding-right: 1.25rem;

    h2 {
      text-align: center;
    }
  }

  h2 {
    font-size: 2rem;
    font-weight: 800;
  }
`
export const CoffeesContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  gap: 2.5rem 2rem;
  margin-top: 3.125rem;
`
export const CoffeeCardStyle = styled.div`
  background-color: ${(props) => props.theme['base-200']};
  max-width: 16rem;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding: 1.25rem;
  text-align: center;
  border-top-left-radius: 0.375rem;
  border-bottom-left-radius: 2.25rem;
  border-top-right-radius: 2.25rem;
  border-bottom-right-radius: 0.375rem;

  img {
    margin-top: -2.5rem;
    margin-bottom: 0.75rem;
    filter: drop-shadow(rgba(0, 0, 0, 0.35) 0px 5px 3px);
    transition: 0.2s ease-in-out;
  }

  img:hover {
    transform: translateY(-10px);
  }

  strong {
    font-size: 1.25rem;
    font-family: 'Baloo 2', sans-serif;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-600']};
  }
`
export const TagCoffee = styled.div`
  display: flex;
  gap: 0.25rem;
  flex-wrap: wrap;
  justify-content: center;

  span {
    color: ${(props) => props.theme['yellow-700']};
    background-color: ${(props) => props.theme['yellow-300']};
    font-size: 0.625rem;
    font-weight: 700;
    text-transform: uppercase;
    border-radius: 999px;
    display: block;
    width: 5rem;
    height: 1.25rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  margin-bottom: 1rem;
`

export const FooterCoffeeCard = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
  width: 100%;
  height: auto;
  padding: 0 0.25rem;
  gap: 0.5rem;

  strong {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 1.5rem;
    flex: 1;
    margin-top: 0.5rem;
  }

  strong:before {
    content: 'R$ ';
    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
  }
`

export const ActionsCardCoffee = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const AmountCounter = styled.div`
  background-color: ${(props) => props.theme['base-400']};
  border-radius: 6px;
  padding: 0.5rem 0.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;

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
const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`

export const ActionButtonBase = styled.button`
  line-height: 0;
  background: none;
  border: 0;
  cursor: pointer;
  width: 2.375rem;
  height: 2.375rem;
  border-radius: 6px;

  transition: all 0.2s;

  &:disabled {
    animation: ${pulse} 1s infinite;
  }
`

export const AddCartButton = styled(ActionButtonBase)`
  background-color: ${(props) => props.theme['purple-500']};
  color: ${(props) => props.theme.white};

  &:hover {
    background-color: ${(props) => props.theme['purple-700']};
  }
`
export const CheckedButton = styled(ActionButtonBase)`
  background-color: ${(props) => props.theme['yellow-500']};
  color: ${(props) => props.theme.white};

  &:hover {
    background-color: ${(props) => props.theme['yellow-700']};
  }
`
