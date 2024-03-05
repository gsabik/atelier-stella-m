import Link from "next/link";

const LINKS = [
	{
		label: "Productos",
		route: "/products"
	},
	{
		label: "Guías",
		route: "/guides"
	}
];

const NavLinks = () => {
	return (
			<>
				<li>
					<Link className="font-medium text-lg" href="/#atelier">El Atelier</Link>
				</li>
				{
					LINKS.map(({ label, route }) => (
						<li key={route}>
							<Link className="font-medium text-lg" href={route}>{label}</Link>
						</li>
					))
				}
			</>
	);
}

export default NavLinks;