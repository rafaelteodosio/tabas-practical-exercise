function submitForm() {
  var text = document.getElementById("textID").value;
  var select = document.getElementById("selectID").value;
  var checkbox = document.getElementById("checkboxID").checked;
  var date = document.getElementById("dateID").value;
  var allItens = [];
  allItens.push(text, select, checkbox, date);
  var listDiv = document.createElement("div");
  var listItem = document.createElement("li");
  listItem.setAttribute("class", "list-group-item");
  var currentList = document.getElementById("itemlist");
  for (const item of allItens) {
    listItem = document.createElement("li");
    listItem.setAttribute("class", "list-group-item");
    listItem.innerText = item;
    listDiv.append(listItem);
  }
  currentList.appendChild(listDiv);
  console.log("currentList :>> ", currentList);
  return false; // stop submission
}
