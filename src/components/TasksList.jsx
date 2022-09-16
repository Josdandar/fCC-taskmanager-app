import React, { useState } from "react";
import TaskForm from "./TaskForm";
import Task from "./Task"
import "../styles/TasksList.css"

const TasksList = () => {

    const [tasks, setTasks] = useState([])

    return(
        <>
            <TaskForm />
            <div className="tasks-list-container">
                {
                    tasks.map((task) => 
                        <Task 
                        text={task.text}
                        done={task.done}
                        />
                    )
                }
            </div>
        </>
    );
}

export default TasksList