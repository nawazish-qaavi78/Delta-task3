import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage'
import LandingPage from './Pages/LandingPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes >
          <Route path='/' Component={LandingPage} />
          <Route path='/login' Component={LoginPage} />
          <Route path='register' Component={RegisterPage} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
