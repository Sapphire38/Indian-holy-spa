let productsList= [];
let carrito = [];
let total = 0;


function add(productID, price){
    const product = productsList.find(p => p.id == productID)
    if(product != undefined && product.stock > 0) {
        product.stock--
    }
    console.log(productID, price);
    carrito.push(productID)
    total = total + price;
    document.getElementById("total").innerHTML= `$${total}`
    displayProducts()
}

async function pay(){
    const productsList = await (await fetch("/api/pay",{
        method: "post",
        body: JSON.stringify(carrito),
        headers:{
            "Content-Type": "application/json",
        }
    })).json();
}

//----
function displayProducts(){
    let productsHTML = '';
    productsList.forEach(element => {
        let buttonAddCarrito =  `<button onclick="add('${element.id}', ${element.price})">+</button> `

        if(element.stock <= 0){
            buttonAddCarrito =  `<button disabled onclick="add('${element.id}', ${element.price})">+</button> `
        }


        productsHTML +=
            `<div class="card">
                <div class="cont-img">
                    <img src="${element.img}">
                </div>
                <div class="text-item">
                    <h4>${element.name}</h4>    
                    <h6>${element.description}</h6>
                    <h6>stock: ${element.stock}</h6>
                </div>
                <div class="price-add">
                    <h6>$${element.price}</h6>
                    ${buttonAddCarrito}
                </div>
            </div>`
    });
    document.getElementById("content-products").innerHTML = productsHTML;
}

window.onload = async() => {
   productsList = await (await fetch("/api/products")).json();
   console.log(productsList)
   displayProducts()
}


