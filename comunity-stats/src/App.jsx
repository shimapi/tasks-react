import "./App.css";
import HabitsTracker from "./HabitsTracker";
import AddHabit from "./AddHabit";
import { getCurrentDate } from "./helpers";

function App() {
	return (
		<>
			<HabitsTracker />
			<AddHabit />
			Hoy es {getCurrentDate()}
		</>
	);
}

export default App;
