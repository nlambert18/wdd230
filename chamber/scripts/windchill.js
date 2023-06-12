function setWindChill(temperature, windspeed)
{message='N/A'
if (windspeed >= 3.0 && temperature <= 50){

    let chillfactor = Math.pow(windspeed, 0.16);

    let windchillamt = Math.round(35.74 + (0.6215 * temperature) - (35.75 * chillfactor) + (0.4275 * temperature * chillfactor));

    message = `${windchillamt}&deg;F`;}
document.querySelector('#windchill').innerHTML=message
document.querySelector('#temp').innerHTML=temperature
document.querySelector('#windspeed').innerHTML=windspeed}

setWindChill(49, 10)