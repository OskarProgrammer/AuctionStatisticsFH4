import './App.css'

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.css'

//layouts 
import HomeLayout from './layouts/HomeLayout'

//pages
import MainPage, { mainPageLoader } from './pages/MainPage'
import LoginPage, { loginAction } from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import { LogOutPage, logOut } from './pages/LogOutPage'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<HomeLayout/>} >
      <Route index element={<MainPage />} loader={mainPageLoader}/>
      <Route path="/login" element={<LoginPage/>} action={loginAction}/>
      <Route path="/register" element={<RegisterPage/>}/>
      <Route path="/logOut" element={<LogOutPage/>} laoder={logOut}/>
    </Route>
  )
)


function App() {


  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
