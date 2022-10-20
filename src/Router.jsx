import { Route, Routes } from "react-router-dom";
import { Department } from "./components/Departments";
import { Home } from "./view/Home";


export function Router(){


    return (
        <Routes>
            <Route path="/" element={<Home/>}/>   
        </Routes>
    )
}