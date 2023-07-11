import { useState } from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Documents from './components/Pages/documents/Documents';
import NavBar from './components/UI/NavBar/NavBar';
import Home from './components/Pages/Home';
import Login from './components/Pages/Login';

function App() {

  return (
      <BrowserRouter>
        <NavBar/>
        <div className="content">
          <Routes> 
            <Route path="/documents" element={<Documents/>}>
            </Route>

            <Route path="/home" element={<Home/>}>
            </Route>

            <Route path="/login" element={<Login/>}>
            </Route>
          </Routes> 
        </div>
      </BrowserRouter>
  )
}

export default App
