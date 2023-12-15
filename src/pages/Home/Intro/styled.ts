import styled from 'styled-components'
import BackgroundImage from '../../../assets/Intro/intro-background.png'

export const IntroBackground = styled.section`
  background: url(${BackgroundImage}) no-repeat;
  background-size: cover;
  width: 100%;
  margin: 0 auto;

  img {
    max-width: 100%;
  }

  @media (max-width: 1200px) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  @media (max-width: 600px) {
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    img {
      display: none;
    }
  }
`

export const IntroContainer = styled.div`
  max-width: 70rem;
  display: flex;
  gap: 2rem;
  margin: 0 auto;
  flex-wrap: wrap;
  justify-content: center;
  overflow: hidden;
  padding-bottom: 2rem;
  padding-top: 2rem;

  h1 {
    font-size: 3rem;
    font-weight: 800;
    margin-bottom: 1rem;
  }

  p {
    color: ${(props) => props.theme['base-800']};
    font-size: 1.25rem;
  }

  ul {
    margin-top: 3.5rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(15rem, auto));
    gap: 20px 40px;
  }

  li {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  li svg {
    background-color: ${(props) => props.theme['base-400']};
    color: ${(props) => props.theme.white};
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    height: auto;
    padding: 0.5rem;
    border-radius: 999px;
  }

  .cart {
    background-color: ${(props) => props.theme['yellow-700']};
  }

  .package {
    background-color: ${(props) => props.theme['base-700']};
  }

  .timer {
    background-color: ${(props) => props.theme['yellow-500']};
  }

  .coffee {
    background-color: ${(props) => props.theme['purple-500']};
  }

  @media (max-width: 600px) {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;

    h1 {
      text-align: center;
      font-size: 2.75rem;
    }

    p {
      text-align: center;
    }
  }
`
export const IntroContent = styled.div`
  max-width: 36.5rem;
`
