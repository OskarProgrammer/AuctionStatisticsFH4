export const HistoryTab = ( props ) => {

    const auction = props.auctionInfo

    return(
        <div className={`container ${auction.status == "success" ? "bg-success": "bg-danger"} text-white rounded border-dark border-2 p-3 my-3`}>
            <h2 className="display-4 fw-bold">{auction.nameOfCar}</h2>
            {auction.status == "success" ? <p className="fs-4">Sold for {auction.finalPrice}</p> : <p className="fs-4">Not sold</p>}
            {auction.status != "failure" ? (auction.finalPrice == auction.buyoutCost ? <p className="fs-4">Method of purchase: buyout</p> 
            : <p className="fs-4">Method of purchase: bidding</p>) : ""}
        </div>
    )
}