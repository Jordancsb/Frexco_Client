import React from 'react'
import { Table, Button, Form } from 'react-bootstrap'

class Produtos extends React.Component {

  constructor(props){
    super(props)

    this.state = {
        id: 0,
        nome: '',
        idade: '',
        produtos : []
    }
  }

  componentDidMount() {
    this.searchProduct()
    }

  searchProduct = () => {
    fetch("http://localhost:8000/produto")
    .then(resposta => resposta.json())
    .then(dados => {
      this.setState({ produtos : dados })
    })
  }

  cadastrarProduto = (produto) => {
    fetch("http://localhost:8000/produto", 
      {method: 'POST',
      headears: {'Content-Type': 'application/json'},
      body: JSON.stringify(produto)
    })
    .then(resposta => {
      if(resposta.ok){
        this.searchProduct()
      }else{
        alert('Não foi possivel cadastrar o produto!')
      }
    })
  }

  updateProduto = (produto) => {
    fetch("http://localhost:8000/produto", 
      {method: 'PUT',
      headears: {'Content-Type': 'application/json'},
      body: JSON.stringify(produto)
    })
    .then(resposta => {
      if(resposta.ok){
        this.searchProduct()
      }else{
        alert('Não foi possivel cadastrar o produto!')
      }
    })
  }

  loadProduct = (id) => {
    fetch("http://localhost:8000/produto/" + id, { method: 'GET'})
    .then(resposta => resposta.json())
    .then(produto => {
      this.setState({ 
        id : produto.id, 
        nome: produto.nome,
        idade: produto.idade
      })
    })
  }

   deleteProduct = (id) => {
    fetch("http://localhost:8000/produto" + '/:id', { method: 'DELETE'})
    .then(resposta => {
    if(resposta.ok){
        this.searchProduct()
      }
    })
  }

  renderTable () {
    return <Table striped bordered hover>
      <thead>
        <tr>
          <th> Nome </th>
          <th> Idade </th>
          <th> Opções </th>
        </tr>
      </thead>
      <tbody>
      {
        this.state.produtos.map((nome) =>
          <tr>
            <td> { nome.nome } </td>
            <td> { nome.idade } </td>
            <td> 
            <Button variant="warning"onClick={() => this.loadProduct(nome.id)}> Editar </Button> 
            <Button variant="danger" onClick={() => this.deleteProduct(nome.id)}> Excluir </Button>
            </td>
          </tr>
        )
      }
      </tbody>
    </Table>
  }

  atualizaNome = (e) => {
    this.setState(
      {
        nome: e.target.value
      }
    )
  }

  atualizaIdade = (e) => {
    this.setState(
      {
        idade: e.target.value
      }
    )
  }

  submit = () => {

    if(this.state.id === 0){
      const produto = {
        nome: this.state.nome,
        idade: this.state.idade
    }
    this.cadastrarProduto(produto)

    }else{
      const produto = {
        id: this.state.id,
        nome: this.state.nome,
        idade: this.state.idade
    }
    this.UpdateProduto(produto)
  }
}

reset = () => {
  this.setState(
    {
      id: 0,
      nome: '',
      idade: ''
    }
  )
}

    render () {
      return (
        <>
          <Form>
          <Form.Group className="mb-3">
            <Form.Label>ID</Form.Label>
            <Form.Control placeholder="Codigo" value={this.state.id} readOnly={true}/>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Nome do Produto</Form.Label>
            <Form.Control type='text' placeholder="Digite o Produto" value={this.state.nome} onChange={this.atualizaNome}/>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label> Idade </Form.Label>
            <Form.Control type='number' placeholder="Preço"value={this.state.idade} onChange={this.atualizaIdade}/>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label> Selecione a categoria </Form.Label>
          </Form.Group>
          <Button variant='primary' type='submit' onClick={this.reset}> Novo </Button>
          <Button variant='primary' type='submit' onClick={this.submit}> Salvar </Button>
          </Form>
          {this.renderTable()}
        </>
      )
    }
  }

export default Produtos