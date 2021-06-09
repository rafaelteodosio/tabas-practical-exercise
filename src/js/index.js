function submitForm() {
  // GETTING VALUES FROM THE FORM
  var text = document.getElementById("textID").value;
  var select = document.getElementById("selectID").value;
  var checkbox = document.getElementById("checkboxID").checked;
  var date = document.getElementById("dateID").value;
  //

  //PUSH FORM VALUES INTO AN ARRAY
  var allItens = [];
  allItens.push(text, select, checkbox, date);
  //

  //CREATING HTML ELEMENTS
  var listDiv = document.createElement("div");
  var listItem = document.createElement("li");
  var currentList = document.getElementById("itemlist");
  //

  //APPENDING THE FORM VALUES INTO THE LIST
  for (const item of allItens) {
    listItem = document.createElement("li");
    listItem.innerText = item;
    listDiv.append(listItem);
  }
  currentList.appendChild(listDiv);
  //

  //PREVENT THE SUBMITION
  return false;
}
