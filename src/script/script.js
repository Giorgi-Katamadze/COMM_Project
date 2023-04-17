const API = "https://fakestoreapi.com/products";
getData(API);
async function getData(url) {
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
  displayClothes(data)
  displayJewelry(data)
  displaytechnic(data)
}

const textEl = document.getElementById("videoText")
let index = 0
const text = `Search
Find
And Purchase`
let speed = 100
function writeText() {
    textEl.innerText = text.slice(0,index)
    textEl.classList.add('display-4')
    if(index < text.length){
        index++
        setTimeout(writeText, speed)
    }
    else{
        setTimeout(decreaseText, speed)
    }
 }
function decreaseText() {
textEl.innerText = text.slice(0,index)
if(index > 0){
    index--
    setTimeout(decreaseText, speed)
}
}
writeText()

function displayClothes(data){
    const clothesData = data.filter(item => item.category === "men's clothing" || item.category === "women's clothing")
    console.log(clothesData);
    const container = document.getElementById('clothes');
    clothesData.forEach(item => {
        container.innerHTML += `
        <div>
            <img src="${item.image}" id="itemImg" class="containerImg">
            <p>${item.price}$</p>
        </div>
        `;
    });
}
function displayJewelry(data){
    const jewelryData = data.filter(item => item.category === "jewelery")
    console.log(jewelryData);
    const container = document.getElementById('jewelry');
    jewelryData.forEach(item => {
        container.innerHTML += `
        <div>
            <img src="${item.image}" id="itemImg" class="containerImg">
            <p>${item.price}$</p>
        </div>
        `;
    });
}
function displaytechnic(data){
    const technicData = data.filter(item => item.category === "electronics")
    console.log(technicData);
    const container = document.getElementById('technic');
    technicData.forEach(item => {
        container.innerHTML += `
        <div>
            <img src="${item.image}" id="itemImg" class="containerImg">
            <p>${item.price}$</p>
        </div>
        `;
    });
}





const burger = document.getElementById('burger')
burger.addEventListener('click', ()=>{
    const menu = document.getElementById('menu')
    menu.classList.toggle('display')
})

const logIn = document.getElementById('logIn');
const logInDiv = document.getElementById('logInDiv');
logIn.addEventListener('click', ()=>{
    logInDiv.classList.toggle('display')
})
const signIn = document.getElementById('signIn');
signIn.addEventListener('click', (e)=>{
    logInDiv.classList.add('display')
})