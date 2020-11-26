import Data from '../resources/data.json';
import { compare, isEmpty, getNextID } from './index';

let { boards } = Data;

// Get all Boards
export const getAllBoards = async () => boards.sort(compare);

export const createBoard = async (board) => {
  const regex = (/\.(gif|jpg|jpeg|tiff|png)$/i);
  // Returns false if board name/thumb is empty
  if (isEmpty(board.name) || isEmpty(board.thumbnailPhoto)) {
    return false;
  }
  if (!regex.test(board.thumbnailPhoto)) { return false; }

  const newBoard = {
    id: getNextID(boards),
    name: board.name,
    description: board.description,
    thumbnailPhoto: board.thumbnailPhoto,
  };
  boards.push(newBoard);
  return true;
};

// Remove a board by ID and return a new list of all boards
export const removeBoard = async (boardId) => {
  boards = boards.filter((board) => board.id !== boardId);
};

// Edit a pre existing board
export const editBoard = async (board) => {
  const regex = (/\.(gif|jpg|jpeg|tiff|png)$/i);
  // If Input is not valid
  if (isEmpty(board.name) || isEmpty(board.thumbnailPhoto) || board.id < 0) { return false; }
  // If not a valid picture
  if (!regex.test(board.thumbnailPhoto)) { return false; }
  // We start be removing the board
  await removeBoard(board.id);
  // Next we add the newly edited board to it
  boards.push(board);
  return true;
};
