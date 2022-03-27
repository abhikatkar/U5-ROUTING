import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import { Home } from './Components/Home';
import {AllProducts} from "./Components/AllProducts"
import { Navbar } from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/products" element={<AllProducts/>}/>
     </Routes>
    </div>
  );
}

export default App;
