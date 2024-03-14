import Filters from "./Components/Filters";
import Header from "./Components/Header";
import ProgressBar from "./Components/ProgressBar";
import Tasks from "./Components/Tasks";

import { Container } from './Styles/globalStyles'

function App() {
  return (
    <Container>
      <Header />
      <ProgressBar />
      <Filters />
      <Tasks />
    </Container>
  )
}

export default App
