import React, { useContext, useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import { UndoneTasks } from "../component/undoneTasks";
export const Task = () => {
	const { store, actions } = useContext(Context);
	const [newTask, setnewTask] = useState({
		done: false,
		label: ""
	});
	return (
		<div className="text-center mt-5">
			<div className="row justify-content-center">
				<div className="col-8">
					<h1>{"Go to work !"}</h1>
					<a href="#" className="btn btn-success" onClick={() => actions.getTodos()}>
						{"Fetch"}
					</a>
				</div>
			</div>
			<div className="row justify-content-center">
				<div className="col-8">
					<input
						placeholder="What needs to be done"
						type="text"
						name="Tasks"
						value={newTask.label}
						onChange={e =>
							setnewTask({
								...newTask,
								label: e.target.value
							})
						}
						onKeyPress={e => {
							if (event.keyCode == 13) {
								actions.addTask(newTask);
							}
						}}
					/>
				</div>
			</div>
			<div className="row justify-content-center">
				<div className="col-8">
					<UndoneTasks tasks={store.todos} />
				</div>
			</div>
		</div>
	);
};
