import { redirect, useLoaderData } from "react-router-dom"
import { putRequest } from "../API/requests.js"

export const LogOutPage = () => {
    const loaderData = useLoaderData()
    redirect(".")

    return(<></>)
}

export const logOut = async () => {
    let newCurrent = {
        id:"",
        isLogged: false
    }

    try {
        await putRequest("http://localhost:3000/currentUser", newCurrent)
    } catch {
        throw new Error("Logging out error")
    }

    return redirect("/")
}
