import { Link } from "react-router-dom";
import backgroundImage from "./images/backgroundimage.jpg";

export function Nav() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg" style={{ backgroundImage: `url(${backgroundImage})` }}>
                <label className="navbar-brand ms-2" style={{ fontWeight: "bold" }}>Dhruv Agarwal</label>
                <button type="button" className="navbar-toggler btn me-2" data-bs-target="#demo" data-bs-toggle="collapse">
                    <i class="fa-solid fa-bars fa-spin fa-spin-reverse"></i>
                </button>
                <div className="collapse navbar-collapse justify-content-end ms-2 me-2" id="demo">
                    <Link to="/" className="nav-link me-2"><b>Home</b></Link>|
                    <Link to="/About" className="nav-link ms-2 me-2"><b>About Me</b></Link>|
                    <Link to="/Project" className="nav-link ms-2 me-2"><b>My Projects</b></Link>|
                    <Link to="/Contact" className="nav-link ms-2 me-2"><b>Contact Me</b></Link>
                </div>
            </nav>
        </div>
    );
}
