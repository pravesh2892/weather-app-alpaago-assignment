
import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './Firebase';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import Activeuser from './Components/ActiveUser/Activeuser';


function App() {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

 

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={user ? <Home /> : <Navigate to="/login" />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/ActiveUser" element ={<Activeuser />} />
      </Routes>
    </Router>
  );
}

export default App;
