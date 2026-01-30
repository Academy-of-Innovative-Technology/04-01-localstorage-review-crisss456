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

  key = document.querySelector("#loadKey").value;

 
  var value = localStorage.getItem(key);

  
  document.querySelector("#loadValue").value = value;
};

// LOAD
document.querySelector(".update").onclick = function() {

};

// DELETE
document.querySelector(".delete").onclick = function() {

};
