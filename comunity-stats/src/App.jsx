import { useState } from "react";
import "./App.css";
import HabitsTracker from "./HabitsTracker";
import AddHabit from "./AddHabit";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<HabitsTracker />
			<AddHabit />
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
			</div>
		</>
	);
}

export default App;
