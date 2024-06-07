import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '@/components/pages/Login/Login';
import ThemeDropdown from '@/components/ThemeDropdown';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen">
        <nav className="p-4 bg-base-200">
          <ThemeDropdown />
        </nav>
        <main>
          <Routes>
            <Route path="/" Component={Login} />
            <Route path="/login" Component={Login} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
