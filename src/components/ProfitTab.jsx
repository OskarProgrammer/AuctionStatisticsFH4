export const ProfitTab = (props) => {
    const {profit, messageSuccess, messageDanger } = props

    return (
        <div className={`container bg-${profit > 0 ? "success" : "danger"} col-lg-10 text-center border border-${profit > 0 ? "success" : "danger"} border-5 rounded-pill my-3`}>
                    {profit > 0 ?   <p className="text-center text-dark fs-3 my-auto p-2">{messageSuccess} {profit}</p> : 
                                    <p className="text-center text-light fs-3 my-auto p-2">{messageDanger}</p>}
        </div>
    )
}