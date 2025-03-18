#Task Tracker CLI

This CLI app is a simple task tracker where you can add new tasks, mark your tasks 
with to do, in progress and done, delete tasks, update them and list tasks by their status.

Any new task added is defined by "todo" status.

To use this app, you have to type "node ./task-cli.js" on your terminal, followed 
by one of those commands:

1. Add a new task: When adding a new task, it will be given a ID,
starting by 1, in ascending order.
    node ./task-cli.js add "<random task description>"
    
2. Update a task
    node ./task-cli.js update <ID> "<random task description>"
    
3. Delete a task
    node ./task-cli.js delete <ID>
    
4. Mark a task as in progress or done
    node ./task-cli.js mark-in-progress <ID>
    node ./task-cli.js mark-done <ID>
    
5. List all tasks
    node ./task-cli.js list
    
6. List tasks by status
    node ./task-cli.js list done
    node ./task-cli.js list todo
    node ./task-cli.js list in-progress
    

    
    

        
