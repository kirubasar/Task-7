const API_URL = "https://restcountries.com/v3.1/all"
//console.log(API_URL);
function reqListener() {
const countriesData = JSON.parse(this.responseText);
//console.log(countriesData);
countriesData.forEach(element => {
    console.log(`The country name: ${element.name.common},
The country capital is: ${ element.capital},
The country flag: ${ element.flag}`);
});
}
  
const req = new XMLHttpRequest();
req.addEventListener("load", reqListener);
req.open("GET", API_URL);
req.send();