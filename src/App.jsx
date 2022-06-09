import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/HomePage/Home';
import Navbar from './components/Navbar';

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
