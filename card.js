const foodItems=["Vada Pav","Mango Ice Cream","Dosa","Dhokala","Idali"];
const foodList=document.querySelector("#list");
for(let i=0;i<foodItems.length;i++){
    foodList.innerHTML+=`<div class="foodCard">
    <h2>${foodItems[i]}${randomImoji()}</h2></div>  `
}
function randomImoji(){
    const Emoji=["🥰","😊","😋","😎","😍","☺️","🙂","🤗","🤓"];
    const min=0;
    const max=Emoji.length;
    const EmojiIndex=Math.floor(Math.random()*(max-min)+min);
    return Emoji[EmojiIndex];
}
const emoji=randomImoji();
console.log(emoji);
