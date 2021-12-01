import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {BrowserRouter as Router , Routes ,Route, } from 'react-router-dom'

import Acceuil from './Acceuil';
import FilmView from './components/FilmView';

function App() {
  return (<div>
    <Router>
      <Routes>
        <Route path="/" element={<Acceuil/>}/>
        <Route path="/film/:title" element={<FilmView />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
