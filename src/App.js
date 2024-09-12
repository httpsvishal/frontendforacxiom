import './App.css';
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom';
import UserSignup from './pages/UserSignupPage';
import AdminSignup from './pages/AdminSignupPage'; 
import UserLogin from './pages/UserLogin'; 
import AdminLogin from './pages/AdminLogin';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/user-signup" element={<UserSignup />} />
          <Route path="/admin-signup" element={<AdminSignup />} />
          <Route path="/user-login" element={<UserLogin />} />
          <Route path="/admin-login" element={<AdminLogin />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
