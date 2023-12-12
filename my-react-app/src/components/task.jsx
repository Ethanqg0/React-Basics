// Task.js

import React from 'react';

const Task = ({ task, onRemove }) => {
  return (
    <li>
      {task}
      <button onClick={onRemove}>Remove</button>
    </li>
  );
};

export default Task;
