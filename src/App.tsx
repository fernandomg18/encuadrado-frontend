import Home from '@/views/Home';
import Login from '@/views/Login';
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <React.Fragment>
        <Routes>
          <Route 
            path="/" 
            element={<Login />}
          />
          <Route
            path="/home"
            element={<Home />}
          />
        </Routes>
      </React.Fragment>
    </Router>
  );
}

export default App;