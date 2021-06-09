function submitForm() {
  // GETTING VALUES FROM THE FORM
  var text = document.getElementById("textID").value;
  var select = document.getElementById("selectID").value;
  var checkbox = document.getElementById("checkboxID").checked;
  var date = document.getElementById("dateID").value;
  //

  //PUSH FORM VALUES INTO AN ARRAY
  var allItems = [];
  allItems.push(text, select, checkbox, date);
  //

  //CREATING HTML ELEMENTS
  var listDiv = document.createElement("div");
  var listItem = document.createElement("p");
  var currentList = document.getElementById("itemlist");
  //

  //APPENDING THE FORM VALUES INTO THE LIST
  for (const item of allItems) {
    listItem = document.createElement("p");
    listItem.innerText = item;
    listDiv.append(listItem);
  }
  listDiv.setAttribute("class", "line");
  currentList.appendChild(listDiv);
  //

  //PREVENT THE SUBMITION
  return false;
  //
}
