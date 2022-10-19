import { Route, Routes } from "react-router-dom";
import { HeaderComponent } from "./components/Header";


export function Router(){


    return (
        <Routes>
            <Route path="/" element={<HeaderComponent/>}>
            </Route>
        </Routes>
    )
}