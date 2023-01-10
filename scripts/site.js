// sets year for footer
const today = new Date();
document.querySelector("#currentyear").textContent = today.getFullYear();

//sets last modified date
document.querySelector("#lastmodified").textContent = document.lastModified;