import { useState } from "react";
import './todo-app.css';
import useQuery from "./useQuery";

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const { data, error, isLoading, refetch } = useQuery('users',
    () => fetch('https://dummyjson.com/users').then((res) => res.json()));
  
  console.log(data, 'data--', isLoading, '----', error)

  const handleAddTask = () => {
    if (tasks.find((task) => task === input)) {
      return;
    }
    setTasks([...tasks, input]);
    setInput('');
  };

  const handleEnterPress = (e) => {
    if (e.key === 'Enter') handleAddTask();
  }

  const handleEditTask = (id) => {
    setInput(tasks[id]);
  }

  return (
    <div className="todo-main">
      <h3>ToDo Application</h3>
      <div className="todo-input">
        <input onChange={(e) => setInput(e.target.value)} value={input} onKeyDown={handleEnterPress} />
        <button disabled={!input.trim()} onClick={handleAddTask}>{'Add Task'}</button>
      </div>
      <div className="task-main">
        {tasks?.length > 0 && tasks?.map((task, index) => (
          <div className="task">
            <ul key={index} style={{ margin: '0px' }}>{task}</ul>
            <button onClick={refetch} style={{ height: 'fit-content' }}>Edit</button>
          </div>
        ))}
      </div>
    </div>
  )
};

export default TodoApp;