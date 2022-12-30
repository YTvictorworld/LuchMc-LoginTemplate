/** Login Script */
// Path: LunchMc\src\client\js\scripts.js
const username = document.getElementById("userNAMEID");
const form = document.getElementById("form");
const text = document.getElementById("warnings");
const { ipcRenderer } = require("electron");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (username.value === "") {
    text.innerHTML = "Please enter a username";
    text.style.color = "red";
    text.style.fontSize = "15px";
    text.style.fontWeight = "bold";
    text.style.margin = "0";
    text.style.padding = "0";
    text.align = "center";
  } else {
    text.innerHTML = "";
    ipcRenderer.send("login", username.value);
  }
});
