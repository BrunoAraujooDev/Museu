import { BrowserRouter } from "react-router-dom"
import { TemaProvider } from "./Contexts/TemaContext"
import { Router } from "./Router"



function App() {

  return (
    <main>
      <TemaProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </TemaProvider>
    </main>
  )
}

export default App
