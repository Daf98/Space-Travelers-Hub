import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './App.css';
import Missions from './components/Missions';
import Navigation from './components/Navigation';
import Profile from './components/Profile';
import Rockets from './components/Rockets';

import fetchRocketsFromAPI from './redux/api';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRocketsFromAPI());
  }, []);
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
