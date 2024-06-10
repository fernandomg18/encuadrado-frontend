import ClientPay from '@/views/ClientPay';
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
          <Route 
            path="/client-payment/:appointment_id" 
            element={<ClientPay />}
          />
          <Route
            path="*"
            element={<div>Error 404: Not Found</div>}
          />
        </Routes>
      </React.Fragment>
    </Router>
  );
}

export default App;