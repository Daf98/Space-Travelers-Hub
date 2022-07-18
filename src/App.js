import { Routes, Route } from 'react-router-dom';
import './App.css';
import Missions from './components/Missions';
import Navigation from './components/Navigation';
import Profile from './components/Profile';
import Rockets from './components/Rockets';

function App() {
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
