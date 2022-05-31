import React from 'react'
import { Table, Button, Form } from 'react-bootstrap'

class Produtos extends React.Component {

  constructor(props){
    super(props);

    this.state = {
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

   deleteProduct = (id) => {
    fetch("http://localhost:8000/produto/" + id,
    { method: 'DELETE',
    headears: {'Content-Type': 'application/json'},
    body: JSON.stringify(id)
      })
    .then(resposta => {
    if(resposta.ok){
        this.searchProduct()
      } else{
        alert('Não foi possivel cadastrar o produto!')
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
        this.state.produtos.map((produto) =>
          <tr>
            <td> { produto.nome } </td>
            <td> { produto.idade } </td>
            <td> 
            <Button variant="warning"> Editar </Button> 
            <Button variant="danger" onClick={() => this.deleteProduct(produto.id)}> Excluir </Button>
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
    const produto = {
      nome: this.state.nome,
      idade: this.state.idade
    }
    this.cadastrarProduto(produto)
  }

    render() {
      return (
        <>
          <Form>
          <Form.Group className="mb-3">
            <Form.Label>Nome do Produto</Form.Label>
            <Form.Control placeholder="Produto" value={this.state.nome} onChange={this.atualizaNome}/>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label> Idade </Form.Label>
            <Form.Control placeholder="Preço"value={this.state.idade} onChange={this.atualizaIdade}/>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label> Selecione a categoria </Form.Label>
          </Form.Group>
          <Button variant='primary' type='submit' onClick={this.submit}> Salvar </Button>
          </Form>
          {this.renderTable()}
        </>
      )
    }

}
  
export default Produtos;