import { useContext } from "react";
import { BrowserRouter } from "react-router-dom"
import { HeaderComponent } from "./components/Header"
import { TemaContext, TemaProvider } from "./Contexts/TemaContext"
import { Router } from "./Router"
import "./index.css";



function App() {

  return (
    <main id="main-content">
      <TemaProvider>
        <BrowserRouter>
        <HeaderComponent/>
          <Router />
        </BrowserRouter>
      </TemaProvider>
    </main>
  )
}

export default App
