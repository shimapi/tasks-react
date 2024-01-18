import "./Habits.css";
import { userHabits, addHabitTitle } from "./utils";
import { getCurrentDate } from "./helpers.jsx";

function AddHabit() {
	console.log(userHabits);

	return (
		<section className="weekly-habits">
			<h2>{addHabitTitle}</h2>
			{getCurrentDate()}
			<form name="add-habit-form">
				<input type="text" name="new-habit-name" id="new-habit-name" />
				<input type="button" name="new-habit-button" value="añadir" />
			</form>
		</section>
	);
}

export default AddHabit;
