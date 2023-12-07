import { ThemeProvider } from 'styled-components'
import CartContextProvider from './contexts/CartContext'
import RoutesApp from './routes'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CartContextProvider>
        <RoutesApp />
        <GlobalStyle />
      </CartContextProvider>
    </ThemeProvider>
  )
}
