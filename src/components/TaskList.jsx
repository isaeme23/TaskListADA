import { Task } from "./Task"

export function TaskList(props){
    const { list } = props;

    return (
        <ul>
            {list.map((task) => (
                <Task taskName={ task.taskName } taskState={ task.taskState }/>
            ))}
        </ul>
    );
}