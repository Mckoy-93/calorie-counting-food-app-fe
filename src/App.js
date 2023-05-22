import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

import NavBar from "./Components/NavBar";

import Edit from './Pages/Edit'
import Home from './Pages/Home'
import Error from "./Pages/Error";
import New from "./Pages/New"
import Show from "./Pages/Show"
import Index from "./Pages/Index"

function App() {
  return (
    <div className="App">
       <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/foods" element={<Index />} />
          <Route path="/foods/new" element={<New />} />
          <Route path="/foods/:id" element={<Show />} />
          <Route path="/foods/:id/edit" element={<Edit />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;