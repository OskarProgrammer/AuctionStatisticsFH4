import { ProfitTab } from "./ProfitTab"

export const AuctionTab = (props) => {
    const auction = props.auctionInfo 
    const profitFromBuyout = auction.buyoutCost - auction.cost
    const profitFromMinimalBidding = auction.biddingValue - auction.cost

    return(
        <div className="container row col-lg-10 text-center bg-light mx-auto p-5 rounded my-3">
            <h2 className="display-4">Car : {auction.nameOfCar}</h2>
            <p className="fs-5">Auction id: {auction.id}</p>
            <div className="container col-lg-6 my-3">
                <p className="text-danger fs-4 fw-bold">Cost: {auction.cost}</p>
            </div>
            <div className="container col-lg-6 my-3">
                <p className="text-success fs-4 fw-bold">Buyout cost: {auction.buyoutCost}</p>
                <p className="text-success fs-4 fw-bold">Minimal bidding cost: {auction.biddingValue}</p>
            </div>

            <ProfitTab profit={profitFromBuyout} messageDanger="No profit from buyout" messageSuccess="Profit from buyout: "/>
            <ProfitTab profit={profitFromMinimalBidding} messageDanger="No profit from minimal bidding" messageSuccess="Profit from minimal bidding: "/>

            <div className="container row d-flex justify-content-between pt-4">
                <button className="btn btn-lg btn-outline-success col-lg-3" onClick={()=>{props.onSuccess(auction.buyoutCost, auction)}}>Sold by buyout</button>
                <button className="btn btn-lg btn-outline-success col-lg-3" onClick={()=>{const price = prompt("What was the bidding amount final? ");props.onSuccess(price, auction)}}>Sold by bidding</button>
                <button className="btn btn-lg btn-outline-danger col-lg-3" onClick={()=>{props.onFailure(auction)}}>Not sold</button>
            </div>

        </div>
    )
}