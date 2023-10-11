import './App.css';
import Header from './components/Header/Header';
import Cart from './pages/Cart/Cart';
import Home from './pages/Home/Home';
import { Routes, Route } from 'react-router-dom';
import Pizza from './pages/Pizza/Pizza';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/cart/:id" element={<Pizza />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
