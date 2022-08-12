import React, {useState} from "react";

const Todolist = () => {

    const [value, setValue] = useState('');
    const [todo, setTodo] = useState([]);

    const addTask = () => {
        if(value !== '' && todo !== ''){
            setTodo([...todo, value]);
            setValue('');
        }
    }

    return(
        <div className="todolist">
            <h1>To-Do List App</h1>
            <form>
                <label>Write Your Tasks : </label>
                <input
                type="text"
                id="task"
                placeholder="Enter Your Task"
                onChange={(e) => setValue(e.target.value)}
                value={value}
                />
                <button type="button" onClick={addTask}>Add Task</button>
            </form>
            <div className="list">
                <ul>
                    {todo.map((item) => {
                        return <li>Today's Task : {item}</li>
                    })}
                </ul>
            </div>
        </div>
    );
}
export default Todolist;