const API_URL = "https://restcountries.com/v3.1/all"
//console.log(API_URL);
function reqListener() {
//console.log(this.responseText);
const countriesData = JSON.parse(this.responseText);
//console.log(countriesData)
let countries = countriesData.filter(element => element.continents == 'Asia');
console.log(countries);
countries.forEach(element => {
    console.log(element.name.common);
    
});
}

const req = new XMLHttpRequest();
req.addEventListener("load", reqListener);
req.open("GET", API_URL);
req.send();