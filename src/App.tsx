import { StrictMode } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LoginPage from './pages/Login';
import { AuthProvider } from './context/AuthContext'

function App() {
  return (
    <StrictMode>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </AuthProvider>
      </Router>
    </StrictMode>
  );
}

export default App;
