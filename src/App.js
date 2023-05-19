import { Route, Routes } from 'react-router-dom';
import { UserAlbums, UserPhotos, UsersPage } from './pages';
import './styles/reset.css';
import './App.css';
import './styles/main.css';

function App() {
  return (
    <div className='Wrapper'>
      <div className='container'>
        <Routes>
          <Route path='/' element={<UsersPage />} />
          <Route path='/users/:userId/albums' element={<UserAlbums />} />
          <Route path='/albums/:albumId/photos' element={<UserPhotos />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
