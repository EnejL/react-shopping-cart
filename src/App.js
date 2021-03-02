import React, { useState, useEffect } from "react";
import { service } from "./service";
import { Navbar } from "./components/Navbar";
import { Stock } from "./components/Stock";
import { Footer } from "./components/Footer";

function App() {

	const [user, setUser] = useState(null);
	const [stock, setStock] = useState([]);

	useEffect(() => {
		service.getUser()
			.then((user) => {
				setUser(user);
			})
			.then(service.list)
			.then((items) => {
				setStock(items);
			});
	}, []);

	return (
		<>
			<Navbar user={user} />
			<div className="container body-content">
				<h2>Hello, {user?.login}</h2>
				<p>
					Have a nice day
				</p>
				<Stock stock={stock} />
				<Footer />
			</div>
		</>
	);
}

export default App;
