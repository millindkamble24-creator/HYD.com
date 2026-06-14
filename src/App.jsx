import { Routes,Route } from 'react-router';
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {HomePage} from './pages/HomePage';

function App() {
  return (
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="checkout" element={<div>Test CheckOut Page</div>} />
      </Routes>
  )
}

export default App
