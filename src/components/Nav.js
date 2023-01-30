import React from "react";
import { Link } from "react-router-dom";
import logoImg from "../image/logo.jpg";



 const Nav = () => {
	return (
		<nav className="">
			<ul>
				<li className="nav-item">
					<Link to="payment">Online Banking</Link>
				</li>
				<li className="nav-item">
					<Link to="/"><img src={logoImg} alt="" />brass</Link>
				</li>
			</ul>
		</nav>
	)
 }
 export default Nav