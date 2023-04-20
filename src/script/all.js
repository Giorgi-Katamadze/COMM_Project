const API = "https://fakestoreapi.com/products";
getData(API);
async function getData(url) {
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
  displayItems(data)
}
function displayItems(data){
    const allDiv = document.getElementById("allProduct")
    data.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.innerHTML = `
        <div class="d-flex container allprod pb-5 gap-2 my-5 col-8">
            <div class="d-flex justify-content-center col-6 imgDiv">
                <div>
                    <img src="${item.image}" class="containerImg">
                </div>
            </div>    
            <div class="infoDiv col-6 d-flex flex-column gap-5 justify-content-center">
                <div>
                    <h2>${item.title}</h2>
                </div>
                <div>
                    <p>Rating: ${item.rating.rate}</p>
                    <h4>Price: ${item.price}$</h4>
                    <button id="cartBtn-${item.id}" class="mt-5 button"><a href="oneProduct.html?${item.id}">Learn More</a></button>

                </div>
            </div>
        </div>
        `
        allDiv.appendChild(itemDiv)
        addButtonListener(item);
        });
}
function addButtonListener(item) {
    const button = document.querySelector(`#cartBtn-${item.id}`);
    button.addEventListener('click', () => {
      localStorage.setItem('id',item.id);
      localStorage.setItem('category',item.category);
      localStorage.setItem('image',item.image);
      localStorage.setItem('price',item.price);
      const array = item.rating;
      localStorage.setItem('rating',JSON.stringify(array));
      localStorage.setItem('title',item.title);
      localStorage.setItem('description',item.description);
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
const signUpMenu = document.getElementById('signUpMenu')
 signUpMenu.addEventListener('click', ()=>{
    signUpDiv.classList.toggle('display')
})
const logInMenu = document.getElementById('logInMenu');
logInMenu.addEventListener('click', ()=>{
    logInDiv.classList.toggle('display')
})