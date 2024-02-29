import Filters from "./components/Filters";
import Header from "./components/Header";
import ProgressBar from "./components/ProgressBar";

import { Container } from './styles'

function App() {
  return (
    <Container>
      <Header />
      <ProgressBar />
      <Filters />
      <Container>
        <input type="text" placeholder="Add new item" />
        <button>+</button>
        <table>
          <thead>Tarefas</thead>
          <tbody>
            <td>tarefas</td>
            <td>ações</td>
            <tr>tarefa1</tr>
            <tr>tarefa2</tr>
          </tbody>
        </table>
      </Container>
    </Container>
  )
}

export default App
