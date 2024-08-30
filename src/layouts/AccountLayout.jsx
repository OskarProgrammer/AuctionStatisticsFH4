import { Link, NavLink, Outlet } from "react-router-dom"

export const AccountLayout = () => {

    return (
        <>
            <div className="bg-light col-lg-6 col-md-9 col-sm-10 col-12 m-5 p-3 mx-auto rounded">
                <h1 className="display-4 text-center fst-italic py-3">
                    Account Info
                </h1>
                <div className="container col-lg-12 row">
                    <div className="container col-lg-7 col-md-8 col-sm-8">
                        <NavLink to="/account/details" className="btn btn-outline-primary btn-md m-1">
                            Show your profile
                        </NavLink>
                        <NavLink to="/account/newAuction" className="btn btn-outline-success btn-md">
                            Add auction
                        </NavLink>
                    </div>
                    <div className="container text-end col-lg-4 col-md-4 col-sm-2">
                        <Link to="/account/logOut" className="btn btn-outline-danger btn-md">
                            Log Out
                        </Link>
                    </div>
                </div>
            </div>

            <Outlet/>
        </>
    )
}