import React from 'react';

const TaskList = ({ tasks, removeTask }) => {
    return (
        <ul>
            {tasks.length > 0 ? (
                tasks.map((task, index) => (
                    <li key={index}>
                        {task}
                        <button onClick={() => removeTask(index)}>Remover</button>
                    </li>
                ))
            ) : (
                <li>Nenhuma tarefa adicionada.</li>
            )}
        </ul>
    );
};

export default TaskList;
