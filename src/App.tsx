import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import PopupMenu from "./component/PopupMenu/PopupMenu";
import Dropdown from "./component/Dropdown/Dropdown";

function App() {
  const [count, setCount] = useState(0);

  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [productDropdown, setProductDropdown] = useState(false);

  const client = [
    {
      id: 1,
      name: 'Cliente 1',
      description: 'Descrição do cliente 1',
    },
    {
      id: 2,
      name: 'Cliente 2',
      description: 'Descrição do cliente 2',
    },
    {
      id: 3,
      name: 'Cliente 3',
      description: 'Descrição do cliente 3',
    },
    {
      id: 4,
      name: 'Cliente 4',
      description: 'Descrição do cliente 4',
    },
    {
      id: 5,
      name: 'Cliente 5',
      description: 'Descrição do cliente 5',
    }
  ]

  return (
    <div className="container">
      <header>
        <div className="logo-area">
          <img src="" className="App-logo" alt="logo" />
        </div>

        <nav className="navbar">
          <Dropdown
              menu="Home"
          >
            <li className="item"><a href="#">Parceiros</a></li>
            <li className="item"><a href="#">Equipe</a></li>
            <li className="item"><a href="#">Projetos</a></li>
          </Dropdown>

          <Dropdown
              menu="Produtos"
          >
            <li className="item"><a href="#">Parceiros</a></li>
            <li className="item"><a href="#">Equipe</a></li>
            <li className="item"><a href="#">Projetos</a></li>
          </Dropdown>

          <Dropdown
              menu="Sobre"
          >
            <li className="item"><a href="#">Parceiros</a></li>
            <li className="item"><a href="#">Equipe</a></li>
            <li className="item"><a href="#">Projetos</a></li>
          </Dropdown>

          <Dropdown
              menu="Contato"
          >
            <li className="item"><a href="#">Parceiros</a></li>
            <li className="item"><a href="#">Equipe</a></li>
            <li className="item"><a href="#">Projetos</a></li>
          </Dropdown>
        </nav>
      </header>

      <table>
        <thead>
        <tr>
          <th>Nome</th>
          <th>Descrição</th>
        </tr>
        </thead>
        <tbody>
        {client.map(client => (
            <tr key={client.id}>
              <td>
                <h3>{client.name}</h3>
                <p>{client.description}</p>
              </td>

              <td>
                <PopupMenu>
                  <li className="itemPopup"><a href={'#'}>Item 1</a></li>
                  <li className="itemPopup"><a href={'#'}>Item 2</a></li>
                  <li className="itemPopup"><a href={'#'}>Item 3</a></li>
                  <li className="itemPopup"><a href={'#'}>Item 4</a></li>
                </PopupMenu>
              </td>
            </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
}

export default App
