import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Component from './components';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Component />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
