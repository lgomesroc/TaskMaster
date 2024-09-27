import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
    const [taskInput, setTaskInput] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (taskInput.trim() !== '') {
            addTask(taskInput);
            setTaskInput('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={taskInput}
                onChange={(e) => setTaskInput(e.target.value)}
                placeholder="Adicionar nova tarefa"
            />
            <button type="submit">Adicionar</button>
        </form>
    );
};

export default TaskForm;
