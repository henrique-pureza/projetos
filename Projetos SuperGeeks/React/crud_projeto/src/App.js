// Importar o pacote react
import React from 'react'

// Importar os componentes para criar rotas
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

// Importar o componente para configurar as notificações
import { ToastContainer } from 'react-toastify'

// Importar os componentes criados
import Home from './components/Home/View'
import AddMovie from './components/AddMovie/View'
import EditMovie from './components/EditMovie/View'
import Header from './components/Header/View'

// Importar o Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css'

// Criar o componente APP
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className='App'>
        <ToastContainer position='top-center' />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/add' element={<AddMovie/>}/>
          <Route path='/update/:id' element={<EditMovie />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

// Exportar este componente
export default App