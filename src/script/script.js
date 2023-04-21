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
        const itemDiv = document.createElement('div');
        itemDiv.innerHTML = `
        <div id="imageDiv">
            <a href="oneProduct.html?${item.id}">
                <img src="${item.image}" id="itemImg" class="containerImg">
            </a>
            <p>${item.price}$</p>
        </div>
        `;
        itemDiv.addEventListener('click',()=>{
            localStorage.setItem('id',item.id)
            localStorage.setItem('category',item.category)
            localStorage.setItem('image',item.image)
            localStorage.setItem('price',item.price)
            const array = item.rating;
            localStorage.setItem('rating',JSON.stringify(array))
            localStorage.setItem('title',item.title)
            localStorage.setItem('description',item.description)
        });
       
        container.appendChild(itemDiv);
    });
}
function displayJewelry(data){
    const jewelryData = data.filter(item => item.category === "jewelery")
    console.log(jewelryData);
    const container = document.getElementById('jewelry');
    jewelryData.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.innerHTML = `
        <div>
            <a href="oneProduct.html?${item.id}">
                <img src="${item.image}" id="itemImg" class="containerImg">
            </a>
            <p>${item.price}$</p>
        </div>
        `;
        itemDiv.addEventListener('click',()=>{
            localStorage.setItem('id',item.id)
            localStorage.setItem('category',item.category)
            localStorage.setItem('image',item.image)
            localStorage.setItem('price',item.price)
            const array = item.rating;
            localStorage.setItem('rating',JSON.stringify(array))
            localStorage.setItem('title',item.title)
            localStorage.setItem('description',item.description)
        });
        container.appendChild(itemDiv);
    });
}
function displaytechnic(data){
    const technicData = data.filter(item => item.category === "electronics")
    console.log(technicData);
    const container = document.getElementById('technic');
    technicData.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.innerHTML = `
            <a href="oneProduct.html?${item.id}">
                <img src="${item.image}" id="itemImg" class="containerImg">
            </a>
            <p>${item.price}$</p>
        `;
        itemDiv.addEventListener('click',()=>{
            localStorage.setItem('id',item.id)
            localStorage.setItem('category',item.category)
            localStorage.setItem('image',item.image)
            localStorage.setItem('price',item.price)
            const array = item.rating;
            localStorage.setItem('rating',JSON.stringify(array))
            localStorage.setItem('title',item.title)
            localStorage.setItem('description',item.description)
        });
        container.appendChild(itemDiv);
    });
}





const burger = document.getElementById('burger')
burger.addEventListener('click', ()=>{
    const menu = document.getElementById('menu')
    menu.classList.toggle('display')
})
const shopCart = document.getElementById('shopCart')
shopCart.addEventListener('click', ()=>{
    const cartItems = document.getElementById('cartItems')
    cartItems.classList.toggle('display')
})

const logIn = document.getElementById('logIn');
const logInDiv = document.getElementById('logInDiv');
logIn.addEventListener('click', ()=>{
    logInDiv.classList.toggle('display')
})
const logInMenu = document.getElementById('logInMenu');
logInMenu.addEventListener('click', ()=>{
    logInDiv.classList.toggle('display')
})
 const signUpDiv = document.getElementById('signUpDiv')
 const signUp = document.getElementById('signUp')
 signUp.addEventListener('click', ()=>{
    signUpDiv.classList.toggle('display')
})
 const signUpButton = document.getElementById('signUpButton')
 signUpButton.addEventListener('click', ()=>{
    signUpDiv.classList.toggle('display')
})
const signUpMenu = document.getElementById('signUpMenu')
 signUpMenu.addEventListener('click', ()=>{
    signUpDiv.classList.toggle('display')
})



const signIn = document.getElementById('signIn');
signIn.addEventListener('click', (e)=>{
    logInDiv.classList.add('display')
})

const boxes = document.querySelectorAll('.text');
window.addEventListener('scroll',checkBoxes)
checkBoxes()
function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4
    console.log(triggerBottom)
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        if (boxTop < triggerBottom){
            box.classList.add('show')
        }
       
    })

  }
const box = document.querySelector('.header2');
window.addEventListener('scroll',checkBox)
checkBox()
function checkBox() {
    const triggerBottom = window.innerHeight / 5 * 4
    const boxTop = box.getBoundingClientRect().top
    if (boxTop < triggerBottom){
        box.classList.add('show2')
    }
  }
