import Rotas from './Routes'
import GlobalCss from './styles'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <Header />
      <Rotas />
    </BrowserRouter>
  )
}

export default App
