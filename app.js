const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
    //get radndom number between 0-3
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber]
})
// set up a function that generates a random number
//use floor method to round it down
function getRandomNumber() {
    return Math.floor(Math.random() * colors.length)
}