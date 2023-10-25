export function Task(props){
    var { task, onUpdate, onDelete, onClickTask } = props;

    const handleClickTask = () => {
        task.taskState = !task.taskState;
        onClickTask(task);
    };

    return (
        <li>
            <label htmlFor={task.taskName}>{task.taskName}
            <input type="checkbox"
            defaultChecked={task.taskState}
            name={task.taskName}
            onClick={handleClickTask}/>
            </label>
            <button onClick={() => onUpdate(task)}>Update Task</button>
            <button onClick={() => onDelete(task)}>Delete Task</button>
        </li>
    );
}