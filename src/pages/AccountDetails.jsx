import { useLoaderData } from "react-router-dom"
import { getRequest, getRequestId } from "../API/requests"

export const AccountDetails = () => {
    const user = useLoaderData()


    const successAuctions = parseInt(user.soldCars)
    const failedAuctions = parseInt(user.failedAuctions)
    const allAuctions = parseInt(user.allAuctions)

    return (
        <div className="container col-lg-6 col-md-6 bg-light my-5 py-1 rounded">
            <h1 className="display-4 text-center fw-bold">{user.name}</h1>
            <div className="container col-lg-6 text-center text-light shadow-lg rounded bg-dark py-3 my-3">
                <h4 className="text-success">Sold cars: {successAuctions}</h4> 
                <h4 className="text-danger">Failed auctions: {failedAuctions}</h4>
                <h4>All auctions: {allAuctions}</h4>
            </div>
            <div className="container col-lg-12 fs-4 d-flex flex-column text-center">
                <p>Spent money: {parseInt(user.spentMoney)}</p>
                <p>Lost money: {parseInt(user.lostMoney)}</p>
                <p>Earned money: {parseInt(user.earnedMoney)}</p>
            </div>
        </div>
    )
}

export const accountDetailsLoader = async () => {
    const currentUser = await getRequest("http://localhost:3000/currentUser/")
    const userData = await getRequestId("http://localhost:3000/users/", currentUser.id)

    return userData
}