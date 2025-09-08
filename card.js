const foodItems=["vada pav","mango","dosa","dhokala"];
const foodList=document.querySelector("#list");

for(let     i=0;i<foodItems.length;i++){
    foodList.innerHTML+=`<div class="foodCard">
    <h2>${foodItems[i]}</h2></div>  `
}