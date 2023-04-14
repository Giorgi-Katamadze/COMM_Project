const API = "https://fakestoreapi.com/products"

getData(API)
async function getData(url){
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    displayProducts(data);
}

const divHTML = document.getElementById("data")
function displayProducts(data){
    data.forEach((product) => {
        divHTML.innerHTML += `
        <img src="${product.image}">
        `
    });
}