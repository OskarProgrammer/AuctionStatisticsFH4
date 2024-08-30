import { Link, NavLink, Outlet } from "react-router-dom"
import { NavBar } from "../components/NavBar"

export const AccountLayout = () => {

    return (
        <>
            <NavBar/>
            <Outlet/>
        </>
    )
}