import { aboutMeData } from "@/data/data";
import Card from "./Card";

const AboutMe = () => {
	return (
		<section className="flex items-center max-w-screen-2xl mx-auto md:h-screen" id="atelier">
			<div className="flex flex-col p-4 space-y-8">
				<h2 className="font-semibold text-2xl text-center underline underline-offset-4 md:text-4xl">El Atelier</h2>
				<p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
				<p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
				<div className="gap-4 grid grid-cols-1 md:grid-cols-3 place-items-center">
					{
						aboutMeData.map((data) => (
							<Card {...data} key={data.id}/>
						))
					}
				</div>
			</div>
		</section>
	);
}

export default AboutMe;