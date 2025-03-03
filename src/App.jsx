import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import CreatorAgency from './pages/CreatorAgency/CreatorAgency';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/creator-agency" element={<CreatorAgency />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
