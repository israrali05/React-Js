import React from "react";
import Home from "./home";
import Contact from "./contact";
import About from "./about";
import {BrowserRouter, Route, Routes} from 'react-router-dom';

class RouterApps extends React.Component{
    render(){
        return(
            <BrowserRouter>
            <div>
                <nav>
            <ul>
                <li><a href="/home">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
            </nav>
                <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
                </Routes>
            
            </div>
            </BrowserRouter>
                )
    }
}
export default RouterApps;