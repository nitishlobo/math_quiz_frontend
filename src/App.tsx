import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '@/components/pages/Login/Login';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Login} />
        <Route path="/login" Component={Login} />
      </Routes>
    </Router>
  );
};

export default App;
