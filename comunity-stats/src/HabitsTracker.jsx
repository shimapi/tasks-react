import "./Habits.css";
import { habitsBasic, days, tableName, weeklyHabits } from "./utils";
let habitKey;

function HabitsTracker() {
	//console.log(habitsBasic);
	//console.log(days);

	return (
		<section className="weekly-habits">
			<h2>{weeklyHabits}</h2>
			<div className="habits-container">
				<table className="habits">
					<thead>
						<tr className="days">
							<td className="habit">{tableName}</td>
							{Object.entries(days).map(([key, value]) => {
								return (
									<td className={`day ${key}`} key={key}>
										{value.slice(0, 1)} {/*takes the first letter of the day*/}
									</td>
								);
							})}
						</tr>
					</thead>
					<tbody>
						{Object.entries(habitsBasic).map(([key, value]) => {
							habitKey = key;

							return (
								<tr className="habits" key={key}>
									<td className={`habit ${key}`} key={key}>
										{value}
									</td>
									{Object.entries(days).map(([key]) => {
										return (
											<td className={`day`} key={key}>
												<input
													type="checkbox"
													name={`${habitKey}-${key}`}
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

export default HabitsTracker;
