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
const signIn = document.getElementById('signIn');
signIn.addEventListener('click', (e)=>{
    logInDiv.classList.add('display')
})

const title =localStorage.getItem('title')
const category =localStorage.getItem('category')
const image =localStorage.getItem('image')
const rating =localStorage.getItem('rating')
const data = JSON.parse(rating) 
const rate = data.rate
const count = data.count
const priceString = localStorage.getItem('price');
const priceNumber = parseInt(priceString);
const description =localStorage.getItem('description')
const tip = priceNumber * 10 / 100
const total = priceNumber + tip

const purchasedItem = document.getElementById('purchasedItem')
function showItem(){
    purchasedItem.innerHTML = `
    <div class="container my-5 d-flex justify-content-center">
        <table>
            <tr class="d-flex flex-column gap-3 align-items-center"> 
                <th>${title}</th>
                <th><img src="${image}" class="purchased"></th>
                <th>
                Price: ${priceNumber}$
                </th>
                <th>
                commission: ${tip}$
                </th>
                <th>
                Total Price: ${total}
                </th>
            </tr>
        </table>
    </div>
    `
}

showItem()