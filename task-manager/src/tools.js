const fs = require("fs");

const addTask = (desc, tasks_obj) => {
    var last_id=1;

    if(tasks_obj.length !== 0)
        last_id = tasks_obj[tasks_obj.length - 1].id + 1;

    const task = {
        id: last_id,
        description: desc,
        status: "todo",
        createdAt: new Date().toLocaleString("pt-br", {timezone: "America/Campo_Grande"}),
        updatedAt: new Date().toLocaleString("pt-br", {timezone: "America/Campo_Grande"})
    };
    
    tasks_obj.push(task);
    return tasks_obj;
}

const updateTask = (id, desc) => {

}

const deleteTask = (id) => {

}

module.exports = {
    addTask, updateTask, deleteTask
};