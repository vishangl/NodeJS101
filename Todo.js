const fs = require('fs');

const fileName = 'Todo.txt';

if (!fs.existsSync(fileName)) {
    fs.writeFileSync(fileName, '', 'utf8');
}

function readTasks() {
    const content = fs.readFileSync(fileName, 'utf8');
    return content.split('\n').filter(task => task.trim() !== '');
}

function writeTasks(tasks) {
    fs.writeFileSync(fileName, tasks.join('\n') + '\n', 'utf8');
}

const command = process.argv[2];
const args = process.argv.slice(3);

switch (command) {
    case 'add': {
        const task = args.join(' ');
        if (!task.trim()) {
            console.log('⚠️ Error: Task description cannot be empty.');
        } else {
            const tasks = readTasks();
            tasks.push(task);
            writeTasks(tasks);
            console.log('✅ Todo added!');
        }
        break;
    }

    case 'list': {
        const tasks = readTasks();
        if (tasks.length === 0) {
            console.log('📝 Your todo list is empty. Add some tasks to get started!');
        } else {
            console.log('📋 Here are your tasks:');
            tasks.forEach((task, index) => {
                console.log(`${index + 1}. ${task}`);
            });
        }
        break;
    }

    case 'delete': {
        const index = parseInt(args[0], 10);
        if (isNaN(index) || index < 1) {
            console.log('⚠️ Error: Invalid task number. Please provide a valid number.');
        } else {
            const tasks = readTasks();
            if (index > tasks.length) {
                console.log('⚠️ Error: Task number does not exist.');
            } else {
                const removedTask = tasks.splice(index - 1, 1);
                writeTasks(tasks);
                console.log(`🗑️ Todo deleted: "${removedTask}"`);
            }
        }
        break;
    }

    case 'mark': {
        const index = parseInt(args[0], 10);
        if (isNaN(index) || index < 1) {
            console.log('⚠️ Error: Invalid task number. Please provide a valid number.');
        } else {
            const tasks = readTasks();
            if (index > tasks.length) {
                console.log('⚠️ Error: Task number does not exist.');
            } else {
                tasks[index - 1] = `✔️ ${tasks[index - 1]}`;
                writeTasks(tasks);
                console.log(`🎉 Task marked as complete: "${tasks[index - 1]}"`);
            }
        }
        break;
    }

    case 'clear': {
        writeTasks([]);
        console.log('🧹 All tasks cleared! Your todo list is now empty.');
        break;
    }

    default: {
        console.log(`ℹ️ Usage:
  📌 node todo.js add <task>      # Add a new task
  📋 node todo.js list            # Display all tasks
  🗑️ node todo.js delete <number> # Delete a task by its number
  ❌ node todo.js mark <number>   # Mark a task as complete
  🧹 node todo.js clear           # Delete all tasks`);
        break;
    }
}
