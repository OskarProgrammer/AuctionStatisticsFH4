import { Link } from "react-router-dom"

const NavNotLogged = () => {
    return (<div className="container col-lg-4 col-md-6 mt-5 bg-light rounded fs-5 text-center d-flex justify-content-between p-3">
        <Link to="/login" className="btn btn-outline-dark btn-lg mx-5">
            Sign in
        </Link>
        <Link to="/register" className="btn btn-outline-dark btn-lg mx-5">
            Sign up
        </Link>
    </div>)
}

export default NavNotLogged