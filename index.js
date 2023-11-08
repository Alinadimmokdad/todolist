let input = document.getElementById("input");
let addButton = document.getElementById("addbutton");
let container = document.getElementById("container");
addButton.addEventListener("click", function () {
  const inputValue = input.value;
  if (inputValue) {
    // Creating a newListItem to append it the container
    const newListItem = createListItem(inputValue);

    container.insertBefore(newListItem, container.firstChild);

    input.value = "";
  }
});
