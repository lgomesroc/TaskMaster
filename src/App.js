import React, { useState } from 'react';
import Header from './components/Header';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import Footer from './components/Footer';

const App = () => {
    const [tasks, setTasks] = useState([]);

    const addTask = (task) => {
        setTasks([...tasks, task]);
    };

    const removeTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    };

    return (
        <div>
            <Header />
            <TaskForm addTask={addTask} />
            <TaskList tasks={tasks} removeTask={removeTask} />
            <Footer />
        </div>
    );
};

export default App;
