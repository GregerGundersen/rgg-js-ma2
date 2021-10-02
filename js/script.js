import { booksCont, books } from "./constants.js";
import { findIndex, deleteItem } from "./utilFunctions.js";

export const listRender = (listItems) => {
  booksCont.innerHTML = "";

  if (books.length > 0) {
    listItems.forEach((item) => {
      booksCont.innerHTML += `
            <div class="book">
                <h2>${item.title}</h2>
                <p>ISBN: ${item.isbn}</p>
                <button type="button" id="${item.isbn}">Remove</button>
            </div>
        `;
    });
  } else if (books.length === 0) {
    booksCont.innerHTML = "You have removed all the books from the list.";
  }

  deleteItem(books);
};

listRender(books);
