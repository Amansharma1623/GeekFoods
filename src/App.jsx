import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import About from './components/about/Contact'
import Navbar from './components/navbar/Navbar'
import Quote from './QuoteSection';
import Restaurant from './RestaurantSection';

const App = () => {
  return (
     <>
     <Navbar />
     <Routes>
      <Route path='/' element={<Home />}/> 
      <Route path='/about' element={<About />} />
      <Route path='/quote' element={<Quote/>}/>
      <Route path='/restaurant' element={<Restaurant />}/>
     </Routes>
     </>
  );
}

export default App;