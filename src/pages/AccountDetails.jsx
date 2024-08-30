import { useLoaderData } from "react-router-dom"
import { getRequest, getRequestId } from "../API/requests"

export const AccountDetails = () => {
    const user = useLoaderData()


    const successAuctions = parseInt(user.soldCars)
    const failedAuctions = parseInt(user.allAuctions) - parseInt(user.soldCars)

    return (
        <div className="container col-lg-6 col-md-6 bg-light my-4 p-5 rounded">
            <h3 className="display-6 text-center">{user.name}</h3>
            <div className="container col-lg-12 d-flex row text-center p-3">
                <div className="container col-lg-6 col-md-5 col-sm-5">
                    <h4>Sold cars: {successAuctions}</h4> 
                </div>
                <div className="container col-lg-6 col-md-5 col-sm-5">
                    <h4>Failed auctions: {failedAuctions}</h4>
                </div>
            </div>
            <div className="container col-lg-12 d-flex row text-center">
                <p>Spent money: {parseInt(user.spentMoney)}</p>
                <p>Lost money: {parseInt(user.spentMoney)}</p>
                <p>Earned money: {parseInt(user.spentMoney)}</p>
            </div>
        </div>
    )
}

export const accountDetailsLoader = async () => {
    const currentUser = await getRequest("http://localhost:3000/currentUser/")
    const userData = await getRequestId("http://localhost:3000/users/", currentUser.id)

    return userData
}