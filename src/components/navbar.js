import React,{useState} from 'react';
import { Link } from 'react-router-dom'; // Import Link from 'react-router-dom'
import logo from '../assets/pizzaLogo.png';
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/navbar.css';

function Navbar() {
    const [openLinks,setOpenLinks] = useState(false)

    const toggleNavbar =() =>{
        setOpenLinks(!openLinks) 

    }


    return (
        <div className="navbar">
            <div className="leftSide"id={openLinks ? "true" :"false"}>
                <img src={logo} alt="Pizza Logo" />
                <div className="hiddenLinks">
                <Link to="/">Home</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/about">About</Link>
                </div>
            </div>
            <div className="rightSide">
                <Link to="/">Home</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">contact</Link>
                <button onClick={toggleNavbar}>
                    <ReorderIcon />
                </button>
                
            </div>
        </div>
    );
}

export default Navbar;
