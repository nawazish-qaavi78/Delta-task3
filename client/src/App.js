import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RegisterPage from './Pages/RegisterPage/RegisterPage'
import LandingPage from './Pages/LandingPage/LandingPage';
import LoginPage from './Pages/LoginPage/LoginPage';
import ProfilePage from './Pages/ProfilePage/ProfilePage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes >
          <Route path='/' Component={LandingPage} />
          <Route path='/login' Component={LoginPage} />
          <Route path='/register' Component={RegisterPage} />
          <Route path='/profile/:userId' Component={ProfilePage} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
