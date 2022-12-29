// to add:  event listener for birthday, birth hour inputs (Submit button event)
import { findZodiac } from "./zodiac.js";


let input_for_date = document.getElementById("birthday");
let input_for_time = document.getElementById("time");
const button = document.getElementById("submit_btn");

function saveBirthTime(time) {
  if (time !== "") {
    var hours = time.split(":")[0];
    // the minutes won't change the result 
    var suffix = hours >= 12 ? "pm" : "am";
    hours = hours % 12 || 12;
    hours = hours < 10 ? "0" + hours : hours;

    // find better way to determine and find period 
    if (suffix === "am") {
      if (hours < 6) {
        localStorage.setItem("dayPeriod", "0-6");
      }
      else {
        localStorage.setItem("dayPeriod", "6-12");
      }
    }
    else if (suffix === "pm") {
      if (hours < 6) {
        localStorage.setItem("dayPeriod", "12-18");
      }
      else {
        localStorage.setItem("dayPeriod", "18-24");
      }
    }
  }
}

button.addEventListener('click', (event) => {
  event.preventDefault();
  const date = new Date(input_for_date.value);
  localStorage.setItem("zodiac",findZodiac(date));
  saveBirthTime(input_for_time.value);
  console.log(localStorage.getItem("zodiac"));
})

