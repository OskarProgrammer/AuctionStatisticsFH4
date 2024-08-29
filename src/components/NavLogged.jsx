import { Link } from "react-router-dom"

const NavLogged = () => {
    return (<div className="container col-lg-4 col-md-6 mt-5 bg-light rounded fs-5 text-center d-flex justify-content-end p-3">
        <Link to="/logOut" className="btn btn-outline-dark btn-lg me-0 mx-5">
            LogOut
        </Link>
    </div>)
}

export default NavLogged