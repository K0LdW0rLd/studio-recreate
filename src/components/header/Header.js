import React from "react";
import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

export default function Header() {
	const activeStyle = { color: "#3293A8" };
	return (
		<Nav variant="tabs" className="justify-content-center" activeKey="/">
			<Nav.Item>
				<Nav.Link href="/">Home</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link href="/list">Movie List</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link href="/random">Random</Nav.Link>
			</Nav.Item>
		</Nav>
	);
}
