import './assets/css/base/base.css';
import './assets/css/componentes/card.css';
import { Home } from './pages/Home.jsx';
import { About } from './pages/About.jsx';
import { Page404 } from './pages/Page404.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header.jsx';
import { Post } from './pages/Post.jsx';
import { Category } from './pages/Category.jsx';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/post/:id' element={<Post/>}/>
        <Route path='/category/:id/*' element={<Category />}/>
        <Route path='*' element={<Page404 />} />
      </Routes>
    </Router>
  );
}

export default App;
