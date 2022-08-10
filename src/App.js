import React, {useState} from 'react'
import "./App.css"

function App() {
    const [tasks, setTasks] = useState([
        {id: "task_1", title: "Learn JS", status: 0},
        {id: "task_2", title: "Code a Todo List", status: 1}
    ])

    const [showIncomplete, setShowIncomplete] = useState(true)
    
    const [newTask, setNewTask] = useState("")
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(newTask) {
            const task = {
                id: Date.now(),
                title: newTask,
                status: 0
            }
            setTasks([...tasks, task]);
            setNewTask("");
        }
    }

    const handleInputChange = (e) => {
        setNewTask(e.target.value);
    }

    const setTaskStatus = (taskId, status) => {
        setTasks(tasks.map(task => {
            if(task.id === taskId){
                return {...task, status: status ? 1 : 0}
            }
            return task;
        }));
    }

    const removeTask = (taskId) => {
        setTasks(tasks.filter((task) => task.id !== taskId))
    }

    return (
        <div className="container">
            <div className="title">Todo List
                <span>Get one item done at a time.</span>
            </div>
            {/* Task List */}
            <ul className="task-list">
                {tasks.filter(task => showIncomplete ? task.status !== 1 :  true).map((task) => (
                    <li key={task.id} className={task.status ? "done" : ""}>
                        <span className="label">{task.title}</span>
                        <div className="actions">
                            <input type="checkbox" className="btn-action btn-action-done" checked={task.status} onChange={(e) => setTaskStatus(task.id, e.target.checked)}/>
                            <button onClick={() => removeTask(task.id)} className="btn-action btn-action-delete">&#10008;</button>
                        </div>
                    </li>
                ))}
            
            </ul>

            {/* Filter */}
            <div className="filter-wrapper">
                <label htmlFor="filter" className="filter-label">Show incompleted tasks only</label>
                <input type="checkbox" id="filter" checked={showIncomplete} onChange={(e) => setShowIncomplete(e.target.checked)}/>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="form">
                <label htmlFor="newitem">Add to the todo list</label>
                <input type="text" id="newitem" value={newTask} onChange={handleInputChange} />
                <button type="submit">Add Item</button>
            </form>
        </div>
    )
}

export default App