import "./Habits.css";
import { userHabits, addHabitTitle } from "./utils";
//import { getCurrentDate } from "./helpers.jsx";

function AddHabit() {
	console.log(userHabits);

	return (
		<section className="weekly-habits">
			<h2>{addHabitTitle}</h2>
			<form name="add-habit-form" className="add-habit-form">
				<input
					type="text"
					name="new-habit-name"
					id="new-habit-name"
					className="new-habit-name"
				/>
				<input
					type="button"
					name="new-habit-button"
					value="añadir"
					className="new-habit-button"
				/>
			</form>
		</section>
	);
}

export default AddHabit;
