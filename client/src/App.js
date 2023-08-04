import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RegisterPage from './Pages/RegisterPage/RegisterPage'
import LandingPage from './Pages/LandingPage/LandingPage';
import LoginPage from './Pages/LoginPage/LoginPage';
import UserProfilePage from './Pages/ProfilePage/UserProfilePage';
import SearchedProfile from './Pages/ProfilePage/SearchedProfile';
import QuizzPage from './Pages/QuizzPage/QuizzPage';
import ScorePage from './Pages/ScorePage/ScorePage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes >
          <Route path='/' Component={LandingPage} />
          <Route path='/login' Component={LoginPage} />
          <Route path='/register' Component={RegisterPage} />
          <Route path='/profile' Component={UserProfilePage} />
          <Route path='/profile/:userId' Component={SearchedProfile} />
          <Route path='/:quizzId' Component={QuizzPage} />
          <Route path='/:quizzId/score' Component={ScorePage} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
