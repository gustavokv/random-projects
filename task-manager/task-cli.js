const fs = require("fs");

class Task{
    constructor(id, desc){
        this.id = id;
        this.description = desc;
        this.status = "todo";
        this.createdAt = new Date().toLocaleString("pt-br", {timezone: "America/Campo_Grande"});
        this.updatedAt = this.createdAt;
    }

    changeStatus(stat){
        this.status = stat;
    }

    changeDescription(desc){
        this.description = desc;
    }
}

if(process.argv.at(2) == undefined){
    console.log("[ERROR] You have to give a command to the task manager.");
    return;
}

const command = process.argv.at(2);
var id_counter=0, data = [];

fs.open("tasks.json", "w+", (err, file) => {
    if(err)
        throw err;
});

fs.readFile("tasks.json", (err, file) => {
    if(file.length != 0){
        data = require('./tasks.json');
        id_counter = data[data.length - 1].id;
    }
});

switch(command){
    case "add":
        addTask(process.argv.at(3));
        break;
    case "update":
        updateTask(process.argv.at(3), process.argv.at(4));
        break;
    case "delete":
        deleteTask();
        break;
    default:
        console.log("[ERROR] The command is not valid.");
        return;
}


function addTask(desc){
    let new_task = new Task(++id_counter, desc);
    const json_obj = JSON.stringify(new_task);
    data.push(json_obj);

    var data_obj = JSON.stringify(data);

    fs.writeFile("tasks.json", data_obj, (err) => {
        if(err)
            throw err;
        console.log(`Task added successfully (ID: ${new_task.id})`);
    });
}

function updateTask(id, desc){
    
}

function deleteTask(){
    
}