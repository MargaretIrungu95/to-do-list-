import React, {useState} from 'react'

export const EditTodoForm = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task);

    const handleSubmit = (e) => {
      // prevent default action
        e.preventDefault();
        // edit todo list
        editTodo(value, task.id);
      };
  return (
    <form onSubmit={handleSubmit} className="TodoForm">
    {/* place holder gives instruction on what to put in insert bar */}
    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="todo-input" placeholder='Edit Item?' />
    <button type="submit" className='todo-btn'>ADD TASK</button>
  </form>
  )
}


