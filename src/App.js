import { Nav, NavLink } from 'react-bootstrap'
import { BrowserRouter, Routes, Link, Route } from 'react-router-dom'
import UserLogin from './pages/Login/login'
import Cart from './components/Cart'
import StoreProvider from './pages/Store/Provider'
import RoutesPrivate from './pages/Routes/private/private'
import Home from './components/Home'
import Sobre from './components/Sobre'
import Produtos from './components/Produtos'
import 'bootstrap/dist/css/bootstrap.min.css';

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
            <NavLink as={Link} to="/produto"> Cadastro de Produtos </NavLink>
            <NavLink as={Link} to="/login"> Controle de Estoque </NavLink>
            <NavLink as={Link} to="/sobre"> Sobre </NavLink>
          </Nav>

          <Routes>
            <Route path='/' element={ <Home/> }/>
            <Route path='/produto' element={ <Produtos/> }/>
            <Route path='/login' element={ <UserLogin/> }/>
            <Route path='/sobre' element={ <Sobre/> }/>
            <Route path='/carrinho' element={ <Cart/> }/>
          </Routes>




      </BrowserRouter>
    </div>
  )
}

export default App;
