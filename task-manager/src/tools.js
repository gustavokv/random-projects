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

const updateTask = (id, desc, tasks_obj) => {
    index = tasks_obj.findIndex(x => x.id == id);

    if(tasks_obj.length === 0 || index === -1){
        console.log('[ERROR] Cannot find this ID.');
        throw -1;
    }

    tasks_obj[index].description = desc;
    tasks_obj[index].updatedAt = new Date().toLocaleString("pt-br", {timezone: "America/Campo_Grande"});

    return tasks_obj;
}

const deleteTask = (id, tasks_obj) => {
    index = tasks_obj.findIndex(x => x.id == id);

    if(tasks_obj.length === 0 || index === -1){
        console.log('[ERROR] Cannot find this ID.');
        throw -1;
    }

    if(index == 0) tasks_obj.shift();
    else tasks_obj.splice(index, index);

    return tasks_obj;
}

const markInProgress = (stat, id, tasks_obj) => {
    index = tasks_obj.findIndex(x => x.id == id);

    if(tasks_obj.length === 0 || index === -1){
        console.log('[ERROR] Cannot find this ID.');
        throw -1;
    }

    if(stat == 'mark-in-progress')
        tasks_obj[index].status = 'in-progress';
    else
        tasks_obj[index].status = 'done';

    tasks_obj[index].updatedAt = new Date().toLocaleString("pt-br", {timezone: "America/Campo_Grande"});

    return tasks_obj;
}

const list = (type, tasks_obj) => {
    if(type == undefined){
        console.log(tasks_obj);
        return;
    }

    if(type != 'done' && type != 'todo' && type != 'in-progress'){
        console.log('[ERROR] This status does not exist!');
        throw -1;
    }

    const result = tasks_obj.filter((elem) => elem.status == type);
    console.log(result);
}

module.exports = {
    addTask, updateTask, deleteTask, markInProgress, list
};