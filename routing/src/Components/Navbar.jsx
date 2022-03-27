import {Link} from "react-router-dom"

export const Navbar = ()=>{
    return <div style={{
        width : "50%",

    }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
    </div>
}