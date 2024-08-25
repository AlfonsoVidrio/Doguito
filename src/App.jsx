import './assets/css/base/base.css';
import './assets/css/componentes/card.css';
import { Home } from './pages/Home.jsx';
import { About } from './pages/About.jsx';
import { Page404 } from './pages/Page404.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header.jsx';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<Page404 />} />
      </Routes>
    </Router>
  );
}

export default App;
