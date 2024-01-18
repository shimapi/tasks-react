//import { useState } from "react";
import "./Habits.css";
import { habits, days } from "./utils";

function Habits() {
	//const [count, setCount] = useState(0);
	console.log(habits);
	console.log(days);

	return (
		<section className="weekly-habits">
			<h2>Mis hábitos me hacen Grande</h2>
			<div className="habits-container">
				<ul className="days">
					<li className="habit">Hábito</li>

					{Object.keys(days).map((day) => {
						console.log("keys", day);
					})}

					{Object.values(days).map((day) => {
						console.log("values", day);
					})}

					{Object.entries(days).map(([key, value]) => {
						console.log("entries-key", [key]);
						console.log("entries-value", [value]);
					})}

					{Object.entries(days).map((day) => {
						console.log("entries", day);
					})}

					<li className="day d1">L</li>
					<li className="day d2">M</li>
					<li className="day d3">W</li>
					<li className="day">J</li>
					<li className="day">V</li>
					<li className="day">S</li>
					<li className="day">D</li>
				</ul>
				<ul className="habits h1">
					<li className="habit">👩‍💻Desarrollo mi Proyecto</li>
					<li className="day">
						<input type="checkbox" name="lunes" className="h1 d1" />
					</li>
					<li className="day">
						<input type="checkbox" name="martes" />
					</li>
					<li className="day">
						<input type="checkbox" name="miércoles" />
					</li>
					<li className="day">
						<input type="checkbox" name="jueves" />
					</li>
					<li className="day">
						<input type="checkbox" name="viernes" />
					</li>
					<li className="day">
						<input type="checkbox" name="sábado" />
					</li>
					<li className="day">
						<input type="checkbox" name="domingo" />
					</li>
				</ul>
			</div>
		</section>
	);
}

export default Habits;
