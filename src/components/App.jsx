import React, { useState } from 'react';
import { Task } from './Task.jsx';
import { Header } from './Header.jsx';
import { AddFoarm } from './AddFoarm.jsx';
import { ConfirmDeleteModal } from './ConfirmDelete.jsx';

export function App() {
  const [task, setTask] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);

  const submitFoarm = (e) => {
    e.preventDefault();
    if (e.target.input.value === '') return;

    if (task.indexOf(e.target.input.value) > -1) {
      return alert('Task already exists');
    }

    setTask([...task, e.target.input.value]);
    e.target.input.value = '';
    e.target.input.focus();
  };

  const deleteTask = (name) => setTask(task.filter((task) => task !== name));

  const openModel = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div>
      <Header task={task} />
      {task.map((task, index) => (
        <Task
          task={task}
          index={index + 1}
          openModel={openModel}
          setTaskToDelete={setTaskToDelete}
        />
      ))}

      <AddFoarm submitFoarm={submitFoarm} />
      <ConfirmDeleteModal
        isOpen={showModal}
        handleClose={closeModal}
        handleDelete={deleteTask}
        task={taskToDelete}
      />
    </div>
  );
}
