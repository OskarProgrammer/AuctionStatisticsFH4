import { Link, NavLink } from "react-router-dom"

export const NavBar = () => {
    return (
        <div className="col-lg-9 col-md-9 col-sm-10 col-12 m-5 p-3 mx-auto rounded">
                <div className="container col-lg-12 row bg-light p-3 rounded-pill">
                    <div className="container col-lg-7 col-md-8 col-sm-8 d-flex gap-3">
                        <NavLink to="/account/details" className="btn btn-outline-primary btn-md fw-bold">
                            Show your profile
                        </NavLink>
                        <NavLink to="/account/newAuction" className="btn btn-outline-success btn-md fw-bold">
                            Add auction
                        </NavLink>
                        <NavLink to="/account/yourAuctions" className="btn btn-outline-dark btn-md fw-bold">
                            Your auctions
                        </NavLink>
                        <NavLink to="/account/yourHistory" className="btn btn-outline-dark btn-md fw-bold">
                            Your previous auctions
                        </NavLink>
                    </div>
                    <div className="container text-end col-lg-4 col-md-4 col-sm-2">
                        <Link to="/account/logOut" className="btn btn-outline-danger btn-md fw-bold">
                            Log Out
                        </Link>
                    </div>
                </div>
        </div>
    )
}