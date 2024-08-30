import './App.css'

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.css'

//layouts 
import HomeLayout from './layouts/HomeLayout'
import { AccountLayout } from './layouts/AccountLayout'

//pages
import MainPage, { mainPageLoader } from './pages/MainPage'
import LoginPage, { loginAction } from './pages/LoginPage'
import RegisterPage, { registerAction } from './pages/RegisterPage'
import { LogOutPage, logOut } from './pages/LogOutPage'
import { AccountDetails, accountDetailsLoader } from './pages/AccountDetails'
import { newAuctionAction, NewAuctionPage } from './pages/NewAuctionPage'
import { auctionListLoader, AuctionListPage } from './pages/AuctionListPage'
import { AuctionHistory, auctionHistoryLoader } from './pages/AuctionHistory'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<HomeLayout/>} >

      <Route index element={<MainPage />} 
                   loader={mainPageLoader}/>

      <Route path="/login" 
             element={<LoginPage/>} 
             action={loginAction}/>

      <Route path="/register" 
             element={<RegisterPage/>}
             action={registerAction}/>
      
      <Route path="/account/" element={<AccountLayout/>} >

          <Route  path="details" 
                  element={<AccountDetails/>} 
                  loader={accountDetailsLoader}/>

          <Route  path="logOut" element={<LogOutPage/>} loader={logOut} />

          <Route path="newAuction" 
                 element={<NewAuctionPage/>} 
                 action={newAuctionAction}/>
          
          <Route path="yourAuctions" 
                 element={<AuctionListPage/>} 
                 loader={auctionListLoader}/>

          <Route path="yourHistory" 
                 element={<AuctionHistory/>} 
                 loader={auctionHistoryLoader}/>

      </Route>
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
