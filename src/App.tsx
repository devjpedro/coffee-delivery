import { ThemeProvider } from 'styled-components'
import OrderContextProvider from './contexts/OrderContext'
import RoutesApp from './routes'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <OrderContextProvider>
        <RoutesApp />
        <GlobalStyle />
      </OrderContextProvider>
    </ThemeProvider>
  )
}
