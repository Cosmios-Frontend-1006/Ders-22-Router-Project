import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router';
import Home from './Pages/Home';
import Login from './Pages/Login';

function App() {
  return (
     <>
          <Navbar />

          <Routes>
            <Route path='/' element={<Home />} /> 
            <Route /> 
            <Route path="/login" element={<Login />} /> 
          </Routes>
     </>
  );
}

export default App;
