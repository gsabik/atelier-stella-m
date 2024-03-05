import Link from "next/link";

const Footer = () => {
	return (
		<footer className="bg-[#39493e] bottom-0 text-white py-16">
			<div className="flex flex-col items-center justify-around max-w-screen-2xl mx-auto md:flex-row">
				<div className="flex text-center justify-center m-4 md:text-left">
					<ul>
						<li>
							<Link className="hover:text-gray-200 transition-all" href="/">El Atelier</Link>
						</li>
						<li>
							<Link className="hover:text-gray-200 transition-all" href="">Productos</Link>
						</li>
						<li>
							<Link className="hover:text-gray-200 transition-all" href="/guides">Guías</Link>
						</li>
					</ul>
				</div>
				<div className="flex text-center justify-center py-4 md:text-left">
					<ul>
						<p className="font-semibold underline underline-offset-4 pb-2">Contacto</p>
						<li>
							<a className="hover:text-gray-200 transition-all" href="mailto:atelier.stellam@gmail.com">atelier.stellam@gmail.com</a>
						</li>
						<li className="hover:text-gray-200 transition-all">1132332228</li>
					</ul>
				</div>
				<div className="flex text-center justify-center py-4 md:text-left">
					<ul>
						<p className="font-semibold underline underline-offset-4 pb-2">Redes</p>
						<li>
							<a className="hover:text-gray-200 transition-all" href="https://www.instagram.com/atelier.stella.m/" target="_blank">Instagram</a>
						</li>
						<li>
							<a className="hover:text-gray-200 transition-all" href="https://www.facebook.com/atelier.stella.m" target="_blank">Facebook</a>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
}

export default Footer;