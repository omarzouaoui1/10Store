import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import Products from './pages/Products';
import Services from './pages/Services';
import Watches from './pages/Watches';

function App() {
  return (
    <>    
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/blogs' element={<Blogs/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/watches' element={<Watches/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
