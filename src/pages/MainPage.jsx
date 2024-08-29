
import { useLoaderData } from "react-router-dom"
import { getRequest } from "../API/requests"
import NavNotLogged from "../components/NavNotLogged"
import NavLogged from "../components/NavLogged"


const MainPage = () => {
    const currentUser = useLoaderData()

    return(
        <>
            <main>
                {currentUser.isLogged ? <NavLogged/> : <NavNotLogged/>}
            </main>
        </>
    )
}

export const mainPageLoader = async () => {
    const currentUser = await getRequest("http://localhost:3000/currentUser/")

    return currentUser
}

export default MainPage