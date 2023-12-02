import { ShoppingCart } from 'phosphor-react'
import styled from 'styled-components'

export const HeaderContainer = styled.header`
  max-width: 70rem;
  width: 100%;
  height: 6.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;
  }

  @media (max-width: 900px) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  @media (max-width: 600px) {
    padding-left: 1.25rem;
    padding-right: 1.25rem;
  }
`
export const Location = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.125rem;
  padding: 0.625rem 0.5rem;
  background: ${(props) => props.theme['purple-300']};
  color: ${(props) => props.theme['purple-700']};
  border-radius: 6px;

  svg {
    color: ${(props) => props.theme['purple-500']};
  }
`
export const Cart = styled(ShoppingCart)`
  width: 42px;
  height: 42px;
  padding: 0.625rem;
  background: ${(props) => props.theme['yellow-300']};
  color: ${(props) => props.theme['yellow-700']};
  border-radius: 6px;
`
