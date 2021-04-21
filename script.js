//exo 1 : montrer une photo isue de l'API d'insta

/*fetch(`https://geek-jokes.sameerkumar.website/api?format=json`)
  .then((response) => response.json() )
  .then((joke) => console.log(joke) ) 

  

const selector = document.querySelector('h2');
const URL = "https://scontent-mrs2-2.cdninstagram.com/v/t51.2885-15/e35/139583366_680044629351182_8577966156209204192_n.jpg?tp=1&_nc_ht=scontent-mrs2-2.cdninstagram.com&_nc_cat=102&_nc_ohc=MFlTGoS9nu4AX8WYQo6&edm=ABfd0MgBAAAA&ccb=7-4&oh=32260aff8ea2412e5f0349ae0bdb015b&oe=60823438&_nc_sid=7bff83";
const descriptionText = "Ma benz";

const showInstagramPost = (selector, URL, descriptionText) => {
  selector.innerHTML += `
      <div>
          <p>${descriptionText}</p>
          <img src='${URL}' alt='' />
      </div>
  `;
}

showInstagramPost(selector, URL, descriptionText);*/



//exo 2: API velib
/*const URL = "https://opendata.paris.fr/api/records/1.0/search/?dataset=velib-disponibilite-en-temps-reel&q=&lang=fr&rows=10&facet=name&facet=is_installed&facet=is_renting&facet=is_returning&facet=nom_arrondissement_communes";
const selector = document.querySelector('h2');
const showVelibStation = (selector, name, numberClassicalVelibs, numberElectricVelibs) => {
  selector.innerHTML += `
      <div>
          <h2>Station : ${name}</h2>
          <p>${numberClassicalVelibs} classical Velibs</p>
          <p>${numberElectricVelibs} electric Velibs</p>
      </div>
  `
}
setInterval(function(){ fetch(URL)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    for (i = 0; i < data.records.length; i++){
      console.log(data.records[i].fields.numbikesavailable);
      showVelibStation(selector, data.records[i].fields.name, data.records[i].fields.mechanical, data.records[i].fields.ebike);
    }
  }); 
  selector.innerHTML = "";
}, 3000);
*/


//exo 3: API meteo

const URL = "https://api.weatherbit.io/v2.0/forecast/daily?postal_code=69001&country=fr&days=5&key=3cdb7f93435f42bab557f593025ae065";
const selector = document.querySelector('h2');
var days = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
const showWeather = (selector, day, weather, temp) => {
  selector.innerHTML += `
      <div>
          <h5>${day} :</h5>
          <h5>Le temps sera : ${weather}</h5>
          <h5>Il fera : ${temp} degrés</h5>
          <br>
      </div>
  `
}


setInterval(function(){ fetch(URL)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    for (i = 0; i < data.data.length; i++){
      console.log(data.data[i].weather.icon);
      showWeather(selector, days[i], data.data[i].weather.description, data.data[i].temp);
    }
  }); 
  selector.innerHTML = "";
}, 3000);