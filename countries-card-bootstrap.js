// Step 1: Hit the API and get the Data
var request = new XMLHttpRequest();

request.open('GET', 'https://restcountries.com/v3.1/all');

request.send(null);

request.onload = function () {
  var response = JSON.parse(request.responseText);

  // response data is array and we need to iterate  over it
  // for each with destructuring
  response.forEach(({ flags, name: { common: countryName } }) => {
    console.log(flags, countryName);
    // create img card element from bootstrap
    // <div class="card" style="width: 18rem;">
    //   <img src="..." class="card-img-top" alt="...">
    //   <div class="card-body">
    //     <h5 class="card-title">Card title</h5>
    //     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    //     <a href="#" class="btn btn-primary">Go somewhere</a>
    //   </div>
    // </div>    
  });
  console.log(response)
}