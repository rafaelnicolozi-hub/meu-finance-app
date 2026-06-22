import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;