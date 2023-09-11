import logo from '../img/logo.png'

function Navbar() {
    return (
        <nav className="mc navbar">
            <div className="mc-container">
                <img src={logo} className="logo" alt ='...'/>
                <span className="navbar-brand mb-0 h1">React Pizzeria</span>
            </div>
        </nav>
    )
}

export default Navbar;