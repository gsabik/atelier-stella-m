"use client"

import { useState } from "react"; 
import Link from "next/link";
import { X, Menu } from "lucide-react";
import NavLinks from "./NavLinks";

const NavBar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleNavbar = () => {
		setIsOpen(!isOpen);
	}

	return (
		<header className="shadow py-2">
			<nav className="flex flex-row flex-wrap items-center justify-around m-4">
				<h1 className="font-medium text-4xl">
					<Link href="/">Atelier Stella M</Link>
				</h1>
				<ul className="hidden md:flex flex-row space-x-6">
					<NavLinks/>
				</ul>
				<div className="md:hidden pt-2">
					<button onClick={toggleNavbar}>{isOpen ? <X/> : <Menu/>}</button>
				</div>
				{
					isOpen 
					&&
					<ul className="flex flex-col items-start pt-6 pl-4 w-full">
						<NavLinks/>
					</ul>
				}
			</nav>
		</header>
	);
}

export default NavBar;