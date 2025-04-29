import React, { useState, useEffect } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [color, setColor] = useState("red");

	useEffect(() => {
		const colors = ["red", "yellow", "green"];
		let index = 0;

		const interval = setInterval(() => {
			index = (index + 1) % colors.length; // alternates between 0, 1, 2
			setColor(colors[index]);
		}, 3000); // every 3 secs
	
		return () => clearInterval(interval); // clears interval to unmount
	}, []);

	return (
		<>
		<div className="v-line"></div>
		<div className="h-line"></div>
		<div className="outerPart">
		<div className="traffic-light-container">
            <div 
			className={`light red ${color === "red" ? "selected" : ""}`}
			onClick={() => setColor("red")}></div>

				<div
				className= {`light yellow ${color === "yellow" ? "selected" : ""}`}
				onClick={() => setColor("yellow")}></div>
				<div 
				className= {`light green ${color === "green" ? "selected" : ""}`}
						onClick={() => setColor("green")}></div>

						
				
		</div></div>
		</>
	);

};

export default Home;