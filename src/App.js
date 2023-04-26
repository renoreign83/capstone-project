import React,{useState  } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";  
 //import './styles/main.scss';
import NavigationBar from './components/navigation/Navigationbar.js'; 
import Mainpage from './components/Pages/mainpage.jsx';
import CreateUser from './components/Pages/create-user';
import Login from './components/Pages/login.js';
import './styles/user-login.css';
import './styles/mainpage.css';


function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userId, setUserId] = useState('');
  return (
    
    <BrowserRouter>
    <NavigationBar />
        <Routes>
        <Route exact path="/" element={<Mainpage loggedIn={loggedIn}  setLoggedIn={setLoggedIn} userId={userId} />} />
        <Route exact path="/login" element={<Login setLoggedIn={setLoggedIn} setUserId={setUserId} />} />
        <Route exact path="/signup" element={<CreateUser setLoggedIn={setLoggedIn} />} />
       
        

          
        </Routes>
      </BrowserRouter>
    
  );
}

export default App;
