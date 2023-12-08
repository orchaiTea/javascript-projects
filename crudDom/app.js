const title = document.getElementById("title");
const author = document.getElementById("author");
const year = document.getElementById("year");
const bookList = document.getElementById("book-list");
const btn = document.querySelector(".btn");
const btnRemove = document.querySelector(".btn-Remove");

function addElement() {
  const bTitle = title.value;
  const bAuthor = author.value;
  const bYear = year.value;
  const btElement = document.createElement("section");
  btElement.className = "card";
  btElement.innerHTML = `<div"> ${bTitle} ${bAuthor} ${bYear}</div>`;
  bookList.appendChild(btElement);
  console.log(bookList);
}

function removeElement() {
  bookList.removeChild(bookList.lastChild);
}

btn.addEventListener("click", (e) => {
  e.preventDefault();
  addElement();
});

btnRemove.addEventListener("click", (e) => {
  e.preventDefault();
  removeElement();
});
