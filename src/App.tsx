import Rotas from './Routes'
import GlobalCss from './styles'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <Rotas />
    </BrowserRouter>
  )
}

export default App
