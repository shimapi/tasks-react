//import { useState } from "react";
import "./Habits.css";
import { habits, days, tableName, weeklyHabits } from "./utils";
let habitKey;

function Habits() {
	//const [count, setCount] = useState(0);
	console.log(habits);
	console.log(days);

	return (
		<section className="weekly-habits">
			<h2>{weeklyHabits}</h2>
			<div className="habits-container">
				<table className="habits">
					<thead>
						<tr className="days">
							<td className="habit">{tableName}</td>
							{Object.entries(days).map(([key, value]) => {
								console.log("entries-key", key); //entries-key ['d1']
								console.log("entries-value", value); //entries-value ['Lunes']
								return (
									<td className={`day ${key}`} key={key}>
										{value.slice(0, 1)} {/*takes the first letter of the day*/}
									</td>
								);
							})}
						</tr>
					</thead>
					<tbody>
						{Object.entries(habits).map(([key, value]) => {
							habitKey = key;

							return (
								<tr className="habits" key={key}>
									<td className={`habit ${key}`} key={key}>
										{value}
									</td>
									{Object.entries(days).map(([key, value]) => {
										console.log(habitKey);
										return (
											<td className={`day`} key={key}>
												<input
													type="checkbox"
													name={value}
													className={`${habitKey} ${key}`}
												/>
											</td>
										);
									})}
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</section>
	);
}

export default Habits;
