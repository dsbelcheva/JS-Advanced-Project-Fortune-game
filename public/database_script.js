import { drawChart } from "./horosope_chart.js";
import { getZodiacByPlanetPosition } from "./zodiac.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  set,
  child,
  get,
  onValue,
  update,
  onChildAdded,
  onChildChanged,
  onChildRemoved,
  remove,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
import { Planet } from "./planets.js";
// Web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5_fkFNmtL4jAqvK5xw6dV8BbYaSJiLW8",
  authDomain: "horoscope-e0385.firebaseapp.com",
  databaseURL:
    "https://horoscope-e0385-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "horoscope-e0385",
  storageBucket: "horoscope-e0385.appspot.com",
  messagingSenderId: "883895662651",
  appId: "1:883895662651:web:4184a9634f31d8cd05841e",
  measurementId: "G-PEJEB6XJ9L",
};

const fortuneContainer = document.getElementById("horoscope-fortune-container");
const app = initializeApp(firebaseConfig);
const db = getDatabase();
const dbRef = ref(db);


export async function getHoroschope(date, time, zodiac) {
  let formattedDate = date.replaceAll("-", "");
  get(child(dbRef, "planet-positions/" + formattedDate + "/" + time))
    .then((snapshot) => {
      if (snapshot.exists()) {
        let degrees = snapshot.val().split(",");
        drawChart(degrees);
        for (let i = 0; i < 10; i++) {
          let zodiac = getZodiacByPlanetPosition(degrees[i+1]);
          let planet = new Planet(i + 1);
          get(child(dbRef, "planets-and-zodiacs/" + planet.name + "/" + zodiac))
            .then((snapshot) => {
              if (snapshot.exists()) {
                const el = document.createElement("p");
                el.innerHTML =
                  planet.name + " was in " + zodiac + " :" + snapshot.val();
                fortuneContainer.appendChild(el);
              }
            })
            .catch((error) => {
              console.error(error);
            });
        }
      }
    })
    .catch((error) => {
      console.error(error);
    });
}
