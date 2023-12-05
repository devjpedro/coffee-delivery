import { ThemeProvider } from 'styled-components'
import CoffeeContextProvider from './contexts/CoffeeContext'
import RoutesApp from './routes'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CoffeeContextProvider>
        <RoutesApp />
        <GlobalStyle />
      </CoffeeContextProvider>
    </ThemeProvider>
  )
}
