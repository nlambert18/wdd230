// sets year for footer
const today = new Date();
document.querySelector("#currentyear").textContent = today.getFullYear();

//sets last modified date
document.querySelector("#lastmodified").textContent = document.lastModified;

//todays full date
const fulldate = new Intl.DateTimeFormat("en-US", {dateStyle: "full"}).format(new Date());
document.querySelector("#fulldate").textContent = fulldate.getDate();