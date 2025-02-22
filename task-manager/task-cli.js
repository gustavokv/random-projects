const tools = require('./src/tools');
const fs = require('fs');

if(process.argv.at(2) == undefined){
    console.log("[ERROR] You have to give a command to the task manager.");
    throw -1;
}

//If the file doesn't exist, creates it
if(!fs.existsSync('tasks.json'))
    fs.openSync('tasks.json', 'w+');

var tasks_obj = [];

//Read the JSON file and convert into an object array
var tasks_str = fs.readFileSync('tasks.json', {encoding: 'utf8', flag: 'r'});
if(tasks_str.length != 0) tasks_obj = JSON.parse(tasks_str);

//Command selector
switch(process.argv.at(2)){
    case "add":
        tasks_obj = tools.addTask(process.argv.at(3), tasks_obj);
        break;
    case "update":    
        tasks_obj = tools.updateTask(process.argv.at(3), process.argv.at(4), tasks_obj);    
        break;
    case "delete":
        tasks_obj = tools.deleteTask(process.argv.at(3), tasks_obj);
        break;
    case "mark-in-progress":
    case "mark-done":
        tasks_obj = tools.markInProgress(process.argv.at(2), process.argv.at(3), tasks_obj);
        break;
    case "list":
        tools.list(process.argv.at(3), tasks_obj);
        break;
    default:
        console.log("[ERROR] Invalid command.");
        throw -1;
}

tasks_str = JSON.stringify(tasks_obj);
if(tasks_str == '[]')
    tasks_str = '';

fs.writeFileSync('tasks.json', tasks_str);
