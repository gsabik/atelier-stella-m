const Card = ({ alt, src }) => {
	return (
		<img
			alt={alt} 
			className="w-[full] md:w-[400px]" 
			src={src} 
		/>
	);
}

export default Card;