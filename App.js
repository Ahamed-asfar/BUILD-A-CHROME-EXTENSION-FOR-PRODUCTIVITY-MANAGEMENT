import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState('');

  useEffect(() => {
    axios.get('http://localhost:4000/api/tasks')
      .then(res => setTasks(res.data))
      .catch(err => console.error(err));
  }, []);

  const addTask = async () => {
    if (!taskText.trim()) return;
    const res = await axios.post('http://localhost:4000/api/tasks', {
      text: taskText,
    });
    setTasks(prev => [...prev, res.data]);
    setTaskText('');
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>🧠 Productivity Tasks</h2>

      <input
        type="text"
        placeholder="Enter a new task"
        value={taskText}
        onChange={e => setTaskText(e.target.value)}
        style={{ padding: 10, width: '60%', marginRight: 10 }}
      />

      <button onClick={addTask} style={{ padding: 10 }}>
        Add
      </button>

      <ul style={{ marginTop: 20 }}>
        {tasks.map(task => (
          <li key={task._id} style={{ marginBottom: 8 }}>
            {task.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
