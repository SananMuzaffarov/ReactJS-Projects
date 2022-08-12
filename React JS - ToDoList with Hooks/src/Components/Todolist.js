import React, { useState } from "react";
import Task from "./Task";

const Todos = () => {

    const [taskName, setTaskName] = useState("");
    const [taskList, setTaskList] = useState([]);

    const addTask = () => {
        setTaskList([...taskList, {task: taskName}])
        setTaskName('')
    }

    return(
        <div className="app">
            <h1>To-Do-List App</h1>
            <form>
                <label>Task Name: </label>
                <input type="text" placeholder="Enter Your Task" id="task" onChange={(e) => {
                    setTaskName(e.target.value)
                }} />
                <button type="button" onClick={addTask}>Add</button>
            </form>
            {taskList.map((task) => {
                return <Task taskName={task.task}/>
            })}
        </div>
    );
}
export default Todos;