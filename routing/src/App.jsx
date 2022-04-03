import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import { Home } from './Components/Home';
import {AllProducts} from "./Components/AllProducts"
import { Navbar } from './Components/Navbar';
import { ProductDetail } from './Components/ProductDetail';

function App() {
  return (
    <div className="App">
      <Navbar/>
     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/products" element={<AllProducts/>}/>
       <Route path="/products/:id" element={<ProductDetail/>}/>
     </Routes>
    </div>
  );
}

export default App;
