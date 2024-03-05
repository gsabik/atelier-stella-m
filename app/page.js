import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Sentence from "./components/Sentence";
import Work from "./components/Work";

const HomePage = () => {
	return (
		<div className="space-y-8">
			<Hero/>
			<AboutMe/>
			<Sentence/>
			<Work/>
		</div>
	);
}

export default HomePage;