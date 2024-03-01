import Filters from "./components/Filters";
import Header from "./components/Header";
import ProgressBar from "./components/ProgressBar";
import Tarefas from "./components/Tarefas";

import { Container } from './styles'

function App() {
  return (
    <Container>
      <Header />
      <ProgressBar />
      <Filters />
      <Container>
        <Tarefas />
      </Container>
    </Container>
  )
}

export default App
