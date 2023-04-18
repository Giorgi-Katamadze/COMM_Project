const shopCart = document.getElementById('shopCart')
shopCart.addEventListener('click', ()=>{
    const cartItems = document.getElementById('cartItems')
    cartItems.classList.toggle('display')
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
    <h2>${price}</h2>
    <p>Rate: ${rate} </br> Count: ${count}</p>
    </div>
    <p>${description}</p>
    `
}
showItemPic()
showItemInfo()

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
            <button id="removeBtn">Remove</button>
        </div>
        <div class="mt-5">
            <a href="payment.html" class="purchase">Purchase</a>
        </div>
    </div>
    `
    const removeBtn = cartItems.querySelector('#removeBtn')
    removeBtn.addEventListener('click', () => {
        removeBtn.parentElement.parentElement.remove()
    })
})
