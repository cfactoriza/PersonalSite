import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Home/Home';
import About from './About/About';
import Projects from './Projects/Project';

function App () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element ={<Home/>}  />
                <Route path='/About' element = {<About/>} />
                <Route path='/Projects' element = {<Projects/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;