import { Route, Routes } from "react-router-dom";
import { ArtDetails } from "./view/ArtDetails";
import { CollectionArtComponent } from "./view/CollectionArt";
import { Home } from "./view/Home";
import { LoginComponent } from "./view/Login";


export function Router(){


    return (
        <Routes>
            <Route path="/" element={<Home/>}/>   
            <Route path="/login" element={<LoginComponent/>}/>   
            <Route path="/department/:id" element={<CollectionArtComponent/>}/>   
            <Route path="/art/:id" element={<ArtDetails/>}/>   
        </Routes>
    )
}