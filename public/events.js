// to add:  event listener for birthday, birth hour inputs (Submit button event)
import { findZodiac } from "./zodiac.js";
import { getHoroschope } from "./database_script.js";

let input_for_date = document.getElementById("birthday");
let input_for_time = document.getElementById("time");
const button = document.getElementById("submit_btn");

function getBirthTime(time) {
  if (time !== "") {
    var hours = time.split(":")[0];
    // the minutes won't change the result
    var suffix = hours >= 12 ? "pm" : "am";
    hours = hours % 12 || 12;
    hours = hours < 10 ? "0" + hours : hours;

    // find better way to determine and find period
    if (suffix === "am") {
      if (hours < 6) {
        return "0-6";
      } else {
        return "6-12";
      }
    } else if (suffix === "pm") {
      if (hours < 6) {
        return "12-18";
      } else {
        return "18-24";
      }
    }
  }
}

button.addEventListener("click", async (event) => {
  event.preventDefault();
  let zodiac = findZodiac(new Date(input_for_date.value));
  const birthTime = getBirthTime(input_for_time.value);
  getHoroschope(input_for_date.value, birthTime, zodiac);
});
