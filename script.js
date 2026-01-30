var key = ""; 

// SAVE
document.querySelector(".save").onclick = function() {
  key = document.querySelector("#saveKey").value;
  var value = document.querySelector("#saveValue").value;

  if (key && value) {
    localStorage.setItem(key, value);
    alert("Data Saved!");
  } else {
    alert("Please enter both Key and Value.");
  }

  document.querySelector("#saveKey").value = "";
  document.querySelector("#saveValue").value = "";
};

// LOAD
document.querySelector(".load").onclick = function() {
  key = document.querySelector("#loadKey").value;

  var value = localStorage.getItem(key);

  if (value !== null) {
    document.querySelector("#loadValue").value = value;
  } else {
    document.querySelector("#loadValue").value = "No data found!";
  }
};

// UPDATE
document.querySelector(".update").onclick = function() {
  key = document.querySelector("#updateKey").value;
  var newValue = document.querySelector("#updateValue").value;

  if (key && newValue) {
    localStorage.setItem(key, newValue);
    alert("Data Updated!");
  } else {
    alert("Please enter both Key and New Value.");
  }

  document.querySelector("#updateKey").value = "";
  document.querySelector("#updateValue").value = "";
};

// DELETE
document.querySelector(".delete").onclick = function() {
  var deleteKey = document.querySelector("#deleteKey").value;

  if (deleteKey) {
    localStorage.removeItem(deleteKey);
    alert("Data Deleted!");
  } else {
    alert("Please enter a Key to delete.");
  }

  document.querySelector("#deleteKey").value = "";

  document.querySelector(".load").click();
};
