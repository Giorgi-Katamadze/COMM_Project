const shopCart = document.getElementById('shopCart')
shopCart.addEventListener('click', ()=>{
    const cartItems = document.getElementById('cartItems')
    cartItems.classList.toggle('display')
})
const signUpDiv = document.getElementById('signUpDiv')
const signUp = document.getElementById('signUp')
signUp.addEventListener('click', ()=>{
   signUpDiv.classList.toggle('display')
})

const burger = document.getElementById('burger')
burger.addEventListener('click', ()=>{
    const menu = document.getElementById('menu')
    menu.classList.toggle('display')
})
const signIn = document.getElementById('signIn');
signIn.addEventListener('click', (e)=>{
    logInDiv.classList.add('display')
})
const signUpMenu = document.getElementById('signUpMenu')
 signUpMenu.addEventListener('click', ()=>{
    signUpDiv.classList.toggle('display')
})
const signUpButton = document.getElementById('signUpButton')
signUpButton.addEventListener('click', ()=>{
   signUpDiv.classList.toggle('display')
})
const logInMenu = document.getElementById('logInMenu');
logInMenu.addEventListener('click', ()=>{
    logInDiv.classList.toggle('display')
})
const logIn = document.getElementById('logIn');
const logInDiv = document.getElementById('logInDiv');
logIn.addEventListener('click', ()=>{
    logInDiv.classList.toggle('display')
})

const title =localStorage.getItem('title')
const category =localStorage.getItem('category')
const image =localStorage.getItem('image')
const rating =localStorage.getItem('rating')
const data = JSON.parse(rating) 
const rate = data.rate
const count = data.count
const price =localStorage.getItem('price')

const description =localStorage.getItem('description')


const pictureDiv = document.getElementById('pictureDiv')
const infoDiv = document.getElementById('infoDiv')
function showItemPic(){
    pictureDiv.innerHTML =`
    <img class="itemImg" src="${image}">
    `
}
function showItemInfo(){
    infoDiv.innerHTML =`
    <div>
    <h2>${title}</h2>
    <h6>${category}</h6>
    </div>
    <div>
    <h2>${price}$</h2>
    <p>Rate: ${rate} </br> Count: ${count}</p>
    </div>
    <p>${description}</p>
    `
}
showItemPic()
showItemInfo()


const priceString = localStorage.getItem('price');
const priceNumber = parseInt(priceString);
const tip = priceNumber * 10 / 100
const total = priceNumber + tip

const cartBtn = document.getElementById('cartBtn')
cartBtn.addEventListener('click', ()=>{
    const cartItems = document.getElementById('cartItems')
    cartItems.innerHTML = `
    <div class="d-flex flex-wrap">
        <div class="col-6">
            <img src="${image}">
        </div>
        <div class="col-6">
            <p>${price}$</p>
        </div>
        <div class="mt-5">
            <button class="mx-auto d-block" id="removeBtn">Remove</button>
        </div>
        <div class="mt-5">
            <hr class="mt-5">
            <p>Commission: ${tip}$</p>
            <p>Total: ${total}$</p>
            <a href="payment.html" class="purchase">Purchase</a>
        </div>
    </div>
    `
    const removeBtn = cartItems.querySelector('#removeBtn')
    removeBtn.addEventListener('click', () => {
        removeBtn.parentElement.parentElement.remove()
    })
})

