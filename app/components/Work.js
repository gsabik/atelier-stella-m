import { workData } from "@/data/data";
import Card from "./Card";

const Work = () => {
	return (
		<div className="max-w-screen-2xl mx-auto pb-16">
			<div className="space-y-8 m-4">
				<h2 className="font-semibold pb-4 text-2xl text-center underline underline-offset-4 md:text-4xl">Trabajos</h2>
				<p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
				<div className="gap-4 grid grid-cols-1 md:grid-cols-3 place-items-center">
					{
						workData.map((data) => (
							<Card {...data} key={data.id}/>
						))
					}
				</div>
			</div>
		</div>
	);
}

export default Work;