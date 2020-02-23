var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var button = document.createElement("button");
  var txt = document.createTextNode("delete");
  button.className = "close";
  button.appendChild(txt);
  myNodelist[i].appendChild(button);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}



// Add a "checked" symbol when clicking on a list item
var lisbut = document.querySelector('ul');
lisbut.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);






// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
 
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

 
 
  var button = document.createElement("button");
  var txt = document.createTextNode("delete");
  button.className = "close";
  button.appendChild(txt);
  li.appendChild(button);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}