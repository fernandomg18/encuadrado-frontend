import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Login from './views/Login';

const App = () => {
    return (
        <Router>
            <React.Fragment>
            <Routes>
                <Route 
                path="/" 
                element={<Login />}
                />
            </Routes>
            </React.Fragment>
        </Router>
        // <>
        //     <Login />
        // </>
    );
    }

export default App;