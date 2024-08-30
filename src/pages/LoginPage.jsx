import { Form, redirect } from "react-router-dom"
import { getRequest, putRequest } from "../API/requests"
 
const LoginPage = () => {


    return (
        <>
            <div className="container col-lg-4 bg-light my-5 p-3 rounded ">
                <Form method="POST" action="/login" className="d-flex text-center flex-column">
                    <h3 className="display-5">Login form</h3>
                    <input type="text" name="login" placeholder="Login" className="p-3 col-lg-5 mx-auto my-2 rounded-pill border-0 shadow-lg"/>
                    <input type="password" name="pass" placeholder="Password" className="p-3 col-lg-5 mx-auto my-2 rounded-pill border-0 shadow-lg"/>
                    <button className="btn btn-outline-success btn-lg m-4 col-lg-4 mx-auto fw-bold">Sign in</button>
                </Form>
            </div>
        </>
    )
}

export const loginAction = async ({request}) => {
    const data = await request.formData()
    const login = data.get("login")
    const pass = data.get("pass")

    if (login == "" || pass == "") {
        return {error: "Login and pass must be provided"}
    }

    const users = await getRequest("http://localhost:3000/users/")
    let isFound = false
    let newCurrentUser = {}

    users.map((user)=>{
        if (user.name == login && user.pass == pass){
            isFound = true
            newCurrentUser = {
                "id": user.id,
                "isLogged": true
            }
        }
    })
    
    if (!isFound) {
        return {error: "Login or password is invalid"}
    }

    try {
        await putRequest("http://localhost:3000/currentUser/", newCurrentUser)
    } catch {
        return {error: "Something went wrong on the server side"}
    }

    return redirect("/account")
}


export default LoginPage