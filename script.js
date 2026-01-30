var key = "";

// SAVE
document.querySelector(".save").onclick = function() {
  
  key = document.querySelector("#saveKey").value;
  var value = document.querySelector("#saveValue").value;


  localStorage.setItem(key, value);


  document.querySelector("#saveKey").value = "";
  document.querySelector("#saveValue").value = "";
};
// LOAD
document.querySelector(".load").onclick = function() {

};

// LOAD
document.querySelector(".update").onclick = function() {

};

// DELETE
document.querySelector(".delete").onclick = function() {

};
