const h1 = document.querySelector("div.hello h1");

function handleTitleClick() {
  h1.style.color = "blue";
  console.log("title was clocked");
}
function handleMouseEnter() {
  h1.innerText = "Mouse is here";
}

function handleMouseLeave() {
  h1.innerText = "Mouse is gone";
}

function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}
function handleWindowCopy() {
  alert("copier!");
}
function handleWindowOffline() {
  alert("SOS ni wifi!");
}
function handleWindowOnline() {
  alert("all good!");
}

h1.addEventListener("click", handleTitleClick);
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOffline);

// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/
const h2 = document.querySelector("h2");

const superEventHandler = {
  handleTitleClick() {
    h2.style.color = "#e74c3c";
    h2.innerText = "That was a right click!";
  },

  handleMouseEnter() {
    h2.innerText = "Mouse is here!";
    h2.style.color = "#1abc9c";
  },

  handleMouseLeave() {
    h2.innerText = "Mouse is gone!";
    h2.style.color = "#3498db";
  },

  handleWindowResize() {
    h2.innerText = "You just Resized!";
    h2.style.color = "#9b59b6";
  },
};
h2.addEventListener("contextmenu", superEventHandler.handleTitleClick);
h2.addEventListener("mouseenter", superEventHandler.handleMouseEnter);
h2.addEventListener("mouseleave", superEventHandler.handleMouseLeave);
window.addEventListener("resize", superEventHandler.handleWindowResize);
