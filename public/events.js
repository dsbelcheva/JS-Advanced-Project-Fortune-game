// to add:  event listener for birthday, birth hour inputs (Submit button event)
import { getHoroschope } from "./database_script.js";
import { getBirthTime, displayZodiac, findZodiac } from "./utils.js";

let input_for_date = document.getElementById("birthday");
let input_for_time = document.getElementById("time");
const button = document.getElementById("submit_btn");


button.addEventListener("click", async (event) => {
  event.preventDefault();
  let zodiac = findZodiac(new Date(input_for_date.value));
  const birthTime = getBirthTime(input_for_time.value);
  displayZodiac(zodiac);
  getHoroschope(input_for_date.value, birthTime);
});
