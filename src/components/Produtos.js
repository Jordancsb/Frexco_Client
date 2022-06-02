import React from 'react'
import { Table, Button, Form, Modal } from 'react-bootstrap'

class Produtos extends React.Component {

  constructor(props){
    super(props)

    this.state = {
        id: 0,
        nome: '',
        preco: '',
        produtos : [],
        modelOpen: false
    }
  }

  componentDidMount() {
    this.searchProduct()
    }

  searchProduct = () => {
    fetch("http://localhost:8000/produtos")
    .then(resposta => resposta.json())
    .then(dados => {
      this.setState({ produtos : dados })
    })
  }

  cadastrarProduto = (produto) => {
    fetch("http://localhost:8000/produtos", 
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
    fetch("http://localhost:8000/produtos", 
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
    fetch("http://localhost:8000/produtos" , { method: 'GET'})
    .then(resposta => resposta.json())
    .then(produto => {
      this.setState({ 
        id : produto.id, 
        nome: produto.nome,
        idade: produto.preco
      })
      this.openModal()
    })
  }

   deleteProduct = (id) => {
    fetch("http://localhost:8000/produtos/" + id, { method: 'DELETE'})
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
          <th> Valor </th>
          <th> Opções </th>
        </tr>
      </thead>
      <tbody>
      {
        this.state.produtos.map((produto) =>
          <tr>
            <td> { produto.nome } </td>
            <td> { produto.preco } </td>
            <td> 
            <Button variant="warning"onClick={() => this.loadProduct()}> Editar </Button> 
            <Button variant="danger" onClick={() => this.deleteProduct()}> Excluir </Button>
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

  atualizaValor = (e) => {
    this.setState(
      {
        preco: e.target.value
      }
    )
  }

  submit = () => {

    if(this.state.id === 0){
      const produto = {
        nome: this.state.nome,
        idade: this.state.preco
    }
    this.cadastrarProduto(produto)

    }else{
      const produto = {
        id: this.state.id,
        nome: this.state.nome,
        idade: this.state.preco
    }
    this.UpdateProduto(produto)
    this.closeModal()
  }
}

reset = () => {
  this.setState(
    {
      id: 0,
      nome: '',
      preco: ''
    }
  )
  this.openModal()
}

closeModal = () => {
  this.setState(
    {
      modelOpen: false
    }
  )
}

openModal = () => {
  this.setState(
    {
      modelOpen: true
    }
  )
}

    render () {
      return (
        <>
          <Modal show={this.state.modelOpen} onHide={this.closeModal}>
            <Modal.Header closeButton>
              <Modal.Title>Cadastre seu produto</Modal.Title>
            </Modal.Header>
            <Modal.Body>
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
                <Form.Label> Preço </Form.Label>
                <Form.Control type='number' placeholder="Preço"value={this.state.preco} onChange={this.atualizaValor}/>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label> Selecione a categoria </Form.Label>
              </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.closeModal}>
                Fechar
              </Button>
              <Button variant="primary" onClick={this.submit}>
                Salvar
              </Button>
            </Modal.Footer>
          </Modal>
          <section>
            <Button className='' variant='primary' type='submit' onClick={this.reset}> Novo </Button>
          </section>
          {this.renderTable()}
        </>
      )
    }
  }

export default Produtos