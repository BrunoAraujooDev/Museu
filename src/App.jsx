import { useContext } from "react";
import { BrowserRouter } from "react-router-dom"
import { HeaderComponent } from "./components/Header"
import { TemaContext, TemaProvider } from "./Contexts/TemaContext"
import { Router } from "./Router"
import "./index.css";
import { FooterComponent } from "./components/Footer";



function App() {

  return (
    <main id="main-content">
      <TemaProvider>
        <BrowserRouter>
        <HeaderComponent/>
          <Router />
          <FooterComponent/>
        </BrowserRouter>
      </TemaProvider>
    </main>
  )
}

export default App
