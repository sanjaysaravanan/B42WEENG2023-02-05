const h1Element = document.createElement('h1');

// innerText --> refers simple text inside an element
// h1Element.innerText = '<span style="color: yellow">B42WEENG</span>';

// innerHTML -->
h1Element.innerHTML = '<span style="color: yellow">B42WEENG</span>';

const anchorElement = document.createElement('a');
anchorElement.innerText = 'Click Here For Facebook';

// set an attrubute href
anchorElement.setAttribute('href', 'https://facebook.com');

// appendChild
// select body
// console.log(document.body.appendChild(h1Element));
// console.log(document.body.appendChild(anchorElement));

// Create an image element with below attribute and append it to body
// https://tinyjpg.com/images/social/website.jpg
// also alt should be present

const imgElement = document.createElement('img');

imgElement.setAttribute('src', 'https://tinyjpg.com/images/social/website.jpg');
imgElement.setAttribute('alt', 'Panda');

imgElement.style.height = '500px';
imgElement.style.width = '700px';
imgElement.style.display = 'block';

// create a div with background-color blue and border-top red border-bottom green
const divElement = document.createElement('div');
// Note the Camelcaseed CSS Props
divElement.style.height = '100px';
divElement.style.width = '100px';
divElement.style.backgroundColor = 'blue';
divElement.style.borderTop = '5px solid red';
divElement.style.borderBottom = '5px solid green';


// document.body.append(
//   h1Element,
//   anchorElement,
//   'B42WEENG',
//   imgElement,
//   divElement
// );

// append all the above created to the div which has id as *root*

// get the element with the id
const rootElement = document.getElementById('root');

console.log(rootElement);

var firstName = document.createElement("input");
firstName.setAttribute("type", "text");
firstName.setAttribute("class", "form-control");
firstName.setAttribute("placeholder", "First Name");
firstName.setAttribute("value", "Apple");

var lastName = document.createElement("input");
lastName.setAttribute("type", "text");
lastName.setAttribute("class", "form-control");
lastName.setAttribute("placeholder", "Last Name");
lastName.setAttribute("value", "r");

rootElement.append(
  h1Element,
  anchorElement,
  'B42WEENG',
  imgElement,
  divElement,
  firstName,
  lastName
);


const classElements = document.getElementsByClassName('grp-ele');

console.log(classElements);

// selection of element / elements using css selector
const seledtedAnchor = document.querySelector('a');

console.log(seledtedAnchor);

// using class in selector
const seledtedDiv = document.querySelector('.grp-ele');

console.log(seledtedDiv);

// using id in selector
const seledtedDivUsingId = document.querySelector('#div-two');

console.log(seledtedDivUsingId);

// Query Selector all
const divElements = document.querySelectorAll('div');

console.log(divElements);


// using inner child slection
const innerATag = document.querySelectorAll('.com-class > a');
console.log(innerATag)