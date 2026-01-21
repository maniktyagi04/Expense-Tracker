import React from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"

import Login from "./pages/auth/Login"
import SignUp from "./pages/auth/SignUp"
import Home from "./pages/Dashboard/Home"
import Income from "./pages/Dashboard/Income"
import Expense from "./pages/Dashboard/Expense"
import { UserProvider } from "./context/UserContext";
import { Toaster } from "react-hot-toast";


const App = () => {
  console.log("App Component Rendering");
  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Root />} />
            <Route path="/login" exact element={<Login />} />
            <Route path="/signup" exact element={<SignUp />} />
            <Route path="/dashboard" exact element={<Home />} />
            <Route path="/income" exact element={<Income />} />
            <Route path="/expense" exact element={<Expense />} />
          </Routes>
        </Router>
      </div>

      <Toaster 
        toastOptions={{
          className: "",
          style: {
            fontSize: "13px"
          },
        }}
      />
    </>
  );
}

export default App;


const Root = () => {
  return (
    <Navigate to="/dashboard" />
  );
};
