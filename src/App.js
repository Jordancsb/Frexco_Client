import { Nav, NavLink } from 'react-bootstrap'
import Home from './components/Home'
import Sobre from './components/Sobre'
import Produtos from './components/Produtos'

import { BrowserRouter, Routes, Link, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './pages/Login/login'
import Table from './components/Table'
import Cart from './components/Cart'

function App() {

  return (
    <div className="App">
      <h1> Minha Aplicação React </h1>
      <BrowserRouter>
      
      <Nav variant='tabs'>
        <NavLink as={Link} to="/"> Página inicial </NavLink>
        <NavLink as={Link} to="/produto"> Cadastro de Produtos </NavLink>
        <NavLink as={Link} to="/login"> Controle de Estoque </NavLink>
        <NavLink as={Link} to="/sobre"> Sobre </NavLink>
      </Nav>

      <Routes>
        <Route path='/' index element={ <Home/> }></Route>
        <Route path='/table' element={ <Table/> }></Route>
        <Route path='/produto' element={ <Produtos/> }></Route>
        <Route path='/login' element={ <Login/> }></Route>
        <Route path='/sobre' element={ <Sobre/> }></Route>
        <Route path='/carrinho' index element={ <Cart/> }></Route>
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
