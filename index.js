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
function createListItem(value) {
  const listItem = document.createElement("li");
  listItem.classList.add("listitem");

  // Creating a paragraph to show the value
  const textParagraph = document.createElement("p");
  textParagraph.innerText = value;

  const editbutton = document.createElement("button");
  editbutton.innerText = "✏️";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  const doneContainer = document.getElementById("secondul");
  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      listItem.classList.add("greenBorder");
      doneContainer.insertBefore(listItem, doneContainer.firstChild);
    } else {
      listItem.classList.remove("greenBorder");
      container.insertBefore(listItem, container.firstChild);
    }
  });

  editbutton.addEventListener("click", function () {
    if (editbutton.innerText == "✏️") {
      const p = listItem.querySelector("p");
      editbutton.innerText = "Save";
      const newInput = document.createElement("input");
      newInput.classList.add("saveinput");
      newInput.value = p.innerText.trim();
      p.remove();
      listItem.prepend(newInput);
    } else {
      const input = listItem.querySelector("input");
      if (input.value.trim() == "") {
        container.removeChild(listItem);
        return;
      }
      editbutton.innerText = "✏️";
      const newParagraph = document.createElement("p");
      newParagraph.innerText = input.value.trim();
      input.remove();
      listItem.prepend(newParagraph);
    }
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.classList.add("delete");
  deleteBtn.addEventListener("click", function () {
    let parent = listItem.parentNode;
    if (parent === container) {
      parent.removeChild(listItem);
    } else if (parent === doneContainer) {
      parent.removeChild(listItem);
    }
  });

  listItem.appendChild(textParagraph);
  listItem.appendChild(checkbox);
  listItem.appendChild(editbutton);
  listItem.appendChild(deleteBtn);

  return listItem;
}
const searchBar = document.getElementById("search");

searchBar.addEventListener("input", function (event) {
  const value = event.target.value;
  const listItems = document.querySelectorAll("li");
  if (value) {
    listItems.forEach(function (li) {
      const paragraph = li.querySelector("p");
      const text = paragraph.innerText.trim();
      if (text.includes(value)) {
        li.style.display = "";
      } else {
        li.style.display = "none";
      }
    });
  } else {
    listItems.forEach(function (li) {
      li.style.display = "";
    });
  }
});
