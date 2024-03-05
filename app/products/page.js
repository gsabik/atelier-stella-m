import Link from "next/link";

const ProductsPage = () => {
	return (
		<div className="flex flex-col h-[95vh] items-center justify-center m-4 space-y-4">
			<h3 className="text-4xl">Estamos trabajando en esta sección. Próximamente estará disponible!</h3>
			<Link className="underline underline-offset-4" href="/">Ir al inicio</Link>
		</div>
	);
}

export default ProductsPage;