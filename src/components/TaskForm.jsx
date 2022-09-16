import React from "react";
import "../styles/TaskForm.css"

const TaskForm = (props) => {
    return (
        <form className="task-form">
            <input
            className="task-input"
            type="text"
            placeholder="Input a Task"
            name="text"
            />
            <button className="task-button">
                Add a Task
            </button>
        </form>
    )
}

export default TaskForm