export function Task(props){
    var { taskName, taskState, onClickTask } = props;

    const handleClickTask = () => {
        taskState = !taskState;
        onClickTask(taskName, taskState);
    };

    return (
        <li>
            <label htmlFor={taskName}>{taskName}
            <input type="checkbox"
            defaultChecked={taskState}
            name={taskName}
            onClick={handleClickTask}/>
            </label>
        </li>
    );
}