// App.js

import React, { useState } from 'react';
import Task from './components/task'; // Assuming Task.js is in the same directory

const App = () => {
  // Assuming you have some state to manage tasks
  const [tasks, setTasks] = useState([
    "Task 1",
    "Task 2",
    // Add more tasks as needed
  ]);

  const removeTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div>
      <h1>Task List</h1>
      <ul>
        {tasks.map((task, index) => (
          <Task key={index} task={task} onRemove={() => removeTask(index)} />
        ))}
      </ul>
    </div>
  );
};

export default App;
