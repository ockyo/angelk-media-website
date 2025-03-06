import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import Home from './pages/Home'
import News from './pages/News/News';
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
            <Route path="/thong-bao" element={<News />} />
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
