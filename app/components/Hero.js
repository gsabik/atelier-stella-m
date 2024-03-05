import Link from "next/link";

const Hero = () => {
	return (
		<section 
			className="flex h-screen items-center justify-center text-white" 
			style={{  
				backgroundImage: "url(/hero.jpeg)",
				backgroundAttachment: "contain",
				backgroundPosition: "center",
				boxShadow: "inset 0 0 0 1000px rgba(0, 0, 0, .6)"
				}}
			>
			<div className="flex flex-col m-4 space-y-4">
				<h1 className="font-semibold text-4xl text-center w-full sm:text-6xl md:text-8xl">Atelier Stella M</h1>
				<p className="text-lg text-center">Tejidos artesanales, telar, crochet y tricot. Decoración de hogar. Insumos</p>
				<Link className="font-semibold text-lg text-center underline underline-offset-4" href="/#atelier">Sobre El Atelier</Link>
			</div>
		</section>
	);
}

export default Hero;