import {useState} from 'react'

const Todo = () => {
    const [taskList, setTaskList] = useState([])
    const [task, setTask] = useState('')

    const handleTask = (e) => {
        setTask(e.target.value)
    }

    const handleAddTask = (e) => {
        if(task.trim() !== ''){
            e.preventDefault()
            setTaskList(tl => ([...tl, task]))
            setTask('')
        }
    }

    const handleDeleteTask = (i) => {
        const updatedTasks = taskList.filter((_, index) => index !== i)
        setTaskList(updatedTasks)
    }

    const handleGoUpTask = (i) => {
        if(i > 0){
            const tempTasks = [...taskList]
            const aux = tempTasks[i]

            tempTasks[i] = tempTasks[i-1]
            tempTasks[i-1] = aux
             
            setTaskList(tempTasks)
        }
    }

    const handleGoDownTask = (i) => {
        if(i < taskList.length-1){
            const temp = [...taskList]
            const aux = taskList[i]

            temp[i] = temp[i+1]
            temp[i+1] = aux
            
            setTaskList(temp)
        }
    }
    
    return(
        <div className='border-1 border-gray-700 rounded-[2vw] text-center min-h-60'>
            <h1 className='text-[50px] px-8 pb-5 pt-5 text-amber-50 font-bold'>TO-DO LIST</h1>

            <section className='mb-8'>
                <input type='text' placeholder='Enter a task' value={task} onChange={handleTask} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm font-bold rounded-lg focus:outline-none focus:border-purple-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark-placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500'/>
                <button id='task-btn' onClick={handleAddTask} className='ml-4 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:outline-none shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-bold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>Add</button>
            </section>

            <ul className='max-w-md divide-y divide-gray-200 dark:divide-gray-700'>
                {taskList.map((task, index) => (
                    <li key={index} className='pt-3 pb-3 ml-4 mr-4'>
                        <div className='flex items-center space-x-4 rtl:space-x-reverse'>
                            <span className='flex-1 min-w-0 text-lg font-bold text-gray-900 truncate dark:text-white'>{task}</span>
                            <button onClick={() => handleDeleteTask(index)} className='inline-flex items-center text-sm font-semibold text-gray-900 dark:text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:outline-none shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 rounded-lg px-4 py-2 text-center'>Delete</button>
                            <button onClick={() => handleGoUpTask(index)} className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:outline-none shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-semibold rounded-lg text-sm px-4 py-2 text-center'>👆</button>
                            <button onClick={() => handleGoDownTask(index)} className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:outline-none shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-semibold rounded-lg text-sm px-4 py-2 text-center'>👇</button>
                        </div>
                    </li>
                ))}                    
            </ul>
        </div>    
    );
}

export default Todo