# Task Tracker CLI

This CLI app is a simple task tracker where you can add new tasks, mark your tasks<br> 
with to do, in progress and done, delete tasks, update them and list tasks by their status.<br>

Any new task added is defined by "todo" status.<br>

To use this app, you have to type "node ./task-cli.js" on your terminal, followed<br>
by one of those commands:

1. Add a new task: When adding a new task, it will be given a ID,<br>
starting by 1, in ascending order.<br>
    node ./task-cli.js add "random task description"<br>
    
2. Update a task<br>
    node ./task-cli.js update ID "random task description"<br>
    
3. Delete a task<br>
    node ./task-cli.js delete ID<br>
    
4. Mark a task as in progress or done<br>
    node ./task-cli.js mark-in-progress ID<br>
    node ./task-cli.js mark-done ID<br>
    
5. List all tasks<br>
    node ./task-cli.js list<br>
    
6. List tasks by status<br>
    node ./task-cli.js list done<br>
    node ./task-cli.js list todo<br>
    node ./task-cli.js list in-progress<br>
