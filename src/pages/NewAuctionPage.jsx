import { useState } from "react"
import { Form, redirect } from "react-router-dom"
import { getRequest, postRequest } from "../API/requests"

export const NewAuctionPage = () => {
    const [cost, setCost] = useState("")
    const [buyoutCost, setBuyoutCost] = useState("")
    const [biddingCost, setBiddingCost] = useState("")

    return(
        <>
            <Form method="POST" action="/account/newAuction" className="col-lg-4 col-md-6 col-sm-5 mx-auto bg-light d-flex flex-column p-3 justify-content-center text-center rounded">
                <h3 className="display-5">New Auction</h3>
                <input type="text" className="col-lg-6 col-md-6 col-sm-6 m-2 mx-auto p-2" placeholder="Name of car" name="nameOfCar"/>
                <input type="number" className="col-lg-6 col-md-6 col-sm-6 m-2 mx-auto p-2" placeholder="Money Spent" name="cost" value={cost} onChange={(e)=>{setCost(e.target.value)}}/>
                <input type="number" className="col-lg-6 col-md-6 col-sm-6 m-2 mx-auto p-2" placeholder="Buyout Value" name="buyoutCost" value={buyoutCost} onChange={(e)=>{setBuyoutCost(e.target.value)}}/>
                <input type="number" className="col-lg-6 col-md-6 col-sm-6 m-2 mx-auto p-2" placeholder="Minimum Bidding Value" name="biddingValue" value={biddingCost} onChange={(e)=>{setBiddingCost(e.target.value)}}/>
                <p>Profit from buyout: {buyoutCost - cost > 0 ? buyoutCost - cost : ""}</p>
                <p>Profit from minimum bidding: {biddingCost - cost > 0 ? biddingCost - cost : ""}</p>
                <button className="btn btn-outline-success btn-md col-lg-6 col-md-6 col-sm-6 m-2 mx-auto">Add</button>
            </Form>
        </>
    )
}

export const newAuctionAction = async ({request}) => {
    const data = await request.formData()
    const cost = data.get("cost")
    const buyoutCost = data.get("buyoutCost")
    const biddingValue = data.get("biddingValue")
    const nameOfCar = data.get("nameOfCar")

    const currentUser = await getRequest("http://localhost:3000/currentUser/")

    if (cost == "" || nameOfCar == "" || buyoutCost == "" || biddingValue == ""){
        return {error: "All field must be provided"}
    }   

    const newAuction = {
        id: crypto.randomUUID(),
        ownerId: currentUser.id,
        nameOfCar: nameOfCar,
        buyoutCost: buyoutCost,
        biddingValue: biddingValue,
        cost: cost
    }

    try {
        await postRequest("http://localhost:3000/auctions/", newAuction)
    } catch {
        throw new Error("Error during creating auction")
    }

    return redirect("/account")
}