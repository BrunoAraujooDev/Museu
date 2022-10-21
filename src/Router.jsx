import { Route, Routes } from "react-router-dom";
import { Department } from "./components/Departments";
import { Home } from "./view/Home";
import { LoginComponent } from "./view/Login";


export function Router(){


    return (
        <Routes>
            <Route path="/" element={<Home/>}/>   
            <Route path="/login" element={<LoginComponent/>}/>   
        </Routes>
    )
}