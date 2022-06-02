import { Nav, NavLink } from 'react-bootstrap'
import { BrowserRouter, Routes, Link, Route } from 'react-router-dom'
import UserLogin from './pages/Login/login'
import Cart from './components/Cart'
import { AuthProvider } from './pages/Context/auth'
import Signup from './pages/Register'

import Home from './components/Home'
import Sobre from './components/Sobre'
import Produtos from './components/Produtos'
import Index from './components/Index'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  return (
    <div className="App">
      <header className='Cart'>
      <h1> Shop Boxes 📦 </h1>
      <h3> </h3>
      </header>
      <BrowserRouter>

          <Nav variant='tabs'>
            <NavLink as={Link} to="/"> Página inicial </NavLink>
            <NavLink as={Link} to="/login"> Controle de Estoque </NavLink>
            <NavLink as={Link} to="/sobre"> Sobre </NavLink>
          </Nav>
          <AuthProvider>
            <Routes>
              <Route exact path='/' element={ <Home/> }/>
              <Route path='/produtos' element={ <Produtos/> }/>
              <Route path='/register' element={ <Signup/> }/>
              <Route path='/login' element={ <UserLogin/> }/>
              <Route path='/sobre' element={ <Sobre/> }/>
              <Route path='/carrinho' element={ <Cart/> }/>
              <Route path='/teste' element={ <Index/> }/>
            </Routes>
          </AuthProvider>
      </BrowserRouter>
    </div>
  )
}

export default App;
