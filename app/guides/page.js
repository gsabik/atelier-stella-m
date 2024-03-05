import { guidesData } from "@/data/data"

const GuidesPage = () => {
	return (
		<div className="max-w-screen-2xl mx-auto min-h-screen">
			<div className="space-y-8 m-4">
				<h2 className="font-semibold pb-4 text-4xl text-center underline underline-offset-4">Guías de tejido</h2>
				<p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
				<div className="flex flex-row">
					{
						guidesData.map(({ id, title, alt, src, url }) => (
							<div className="flex flex-col space-y-2" key={id}>
								<img alt={alt} className="w-full md:w-[300px]" src={src}/>
								<h3 className="font-medium text-[#39493e]">{title}</h3>
								<a className="underline underline-offset-4" href={url} target="_blank">¡Encontrala en Empretienda!</a>
							</div>
						))	
					}
				</div>
			</div>
		</div>
	)
}

export default GuidesPage;