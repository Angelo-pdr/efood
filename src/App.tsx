import GlobalCss from './styles'
import { BrowserRouter, Outlet } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <GlobalCss />
      <Outlet />
    </Provider>
  )
}

export default App
