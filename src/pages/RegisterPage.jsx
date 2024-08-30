import { Form, redirect } from "react-router-dom"
import { postRequest } from "../API/requests"
 
const RegisterPage = () => {


    return (
        <>
            <div className="container col-lg-4 bg-light my-5 p-3 rounded ">
                <Form method="POST" action="/register" className="d-flex text-center flex-column">
                    <h3 className="display-5">Register form</h3>
                    <input type="text" name="login" placeholder="Login" className="p-3 col-lg-5 mx-auto my-2 rounded-pill border-0 shadow-lg"/>
                    <input type="password" name="pass" placeholder="Password" className="p-3 col-lg-5 mx-auto my-2 rounded-pill border-0 shadow-lg"/>
                    <input type="password" name="repeatedPass" placeholder="Repeat password" className="p-3 col-lg-5 mx-auto my-2 rounded-pill border-0 shadow-lg"/>
                    <button className="btn btn-outline-success btn-lg m-4 col-lg-4 mx-auto fw-bold">Sign in</button>
                </Form>
            </div>
        </>
    )
}

export const registerAction = async ({request}) => {
    const data = await request.formData()
    const login = data.get("login")
    const pass = data.get("pass")
    const repeatedPass = data.get("repeatedPass")

    if (login == "" || pass == "" || repeatedPass == ""){
        return {error: "All fields must be filled up"}
    }

    if (pass != repeatedPass) {
        return {error: "Password and repeated password must be the same"}
    }

    const newUser = {
        "id": crypto.randomUUID(),
        "name": login,
        "pass": pass,
        "soldCars": 0,
        "allAuctions": 0,
        "failedAuctions": 0,
        "spentMoney": 0,
        "earnedMoney": 0,
        "lostMoney": 0,
        "history": []
      }
    
      try {
        await postRequest("http://localhost:3000/users/", newUser)
      } catch {
        throw new Error("Error during creating new user")
      }


    return redirect("/")
}

export default RegisterPage