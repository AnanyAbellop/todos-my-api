import React, { Component, useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const UndoneTasks = ({ tasks }) => {
	const { store, actions } = useContext(Context);
	return tasks.map((task, index) => {
		return (
			<div className="container" key={index}>
				<div className="row">
					<div className="col-6">
						<label>{task.label}</label>
						<label className="btn-light" onClick={() => actions.deleteTodos(index)}>
							{"X"}
						</label>
					</div>
				</div>
			</div>
		);
	});
};

UndoneTasks.propTypes = {
	tasks: PropTypes.array
};
