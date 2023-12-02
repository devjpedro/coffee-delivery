import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme['purple-500']};
  }

  body {
    background: ${(props) => props.theme['base-100']};
    color: ${(props) => props.theme['base-700']};
  }

  body, input, textarea, button {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.3;
  }

  h1, h2, h3, h4 {
    font-family: "Baloo 2", sans-serif;
    color: ${(props) => props.theme['base-900']};
  }

  ul {
    list-style: none;
  }

  a {
    color: currentColor;
    text-decoration: none;
  }
`
