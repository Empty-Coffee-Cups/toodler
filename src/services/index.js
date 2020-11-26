// Sorts by name
export const compare = (a, b) => {
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
  return 0;
};
// Sorts by if task is marked
export const isMarked = (a, b) => {
  if (a.isFinished && !b.isFinished) return 1;
  if (!a.isFinished && b.isFinished) return -1;
  return 0;
};

// Returns true/false if object/string/number is empty.
export const isEmpty = (x) => x === '' || (!x && typeof (x) !== 'number') || (Object.entries(x).length === 0 && x.constructor === Object);

// Get the highest ID of our object and return its highest ID + 1
export const getNextID = (obj) => {
  // Since we are not using any database with auto increment we find our highest ID and assign it +1
  let highestId = 0;
  obj.forEach((curr) => {
    if (curr.id > highestId) {
      highestId = curr.id;
    }
  });
  // Increment our ID +1
  return highestId + 1;
};
