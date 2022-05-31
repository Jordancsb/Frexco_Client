import { Nav, NavLink } from 'react-bootstrap'
import Home from './components/Home'
import Sobre from './components/Sobre'
import Produtos from './components/Produtos'
import { BrowserRouter, Routes, Link, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'


 
function App() {

  return (
    <div className="App">
      <h1> Minha Aplicação React </h1>
      <BrowserRouter>
      
      <Nav variant='tabs'>
        <NavLink as={Link} to="/"> Página inicial </NavLink>
        <NavLink as={Link} to="/produto"> Cadastro de Produtos </NavLink>
        <NavLink as={Link} to="/produto"> Controle de Estoque </NavLink>
        <NavLink as={Link} to="/sobre"> Sobre </NavLink>
      </Nav>

      <Routes>
        <Route path='/' index element={ <Home/> }></Route>
        <Route path='/produto' element={ <Produtos/> }></Route>
        <Route path='/produto' element={ <Produtos/> }></Route>
        <Route path='/sobre' element={ <Sobre/> }></Route>
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
