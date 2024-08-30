import { useLoaderData } from "react-router-dom"
import { getRequest, getRequestId } from "../API/requests"
import { HistoryTab } from "../components/HistoryTab"

export const AuctionHistory = () => {
    const history = useLoaderData()

    return (
        <div className="container col-lg-12 text-center">
            {history.map((item)=>{
                return <HistoryTab auctionInfo={item}/>
            })}
        </div>
    )
}

export const auctionHistoryLoader = async () => {
    const { id } = await getRequest("http://localhost:3000/currentUser/")
    const { history } = await getRequestId("http://localhost:3000/users/", id)  

    return history
}