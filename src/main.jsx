import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Home.jsx'
import Demo from './Demo.jsx'
import Demo2 from './Demo2.jsx'
import Detail from './Detail.jsx'

import { BrowserRouter,Routes,Route } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/a" element={<Demo/>}></Route>
    <Route path="/show" element={<Demo2/>}></Route>
    <Route path="/detail" element={<Detail/>}></Route>
    
  </Routes>
  </BrowserRouter>
)
