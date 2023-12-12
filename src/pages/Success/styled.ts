import styled from 'styled-components'

export const MainContainer = styled.main`
  max-width: 70rem;
  width: 100%;
  margin: 5rem auto;
  display: flex;
  gap: 6.25rem;
  flex-wrap: wrap;
  justify-content: center;

  img {
    max-width: 100%;
  }

  @media (max-width: 1200px) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    margin-bottom: 0.5rem;
  }

  @media (max-width: 600px) {
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    gap: 3rem;
    margin-top: 1rem;
  }
`
export const ContentContainer = styled.div`
  h1 {
    font-size: 2rem;
    font-size: 800;
    color: ${(props) => props.theme['yellow-700']};
  }

  p {
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-800']};
  }
`

export const OrderInfo = styled.div`
  max-width: 33rem;
  margin-top: 2.5rem;
  padding: 2.5rem;
  border: 1px solid ${(props) => props.theme['purple-500']};
  border-top-left-radius: 6px;
  border-bottom-left-radius: 36px;
  border-top-right-radius: 36px;
  border-bottom-right-radius: 6px;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .local,
  .deliveryForecast,
  .paymentMethod {
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 0.5rem;
  }

  svg {
    background-color: ${(props) => props.theme['purple-500']};
    color: ${(props) => props.theme.white};
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    height: auto;
    padding: 0.5rem;
    border-radius: 999px;
  }

  .deliveryForecast svg {
    background-color: ${(props) => props.theme['yellow-500']};
  }

  .paymentMethod svg {
    background-color: ${(props) => props.theme['yellow-700']};
  }

  .deliveryForecast div,
  .paymentMethod div {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 600px) {
    padding: 1.25rem;
  }
`
