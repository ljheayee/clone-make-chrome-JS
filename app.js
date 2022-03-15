const h1 = document.querySelector("div.hello h1");
document.getElement;
function handleTitleClick() {
  h1.classList.toggle("clicked");
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
//h1.addEventListener("mouseenter", handleMouseEnter);
//h1.addEventListener("mouseleave", handleMouseLeave);

//window.addEventListener("resize", handleWindowResize);
//window.addEventListener("copy", handleWindowCopy);
//window.addEventListener("offline", handleWindowOffline);
//window.addEventListener("online", handleWindowOffline);
