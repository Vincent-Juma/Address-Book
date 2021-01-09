let orders = document.querySelectorAll('.order-now');

let products = [
    {
        size: 'small',
        crust: 'crispy',
        price: 800,
        Ordered: 0
    },
    {
        size: 'small',
        crust: 'stuffed',
        price: 930,
        Ordered: 0
    },
    {
        size: 'small',
        crust: 'glutenFree',
        price: 750,
        Ordered: 0
    },
    {
        size: 'medium',
        crust: 'crispy',
        price: 1200,
        Ordered: 0
    },
    {
        size: 'medium',
        crust: 'stuffed',
        price: 1350,
        Ordered: 0
    },
    {
        size: 'medium',
        crust: 'glutenFree',
        price: 1150,
        Ordered: 0
    },
    {
        size: 'large',
        crust: 'crispy',
        price: 2000,
        Ordered: 0
    },
    {
        size: 'large',
        crust: 'stuffed',
        price: 2500,
        Ordered: 0
    },
    {
        size: 'large',
        crust: 'glutenFree',
        price: 1850,
        Ordered: 0
    }
]

for (let i=0; i < orders.length; i++) {
    orders[i].addEventListener('click', () => {
        orderNumbers(products[i]);
        totalCost(products[i])
    })
}
function onLoadOrderNumbers() {
    let productNumbers = localStorage.getItem('orderNumbers');

    if (productNumbers) {
        document.querySelector('.order span').textContent = productNumbers;
    }
}

function orderNumbers(product) {
    console.log("The product clicked is", product);
    let productNumbers = localStorage.getItem('orderNumbers');
    localStorage.setItem('orderNumbers', 1);
    productNumbers = parseInt(productNumbers);

    if (productNumbers) {
        localStorage.setItem('orderNumbers', productNumbers + 1); 
        document.querySelector('.order span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('orderNumbers', 1);
        document.querySelector('.order span').textContent = 1;
    }
    setItems(product);


}
function setItems(product) {
    let orderItems = localStorage.getItem('productsOrdered');
    orderItems = JSON.parse(orderItems);

    if(orderItems != null) {
        if (orderItems[product.crust] == undefined) {
            orderItems = {
                ...orderItems,
                [product.crust]: product
            }
        }
        orderItems[product.crust].Ordered +=1;
        } else {
        product.Ordered = 1;
        orderItems = {
            [product.crust]: product
        }
 }
 function totalCost(product) {
     let orderCost = localStorage.getItem('totalCost');
     if (orderCost != null) {
        orderCost = parseInt(orderCost);
         localStorage.setItem("totalCost", orderCost + product.price);
     } else {
         localStorage.setItem("totalCost", product.price);
     }
 }
    localStorage.setItem('productsOrdered', JSON.stringify(orderItems));
}

function displayOrder() {
    let orderItems = localStorage.getItem("productsOrdered");
    orderItems = JSON.parse(orderItems);
    let productContainer = document.querySelector('.products');
    if( orderItems && buy) {
        buy.innerHTML = '';
        Object.values(orderItems).map(item => {
            productContainer.innerHTML += `
            <div class="product">
            <ion-icon name="close-circle"></ion-icon>
            <img src="/css/${item.crust}.jpg">
            <span>${item.name}</span>
            </div>
            <div class="price">Ksh${item.price}.00</div>
            <div class="quantity">
            <ion-icon class = "decrease" name="chevron-down-circle-outline"></ion-icon>
            <span>${item.Ordered}</span>
            <ion-icon class = "increase" name="add-circle-outline"></ion-icon>
            </div>
            <div class="total">
            Ksh${
                item.Ordered * item.price
            }.00
            </div>`;
            

        });
    }
}


onLoadOrderNumbers();
displayOrder();
















// alert("Welcome Vincent")
// // Crispy, Stuffed, Gluten-free


// function Pizza(size,crust,toppings) {

// this.size = size;
// this.crust = crust;
// this.toppings = toppings;
// }
  
//   var Crunchy = new Pizza("large", "Stuffed", "mushroomSoup");
//   console.log("I love Water")
  