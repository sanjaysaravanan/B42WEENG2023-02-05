// Step 1: Hit the API and get the Data
var request = new XMLHttpRequest();

request.open('GET', 'https://restcountries.com/v3.1/all');

request.send(null);

const rootDiv = document.getElementById('root');
rootDiv.style.display = 'flex';
rootDiv.style.flexWrap = 'wrap';



request.onload = function () {
  var response = JSON.parse(request.responseText);

  // response data is array and we need to iterate  over it
  // for each with destructuring
  response.forEach(({ flags, name: { common: countryName } }) => {
    console.log(flags, countryName);
    // create img card element from bootstrap
    // <div class="card" style="width: 18rem;">
    //   <img src="{ svg | png }" class="card-img-top" alt="{ country alt | name }">
    //   <div class="card-body">
    //     <h5 class="card-title">{ country name }</h5>
    //     <p class="card-text">{ country alt }</p>
    //     <a href="#" class="btn btn-primary">Go somewhere</a>
    //   </div>
    // </div>

    const divElement = document.createElement('div');


    // ** Do Not Use this way **
    //     divElement.innerHTML = `<div class="card" style="width: 18rem;">
    //   <img src="${flags.png}" class="card-img-top" alt="${flags.alt || countryName}">
    //   <div class="card-body">
    //     <h5 class="card-title">${countryName}</h5>
    //     <p class="card-text">${flags.alt}</p>
    //     <a href="#" class="btn btn-primary">Go somewhere</a>
    //   </div>
    // </div>`;

    // creating individual element and structure using the methods of document
    // inner to outer
    const h5Element = document.createElement('h5');
    h5Element.innerText = countryName;
    h5Element.setAttribute('class', 'card-title');

    const pElement = document.createElement('p');
    pElement.innerText = flags.alt || countryName;
    pElement.setAttribute('class', 'card-text');

    const anchorElement = document.createElement('a');
    anchorElement.innerText = 'Go somewhere';
    anchorElement.setAttribute('href', '#');
    anchorElement.setAttribute('class', 'btn btn-primary');

    const cardBody = document.createElement('div');
    cardBody.setAttribute('class', 'card-body');
    cardBody.append(
      h5Element,
      pElement,
      anchorElement
    );

    const imgElement = document.createElement('img');
    imgElement.setAttribute('src', flags.svg);
    imgElement.setAttribute('alt', flags.alt || countryName);
    imgElement.setAttribute('class', 'card-img-top');

    const card = document.createElement('div');

    card.setAttribute('class', 'card');
    card.style.width = '18rem';

    card.append(
      imgElement,
      cardBody
    );


    rootDiv.appendChild(card);
  });
  console.log(response)
}