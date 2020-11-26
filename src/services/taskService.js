import Data from '../resources/data.json';
import {
  compare, isMarked, isEmpty, getNextID,
} from './index';

let { tasks } = Data;

// Get all Tasks that belong to a List ID
export const getTasksFromList = async (listId) => {
  const retdata = tasks.filter((task) => task.listId === listId);
  return retdata.sort(isMarked, compare);
};

// Get a Task by a Task ID
export const getTaskById = async (taskId) => {
  const retdata = tasks.filter((task) => task.id === taskId);
  return retdata;
};

export const removeTask = async (taskId) => {
  tasks = tasks.filter((task) => task.id !== taskId);
};

export const markTask = async (taskId) => {
  const task = tasks.find((x) => x.id === taskId);
  // Remove the task so we can avoid dublicates
  await removeTask(taskId);
  // Set the Task to the other value
  task.isFinished = !task.isFinished;
  tasks.push(task);
};

export const createTask = async (task) => {
  if (isEmpty(task.name) || isEmpty(task.listId)) {
    return false;
  }

  const newTask = {
    id: getNextID(tasks),
    name: task.name,
    description: task.description,
    isFinished: task.isFinished,
    listId: task.listId,
  };
  tasks.push(newTask);
  return true;
};

// Edit a pre existing task
export const editTask = async (task) => {
  if (isEmpty(task.name) || isEmpty(task.listId)) {
    return false;
  }
  // We start be removing the task
  await removeTask(task.id);
  // Next we add the newly edited task to it
  tasks.push(task);
  return true;
};
