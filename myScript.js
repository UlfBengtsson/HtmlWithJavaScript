//document.getElementsByTagName("h1")[0].innerHTML = "Good text";

document.getElementById("firstH1").innerHTML = "Happy text";

var goldenElements = document.getElementsByClassName("goldText");

for (i = 0; i < goldenElements.length; i++) {
  goldenElements[i].style.color = "magenta";
}

var myLi = document.createElement("li");
myLi.innerHTML = "random text";

document.getElementById("myList").appendChild(myLi);

//---------------------------------------------------------------------------------------

document.getElementById("addToDo").addEventListener("click", AddToDoElement);

var toDoList = document.getElementById("toDoList");
var toDoInput = document.getElementById("toDoInput");

function AddToDoElement() {
  var toDoLi = document.createElement("li");
  toDoLi.innerHTML = toDoInput.value;

  toDoList.appendChild(toDoLi);
}
