import './App.css';
import Navbar from './components/Navbar';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import Home from './components/Home';
import Movies from './components/Movies';
import People from './components/People';
import Tv from './components/Tv';
import Register from './components/Register';
import Login from './components/Login';
import React, { useEffect, useState } from 'react'
import MovieDetails from './components/MovieDetails';
import TvDetails from './components/TvDetails';
import Footer from './components/Footer';


function App() {
  let navigate = useNavigate();
  const [user, setUser] = useState(null)
  let saveUserData = () => {
    let userData = JSON.parse(localStorage.getItem('currentUser'));
    setUser(userData);
  }
  useEffect(() => {
    if (localStorage.getItem('currentUser')) {
      saveUserData();
    }
  }, [])
  let logOut = () => {
    setUser(null);
    localStorage.removeItem('currentUser');
    navigate('/login');
  }
  function ProtectedRoute(props) {
    if (localStorage.getItem('currentUser') == null) {
      return <Navigate to='/login' />
    }
    else {
      return props.children;
    }
  }
  return (
    <div className="App">
      <Navbar us={user} logout={logOut} />
      <div className='container-fluid'>
        <Routes>
          <Route path='/' element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path='home' element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path='movies' element={<ProtectedRoute><Movies /></ProtectedRoute>} />
          <Route path='movieDetails/:id' element={<ProtectedRoute><MovieDetails /></ProtectedRoute>} />
          <Route path='people' element={<ProtectedRoute><People /></ProtectedRoute>} />
          <Route path='tv' element={<ProtectedRoute><Tv /></ProtectedRoute>} />
          <Route path='tvDetails/:id' element={<ProtectedRoute><TvDetails/></ProtectedRoute>} />

          <Route path='login' element={<Login saveUserData={saveUserData} />} />
          <Route path='register' element={<Register />} />
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
