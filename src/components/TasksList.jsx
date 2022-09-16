import React, { useState } from "react";
import TaskForm from "./TaskForm";
import Task from "./Task"
import "../styles/TasksList.css"

const TasksList = () => {

    const [tasks, setTasks] = useState([])

    const addTask = task => {
        console.log(task);
        if(task.text.trim()){
            task.text = task.text.trim();

            const updatedTasks = [task, ...tasks];
            setTasks(updatedTasks);
        }
    }

    const deleteTask = id => {
        const updatedTasks = tasks.filter(task => task.id !== id);
        setTasks(updatedTasks);
    }

    const taskFullfilled = id => {
        const updatedTasks = tasks.map(task => {
            if(task.id === id){
                task.done = !task.done;
            }
            return task;
        });
        setTasks(updatedTasks);
    }
    return(
        <>
            <TaskForm onSubmit={addTask} />
            <div className="tasks-list-container">
                {
                    tasks.map((task) => 
                        <Task 
                        key={task.id}
                        id={task.id}
                        text={task.text}
                        done={task.done}
                        taskFullfilled={ taskFullfilled }
                        deleteTask={ deleteTask }
                        />
                    )
                }
            </div>
        </>
    );
}

export default TasksList