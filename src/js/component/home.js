import React, { useState } from "react";
import { Square } from "./square";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	const [tablero, setTablero] = useState(Array(9).fill(null));
	const [turnX, setTurnX] = useState(null);
	const [player, setPlayer] = useState({ name: "Rosinni", chart: "" });
	function handleClick(index) {
		// player === "X" ? setTurnX("X") : null;
		// console.log(e.target);
		console.log(index);
	}
	// console.log(tablero);

	return (
		<div className="container">
			<div className="row">
				{tablero.map((item, index) => {
					return (
						<Square
							key={index}
							index={index}
							handleClick={handleClick}
						/>
					);
				})}
			</div>
		</div>
	);
}
