const API_URL = "https://restcountries.com/v3.1/all"
//console.log(API_URL);
function reqListener() {
//console.log(this.responseText);
const countriesData = JSON.parse(this.responseText);
//console.log(countriesData)
const totalPopulation = countriesData.reduce((accum, countriesData) =>{
    return accum + countriesData.population
},0)
console.log(totalPopulation)
console.log("...................")

countriesData.forEach(element =>{
    if(element.currencies && element.currencies["USD"])
    console.log(element.name.official)
})
}

const req = new XMLHttpRequest();
req.addEventListener("load", reqListener);
req.open("GET", API_URL);
req.send();