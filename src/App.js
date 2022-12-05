import './App.css';
import Feedback from './components/Feedback/Feedback';
import Home from './components/Home/Home';
import Login from "./components/Login/Login"
import Navbar from './components/Navbar/Navbar';
import Welcome from './components/Welcome/Welcome';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Register from './components/Register/Register';
import Courses from "./components/Courses/Courses";
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/profile' exact element={<Home/>}/>
      <Route path='/feedback' exact element={<Feedback/>}/>
      <Route path='/login' exact element={<Login/>}/>
      <Route path='/' exact element={<Welcome/>}/>
      <Route path='/signup' exact element={<Register/>}/>
      <Route path='/courses' exact element={<Courses/>}/>
    </Routes>
    
    
    
    </BrowserRouter>
    </>
    
  );
}

export default App;
