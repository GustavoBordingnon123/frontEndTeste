import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import NavBar from './components/Navbar/index';
import NewData from './Pages/NewData';
import Clientes from './Pages/ClientesViewPage';
import Vendas from './Pages/VendasViewPage';
import Produtos from './Pages/ProdutosViewPage';

function App() {

  const textosPrincipais = {
    Cliente: 'Adicione um novo cliente',
    Produto: 'Adicione um novo produto',
    Venda: 'Adicione uma nova venda',
  }

  const inputDataCliente = {
    Nome: {
      label: "Nome",
      placeholder: 'Digite seu nome',
    },
    Email: {
      label: "Email",
      placeholder: 'Digite seu email',
    },
    Cidade: {
      label: "Cidade",
      placeholder: 'Digite sua cidade',
    }
  }

  const inputDataProduto = {
    ID: {
      label: "ID do Produto",
      placeholder: 'Digite o ID do produto',
    },
    Desc: {
      label: "Descrição do Produto",
      placeholder: 'Digite a descrição do produto',
    },
    VlrUnitario: {
      label: "Valor Unitário",
      placeholder: 'Digite o valor unitário do produto',
    }
  }

  const inputDataVenda = {
    ID_VENDA: {
      label: "ID da Venda",
      placeholder: 'Digite o ID da venda',
    },
    ID_CLIENTE: {
      label: "ID do Cliente",
      placeholder: 'Digite o ID do cliente',
    },
    ID_PRODUTO: {
      label: "ID do Produto",
      placeholder: 'Digite o ID do produto',
    },
    VLR_UNITARIO_VENDA: {
      label: "Valor Unitário da Venda",
      placeholder: 'Digite o valor unitário da venda',
    },
    DTH_VENDA: {
      label: "Data e Hora da Venda",
      placeholder: 'Digite a data e hora da venda',
    },
    VLR_TOTAL_VENDA: {
      label: "Valor Total da Venda",
      placeholder: 'Digite o valor total da venda',
    }
  }

  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Clientes />} />
          <Route path="/vendas" element={<Vendas />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/newCliente" element={<NewData inputData={inputDataCliente} textosPrincipais={textosPrincipais.Cliente}/>} />
          <Route path="/newProduto" element={<NewData inputData={inputDataProduto} textosPrincipais={textosPrincipais.Produto}/>} />
          <Route path="/newVenda" element={<NewData inputData={inputDataVenda} textosPrincipais={textosPrincipais.Venda} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
