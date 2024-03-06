import Filters from "./Components/Filters";
import Header from "./Components/Header";
import ProgressBar from "./Components/ProgressBar";
import Tarefas from "./Components/Tarefas";

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
