import { useEffect, useState } from 'react';
import api from '../services/api';

function Index() {
  const [produtos, setProdutos] = useState([]);
  useEffect(() => {
    api.get("http://localhost:8000/produtos")
       .then((response) => {
         console.log(response);
         setProdutos(response.data)
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro : " + err);
      });
  }, []);
  return (
    <div className="produto-container">
       <h1>Relação de Produtos</h1>
        <ul>
           {produtos.map(produto => (
             <li key={produto.Id}>
                <b>Nome:</b>{produto.nome}<br/>
                <b>Descrição:</b>{produto.descricao}<br/>
                <b>Preço:</b>{produto.preco}<br/>
            </li>
         ))}
        </ul>
    </div>
  );
}

export default Index