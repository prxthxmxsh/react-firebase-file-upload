import React from "react"
import Signup from "./authentication/signup"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Profile from "./authentication/Profile"
import Login from "./authentication/login"
import PrivateRoute from "./authentication/PrivateRoute"
import ForgotPassword from "./authentication/forgotPassword"
import UpdateProfile from "./authentication/updateProfile"

function App() {
  return (
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/user" element={<PrivateRoute><Profile/></PrivateRoute>}/>
            <Route path="/updateProfile" element={<PrivateRoute><UpdateProfile/></PrivateRoute>}/>
            <Route  path="/signup" element={<Signup/>} />
            <Route  path="/login" element={<Login/>} />
            <Route  path="/forgotPassword" element={<ForgotPassword/>} />
          </Routes>
        </AuthProvider>
      </Router>
  );
}

export default App;



    
      