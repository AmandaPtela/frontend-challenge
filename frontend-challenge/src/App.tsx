import Filters from "./Components/Filters";
import Header from "./Components/Header";
import ProgressBar from "./Components/ProgressBar";
import Tasks from "./Components/Tasks";

import { Container } from './styles'

function App() {
  return (
    <Container>
      <Header />
      <ProgressBar />
      <Filters />
      <Container>
        <Tasks />
      </Container>
    </Container>
  )
}

export default App
