import './App.css'
import React from 'react';
import DefaultPage from './Components/DefaultPage';
import LoginPage from './Components/LoginPage';
import RegisterPage from './Components/RegisterPage';
import { createBrowserRouter , RouterProvider } from "react-router-dom";
import HomePage from './pages/HomePage';
import Chart from './Components/Chart';
import Root from './pages/Root';
const route = createBrowserRouter([{
  path : '/',
  element : <Root /> ,
  children : [
    {path : '' , element : <HomePage  />},
    {path : 'login' , element : <LoginPage  />},
    {path : 'register' , element : <RegisterPage  />},
    { path: 'chart', element: <Chart /> }
  ]
}])
function App() {


  return (
    <RouterProvider router={route} />
  )
}

export default App
