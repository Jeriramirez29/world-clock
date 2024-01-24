function updateTime() {
//Los Angeles
let losAngelesElement = document.querySelector("#los-angeles");
let losAngelesDateElement = losAngelesElement.querySelector(".date");
let losAngelesTimeElement = losAngelesElement.querySelector(".time");
let losAngelesCurrentTime = moment().tz("America/Los_Angeles");

losAngelesDateElement.innerHTML = losAngelesCurrentTime.format("MMMM Do YYYY");
losAngelesTimeElement.innerHTML = losAngelesCurrentTime.format("h:mm:ss [<small>]A[</small]>");

//Paris
let parisElement = document.querySelector("#paris");
let parisDateElement = parisElement.querySelector(".date");
let parisTimeElement = parisElement.querySelector(".time");
let parisCurrentTime = moment().tz("Europe/Paris");

parisDateElement.innerHTML = parisCurrentTime.format("MMMM Do YYYY");
parisTimeElement.innerHTML = parisCurrentTime.format("h:mm:ss [<small>]A[</small>]");
}

updateTime();
setInterval(updateTime, 1000);