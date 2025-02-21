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

switch(process.argv.at(2)){
    case "add":
        tasks_obj = tools.addTask(process.argv.at(3), tasks_obj);
        break;
    case "update":        
        break;
    case "delete":
        break;
    case "mark-in-progress":
        break;
    case "mark-done":
        break;
    case "list":
        // if(process.argv.at(3) == "done")
        // else if(process.argv.at(3) == "todo")
        // else if(process.argv.at(3) == "in-progress")
        break;
    default:
        console.log("[ERROR] Invalid command.");
        throw -1;
}

tasks_str = JSON.stringify(tasks_obj);
fs.writeFileSync('tasks.json', tasks_str);
