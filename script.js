const addList = document.getElementById("add");
const deleteList = document.getElementById("deleted");
const textHolder = document.getElementById("textHolder");

const input = document.getElementById("InputList");
let listNumber = 1;
addList.addEventListener("click", () => {
  const newList = document.createElement("p");
  newList.textContent = `${listNumber}. ${input.value}`;
  textHolder.appendChild(newList);
  input.value = "";
  listNumber++;
});

deleteList.addEventListener("click", () => {
  const textElement = textHolder.getElementsByTagName("p");
  if (textElement.length > 0) {
    textHolder.removeChild(textElement[textElement.length - 1]);
    listNumber--;
  }
  if (textHolder.childElementCount === 0) {
    listNumber = 1;
  }
});
