import { useEffect, useState } from 'react'
import { Task } from "./Task"
import { useTasks } from "../hooks/useTasks";

export function TaskList(){
    const [tasks, addTask, updateTask, deleteTask] = useTasks();

    const handleAddTask = () => {
        let taskName = prompt("Enter the description of the task:")
        let task = {
            taskName: taskName
        }
        addTask(task);
    };

    const handleUpdateTask = (task) => {
        let taskName = prompt("Enter the description of the task:")
        task.taskName = taskName;
        addTask(task);
    };

    const handleDeleteTask = (task) => {
         deleteTask(task);
    };

    const setDefaultChecked = (task) => {
        updateTask(task);
    }

    return (
    <>
        <ul>
            {tasks.map((task) => (
                <Task
                key= { task.id }
                task={ task }
                onCheckedTask={setDefaultChecked}
                onUpdate={handleUpdateTask}
                onDelete={handleDeleteTask}/>
            ))}
        </ul>
        <button onClick={handleAddTask}>Add Task</button>
    </>
    );
};