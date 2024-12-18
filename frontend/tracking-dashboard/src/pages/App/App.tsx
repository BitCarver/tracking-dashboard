import { BrowserRouter } from "react-router-dom"
import { Routing } from "../../components/Routing/Routing"
import Header from "../../components/Header/Header"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routing />
    </BrowserRouter>
  )
}

export default App
