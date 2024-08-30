import { useLoaderData } from "react-router-dom"
import { AuctionTab } from "../components/AuctionTab"
import { deleteRequest, getRequest, getRequestId, putRequest } from "../API/requests"
import { useState } from "react"

export const AuctionListPage = () => {
    const usersAuctions = useLoaderData()
    let [usersList, setUsersList] = useState(usersAuctions)

    const successfulAuction = async (price, auctionInfo) => {
        const { id } = await getRequest("http://localhost:3000/currentUser/")
        const currentUserInfo = await getRequestId("http://localhost:3000/users/", id)
        let newUser = currentUserInfo
        newUser.soldCars += 1
        newUser.earnedMoney += (price - auctionInfo.cost)

        auctionInfo.status = "success"
        auctionInfo.finalPrice = price
        newUser.history.push(auctionInfo)

        try {
            await putRequest(`http://localhost:3000/users/${id}`, newUser)
        } catch {
            throw new Error("Error during putting new data")
        }

        try {
            await deleteRequest("http://localhost:3000/auctions/", auctionInfo.id)
        } catch {
            throw new Error("Error during removing the old data")
        }

        let newAuctions = []

        usersList.map((auction)=>{
            if (auction.id != auctionInfo.id){
                newAuctions.push(auction)
            }
        })

        usersList = newAuctions
        setUsersList(usersList)

    }

    const failedAuction = async (auctionInfo) => {
        const { id } = await getRequest("http://localhost:3000/currentUser/")
        const currentUserInfo = await getRequestId("http://localhost:3000/users/", id)
        let newUser = currentUserInfo
        newUser.lostMoney += parseInt(auctionInfo.cost)
        newUser.failedAuctions += 1

        auctionInfo.status = "failure"
        newUser.history.push(auctionInfo)

        try {
            await putRequest(`http://localhost:3000/users/${id}`, newUser)
        } catch {
            throw new Error("Error during putting new data")
        }

        try {
            await deleteRequest("http://localhost:3000/auctions/", auctionInfo.id)
        } catch {
            throw new Error("Error during removing the old data")
        }

        let newAuctions = []

        usersList.map((auction)=>{
            if (auction.id != auctionInfo.id){
                newAuctions.push(auction)
            }
        })

        usersList = newAuctions
        setUsersList(usersList)
    }


    return(
        <div className="container col-lg-12 p-3">
            {usersList.map((auction)=>{
                return (<AuctionTab auctionInfo={auction} onSuccess={successfulAuction} onFailure={failedAuction}/>)
            })}
        </div>
    )
}


export const auctionListLoader = async () => {
    const auctions = await getRequest("http://localhost:3000/auctions/")
    const { id } = await getRequest("http://localhost:3000/currentUser/")
    let usersAuctions = []

    auctions.map((auction) => {
        if (auction.ownerId == id){
            usersAuctions.push(auction)
        }
    })

    return usersAuctions
}