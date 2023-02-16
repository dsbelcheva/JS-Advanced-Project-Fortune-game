//This function takes three arguments: a Date object representing the birth date and time, the latitude of the birthplace, and the longitud


function calculateAscendant(date, latitude, longitude) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
  
    // Calculate Julian Day Number
    const a = Math.floor((14 - month) / 12);
    const y = year + 4800 - a;
    const m = month + 12 * a - 3;
    const JD = day + Math.floor((153 * m + 2) / 5) + y * 365 + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) - 32045;
  
    // Calculate Greenwich Mean Sidereal Time (GMST)
    const JD0 = JD - 2451545.0;
    const T = JD0 / 36525.0;
    const GMST = 6.697374558 + 1.0027379093 * (hour + minute / 60 + second / 3600) + 0.000026 * T * T;
  
    // Convert longitude to degrees
    const lngDeg = Math.floor(longitude);
    const lngMin = (longitude - lngDeg) * 60;
  
    // Calculate Local Mean Sidereal Time (LMST)
    const LST = GMST + lngDeg * 1.0027379093 + lngMin * 0.0166666667 - 24 * Math.floor((GMST + lngDeg * 1.0027379093 + lngMin * 0.0166666667) / 24);
  
    // Calculate Obliquity of Ecliptic (ε)
    const obliquity = 23.439281 - 0.0000004 * JD;
  
    // Calculate right ascension of the Sun (α)
    const n = JD - 2451545.0;
    const L = (280.460 + 0.9856474 * n) % 360;
    const g = (357.528 + 0.9856003 * n) % 360;
    const lambda = (L + 1.915 * Math.sin(g * Math.PI / 180) + 0.02 * Math.sin(2 * g * Math.PI / 180)) % 360;
    const alpha = Math.atan2(Math.cos(obliquity * Math.PI / 180) * Math.sin(lambda * Math.PI / 180), Math.cos(lambda * Math.PI / 180)) * 180 / Math.PI;
    const alphaDeg = Math.floor(alpha);
    const alphaMin = (alpha - alphaDeg) * 60;
  
    // Calculate Ascendant (AS)
    const MC = LST - alpha;
    const AS = Math.atan2(Math.sin(MC * Math.PI / 180), Math.cos(MC * Math.PI / 180) * Math.cos(latitude * Math.PI / 180) - Math.tan(alpha * Math.PI / 180) * Math.sin(latitude * Math.PI / 180)) * 180 / Math.PI;
    const ASDeg = Math.floor(AS);
    const ASMin = (AS - ASDeg) * 60;
  
    // Return Ascendant as a string in the format "XX°YY'"
    return `${ASDeg}°${ASMin.toFixed(0)}'`;
  }

  export function getAscendantSign(date, latitude, longitude) {
    const ascendant = calculateAscendant(date, latitude, longitude);
  
    if ((ascendant >= '0°0\'' && ascendant < '30°0\'') || (ascendant >= '330°0\'' && ascendant <= '360°0\'')) {
      return 'Aries';
    } else if (ascendant >= '30°0\'' && ascendant < '60°0\'') {
      return 'Taurus';
    } else if (ascendant >= '60°0\'' && ascendant < '90°0\'') {
      return 'Gemini';
    } else if (ascendant >= '90°0\'' && ascendant < '120°0\'') {
      return 'Cancer';
    } else if (ascendant >= '120°0\'' && ascendant < '150°0\'') {
      return 'Leo';
    } else if (ascendant >= '150°0\'' && ascendant < '180°0\'') {
      return 'Virgo';
    } else if (ascendant >= '180°0\'' && ascendant < '210°0\'') {
      return 'Libra';
    } else if (ascendant >= '210°0\'' && ascendant < '240°0\'') {
      return 'Scorpio';
    } else if (ascendant >= '240°0\'' && ascendant < '270°0\'') {
      return 'Sagittarius';
    } else if (ascendant >= '270°0\'' && ascendant < '300°0\'') {
      return 'Capricorn';
    } else if (ascendant >= '300°0\'' && ascendant < '330°0\'') {
      return 'Aquarius';
    } else {
      return 'Error: Invalid ascendant value';
    }
  }