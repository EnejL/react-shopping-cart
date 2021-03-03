import React, { useState } from "react";
import Modal from './Modal/Modal';

export const Navbar = ({user}) => {
	const [isActive, setActive] = useState("false");

	const handleToggle = () => {
		setActive(!isActive);
		console.log("clicked")
	};

	const [show, setShow] = useState(false);
	const closeModalHandler = () => setShow(false);

	return (
		<div className="navbar navbar-inverse navbar-fixed-top">
			<div className="container">
				<div className="navbar-header">
					<button type="button" className="navbar-toggle" onClick={handleToggle}>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
					</button>
				</div>
				<div className={`navbar-collapse ${isActive ? "collapse" : ""}`}>
					<ul className="nav navbar-nav">
						<li><a href="/">Home</a></li>
						<li><a href="#" onClick={() => setShow(true)}>Buy</a></li>
						<Modal show={show} close={closeModalHandler} />
					</ul>
					<span className="navbar-right navbar-text">{user?.balance} gold</span>
				</div>
			</div>
		</div>
	);
};