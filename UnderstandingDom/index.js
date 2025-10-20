// Write the code as shown in the video below:
const mainHeading = document.querySelector("#main-heading");
mainHeading.style.textAlign = "center";

const fruits = document.querySelector(".fruits");
fruits.style.backgroundColor = "grey";
fruits.style.padding = "30px";
fruits.style.margin = "30px";
fruits.style.width = "50%";
fruits.style.borderRadius = "5px";
fruits.style.listStyleType = "none";

const basketHeading = document.querySelector("#basket-heading");
basketHeading.style.marginLeft = "30px";

const fruitItems = document.querySelectorAll(".fruit");
for (let i = 0; i < fruitItems.length; i++){
    fruitItems[i].style.backgroundColor = "white";
    fruitItems[i].style.padding = "10px";
    fruitItems[i].style.margin = "10px";
    fruitItems[i].style.borderRadius = "5px";
}
// Write answer to the questions asked below:
basketHeading.style.color = "brown";
const evenFruitItems = document.querySelectorAll(".fruit:nth-child(even)");
for (let i = 0; i < evenFruitItems.length; i++){
    evenFruitItems[i].style.backgroundColor = "brown";
    evenFruitItems[i].style.color = "white";
}