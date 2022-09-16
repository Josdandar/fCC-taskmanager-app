import React from "react";
import "../styles/Task.css"
import { AiOutlineCloseCircle } from "react-icons/ai"

const Task = ( { id, text, done, taskFullfilled, deleteTask } ) => {
    return (
        <div className={done ? "task-container done" : "task-container"}>
            <div className="task-text"
            onClick={()=> taskFullfilled(id)}>
                {text}
            </div>
            <div className="task-icons-container"
                 onClick={() => deleteTask(id)}>
                <AiOutlineCloseCircle className="task-icon" />
            </div>
        </div>
    )
}

export default Task