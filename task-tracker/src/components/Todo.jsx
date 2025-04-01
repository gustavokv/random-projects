import {useState} from 'react'

const Todo = () => {
    const [taskList, setTaskList] = useState([])
    const [task, setTask] = useState('')

    const handleAddTask = () => {

    }

    const handleDeleteTask = () => {

    }

    const handleGoUpTask = () => {

    }

    const handleGoDownTask = () => {

    }
    
    return (
        <div>
            <h1>TO-DO LIST</h1>

            <input type='text' placeholder='Enter a task' />
            <button onClick={handleAddTask}>Add</button>

            <ul>
                {taskList.map((task, index) => (
                    <section>
                        <div id='isDone'></div>
                        <li key={index}>{task.description}</li>
                        <button onClick={handleDeleteTask}>Delete</button>
                        <button onClicK={handleGoUpTask}>👆</button>
                        <button onClicK={handleGoDownTask}>👇</button>
                    </section>
                ))}                    
            </ul>
        </div>    
    );
}

export default Todo