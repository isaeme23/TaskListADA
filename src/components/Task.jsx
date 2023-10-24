export function Task(props){
    var { taskName, taskState } = props;

    const handleCheckTask = () => {
        taskState = !taskState;
    };

    return (
        <li>
            <label htmlFor={taskName}>{taskName}
            <input type="checkbox" defaultChecked={taskState} name={taskName} onClick={handleCheckTask}/>
            </label>
        </li>
    );
}