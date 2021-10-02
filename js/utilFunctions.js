import { listRender } from "./script.js";
import { books } from "./constants.js";

//Finds the unique identifier(In this case ISBN) and matches in to the array. The index is used to delete a specific item from the array.
export const findIndex = (array, item) => {
  return array
    .map((x) => {
      return x.isbn;
    })
    .indexOf(item.isbn);
};

//Loops through they array and adds eventListeners to remove the item on click.
export const deleteItem = (array) => {
  array.forEach((item) => {
    document.getElementById(`${item.isbn}`).addEventListener("click", () => {
      array.splice(findIndex(array, item), 1);
      listRender(books);
    });
  });
};
