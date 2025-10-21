// Write your code below:
const divs = document.getElementsByTagName("div");
const firstDiv = divs[0];
const subHeadingElement = document.createElement("h3");
const subHeading = document.createTextNode("Buy high quality organic fruits online");

subHeadingElement.appendChild(subHeading);
firstDiv.appendChild(subHeadingElement);
subHeadingElement.style.fontStyle = "italic";

const secondDiv = divs[1];
const paragraphElement = document.createElement("p");
const paragraphText = document.createTextNode("Total fruits: 4");
paragraphElement.appendChild(paragraphText);
secondDiv.children[0].appendChild(paragraphElement);
paragraphElement.setAttribute("id", "fruits-total");