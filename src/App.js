
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import NavBar from './Components/NavBar';
import NoMatch from './Components/NoMatch';
import Drinks from './Pages/Drinks';
import ProductDetail from './Pages/ProductDetail';
import SearchByCategory from './Pages/SearchByCategory';
import RandomDrink from './Pages/RandomDrink';


function App() {
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/drinks' element={<Drinks/>}></Route>
      <Route path='/search' element={<SearchByCategory/>}></Route>
      <Route path='/random' element={<RandomDrink/>}></Route>
      <Route path='/drinks/:id' element={<ProductDetail/>}></Route>
      <Route path='*' element={<NoMatch/>}></Route>
    </Routes>
    </>

    
    
     
    
   
  );
}

export default App;
