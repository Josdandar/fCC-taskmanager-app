import React, { useState } from "react";
import "../styles/TaskForm.css"
import { v4 as uuidv4 } from "uuid"

const TaskForm = (props) => {

    const [input, setInput] = useState("");

    const handleChange = e => {
        setInput(e.target.value);
        console.log(e.target.value)
    }

    const handleSend = e => {
        e.preventDefault();
        console.log("Sending form");

        const newTask = {
            id: uuidv4(),
            text: input,
            done: false
        }

        props.onSubmit(newTask);
    }

    return (
        <form className="task-form"
        onSubmit={ handleSend }>
            <input
            className="task-input"
            type="text"
            placeholder="Input a Task"
            name="text"
            onChange={ handleChange }
            />
            <button className="task-button">
                Add a Task
            </button>
        </form>
    )
}

export default TaskForm