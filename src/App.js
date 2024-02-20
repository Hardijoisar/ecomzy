import logo from './logo.svg';
import './App.css';
import {NavBar} from "./components/NavBar"
import {Routes, Route} from 'react-router-dom'
import {HomePage} from "./pages/HomePage"
import {CartPage} from "./pages/CartPage"
import './index.css'

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='/cart' element={<CartPage></CartPage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
