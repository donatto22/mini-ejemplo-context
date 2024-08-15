import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Provider } from './Context.jsx'

import Prueba from './components/Prueba.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider>
      <Routes>
        <Route path='/' element={ <App/> } />
        <Route path='/ejemplo' element={ <Prueba /> } />
      </Routes>
    </Provider>
  </BrowserRouter>
)
