import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import View from './components/View';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/view" element={<View />} />
      </Routes>
    </>
  );
}

export default App;
