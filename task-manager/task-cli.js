const fs = require("fs");

if(process.argv.at(2) == undefined){
    console.log("[ERROR] You have to give a command to the task manager.");
    return;
}

switch(process.argv.at(2)){
    case "add":
        break;
    case "update":
        break;
    case "delete":
        break;
    default:
        console.log("[ERROR] Invalid command.");
        return;
}