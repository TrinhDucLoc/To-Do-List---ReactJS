import React from 'react'
import TaskItem from './TaskItem'

function TaskList({tasks, showIncomplete, setTaskStatus, removeTask, setShowIncomplete}) {
    return (
        <>
            <ul className="task-list">
                {tasks.filter(task => showIncomplete ? task.status !== 1 :  true).map((task) => (
                    // <li key={task.id} className={task.status ? "done" : ""}>
                    //     <span className="label">{task.title}</span>
                    //     <div className="actions">
                    //         <input type="checkbox" className="btn-action btn-action-done" checked={task.status} onChange={(e) => setTaskStatus(task.id, e.target.checked)}/>
                    //         <button onClick={() => removeTask(task.id)} className="btn-action btn-action-delete">&#10008;</button>
                    //     </div>
                    // </li>
                    <TaskItem task={task} setTaskStatus={setTaskStatus} removeTask={removeTask} />
                ))}
            </ul>

            {/* Filter */}        
            <div className="filter-wrapper">
                <label htmlFor="filter" className="filter-label">Show incompleted tasks only</label>
                <input type="checkbox" id="filter" checked={showIncomplete} onChange={(e) => setShowIncomplete(e.target.checked)}/>
            </div>
        </>
    )
}

export default TaskList