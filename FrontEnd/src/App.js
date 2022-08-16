import logo from './logo.svg';
import './App.css';
import Home from "./component/Home";
import Login from "./component/Login";
import Register from "./component/Register";
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import NavBar from './component/NavBar';

function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route element={<Home></Home>} path="/"/>
        <Route element={<Home></Home>} path="home"/>
        <Route element={<Login></Login>} path="login"/>
        <Route element={<Register></Register>} path="register"/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
