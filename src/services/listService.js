import Data from '../resources/data.json';
import { compare, isEmpty, getNextID } from './index';

let { lists } = Data;

// Get all Lists that belong a Board ID
export const getListsFromBoard = async (boardId) => {
  const retdata = lists.filter((list) => list.boardId === boardId);
  return retdata.sort(compare);
};

export const getListFromID = async (id) => lists.find((list) => list.id === id);

export const removeList = async (listId) => {
  lists = lists.filter((list) => list.id !== listId);
};

export const createList = async (list) => {
  // If colorHex is valid
  const regex = (/^#[0-9A-F]{6}$/i);

  if (isEmpty(list.name)) {
    return false;
  }

  const newList = {
    id: getNextID(lists),
    name: list.name,
    // If color is not valid we set this as the default case
    color: regex.test(list.color) ? list.color : '#8EE4AF',
    boardId: list.boardId,
  };
  lists.push(newList);
  return true;
};

// Edit a pre existing list
export const editList = async (list) => {
  const regex = (/^#[0-9A-F]{6}$/i);
  // If Input is not valid
  if (isEmpty(list.name) || list.id < 0) { return false; }
  // Declare a newList since we want to overwrite the color if it is invalid
  let newList = list;
  if (!regex.test(list.color)) {
    newList = { ...list, color: '#8EE4AF' };
  }
  // We start be removing the list
  await removeList(list.id);
  // Next we add the newly edited list to it
  lists.push(newList);
  return true;
};
