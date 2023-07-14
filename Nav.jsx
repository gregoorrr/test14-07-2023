import { Link } from "react-router-dom"
function Nav(){
    return (
        <nav>
            <Link to="/Home">Home</Link>
            <Link to="/Characters">Film</Link>
        </nav>
    )
}

export default Nav