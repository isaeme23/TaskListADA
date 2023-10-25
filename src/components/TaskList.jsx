import { useEffect, useState } from 'react'
import { Task } from "./Task"

export function TaskList(props){
    const { taskList } = props;
    const [tasks, setCheckedTasks] = useState( {} );

    // Maneja el click del task
    const handleCheckedClick = (taskName, taskState) => {
        // Copia del task
        let newTasks = {...tasks};
        newTasks[`${taskName}`] = {"done": taskState};
        setCheckedTasks(newTasks);
        localStorage.setItem("checkedTasks", JSON.stringify(newTasks));
    };

    const setDefaultChecked = (task) => {
        // Guardar estado de tasks
        if(tasks[`${task.taskName}`] && JSON.stringify(tasks) !== "{}"){
            return tasks[`${task.taskName}`]["done"];
        }
        return task.taskState;
    }

    useEffect(() =>{
        const newTasks = JSON.parse(localStorage.getItem("checkedTasks"));
        if(newTasks !== null) setCheckedTasks(newTasks);
    }, []);

    return (
        <ul>
            {taskList.map((task) => (
                <Task
                taskName={ task.taskName }
                taskState={ setDefaultChecked(task) }
                onClickTask={handleCheckedClick}/>
            ))}
        </ul>
    );
};