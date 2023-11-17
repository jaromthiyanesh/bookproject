import React from "react";
import { Routes,Route,BrowserRouter } from "react-router-dom"
import BookTitle from "./BookTitle";
import Login from "./Login";
import Signup from "./Signup";

function App() {
  return (
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<BookTitle/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        </Routes>
    </BrowserRouter>
      
    
  );
}

export default App;
