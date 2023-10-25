import { useEffect, useState } from "react";

export function useTasks(){
    const [tasks, setCheckedTasks] = useState([]);

    const addTask = (task) =>{
        task["id"] = Date.now().toString();
        task["state"] = false;
        let newTasks = [...tasks];
        newTasks.push(task);
        setCheckedTasks(newTasks);
        localStorage.setItem("checkedTasks", JSON.stringify(newTasks));
    };

    const updateTask = (task) =>{
        let newTasks = [...tasks];
        newTasks = newTasks.map((l) =>{
            if(l.id == task.id){
                l.taskName = task.taskName;
                l.taskState = task.taskState;
            }
            return l;
        })
        setCheckedTasks(newTasks);
        localStorage.setItem("checkedTasks", JSON.stringify(newTasks));
    };

    const deleteTask = (task) =>{
        let newTasks = [...tasks];
        newTasks = newTasks.filter((l) => l.id != task.id);
        setCheckedTasks(newTasks);
        localStorage.setItem("checkedTasks", JSON.stringify(newTasks));
    }

    useEffect(() =>{
        const newTasks = JSON.parse(localStorage.getItem("checkedTasks"));
        if(newTasks !== null) setCheckedTasks(newTasks);
    }, []);

    return [tasks, addTask, updateTask, deleteTask]
}