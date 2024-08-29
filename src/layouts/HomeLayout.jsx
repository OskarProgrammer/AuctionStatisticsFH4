import { Outlet } from "react-router-dom"


const HomeLayout = () => {

    return (
        <>
            <header>
                <h1 className="mx-auto mt-5 display-4 col-lg-6 col-md-6 col-sm-6 col-10 text-center fw-bold p-5 bg-light rounded">
                        Auction statistics manager
                </h1>
            </header>
            <Outlet/>
        </>
    )
}

export default HomeLayout