let orders = document.querySelectorAll('.order-now');

let products = [
    {
        size: 'small',
        crust: 'crispy',
<<<<<<< HEAD
        toppings: 'vanilla',
=======
        toppings: 'mushroom',
>>>>>>> 4d01e02a1c3f597e49bc78c0dea8072cc8e03627
        price: 800,
        Ordered: 0
    },
    {
        size: 'small',
        crust: 'stuffed',
        toppings: 'chocolate',
        price: 930,
        Ordered: 0
    },
    {
        size: 'small',
        crust: 'glutenfree',
        toppings: 'sauced',
        price: 750,
        Ordered: 0
    },
    {
        size: 'medium',
        crust: 'crispy-medium',
        toppings: 'vanilla',
        price: 1200,
        Ordered: 0
    },
    {
        size: 'medium',
        crust: 'stuffed-medium',
        toppings: 'chocolate',
        price: 1350,
        Ordered: 0
    },
    {
        size: 'medium',
        crust: "glutenfree-medium",
        toppings: 'sauced',
        price: 1150,
        Ordered: 0
    },
    {
        size: 'large',
        crust: 'crispy-large',
        toppings: 'vanilla',
        price: 2000,
        Ordered: 0
    },
    {
        size: 'large',
        crust: 'stuffed-large',
        toppings: 'chocolate',
        price: 2500,
        Ordered: 0
    },
    {
        size: 'large',
        crust: 'glutenfree-large',
        toppings: 'sauced',
        price: 1850,
        Ordered: 0
    }
]
function totalCost(product) {
    let orderCost = localStorage.getItem('totalCost');
    if (orderCost != null) {
       orderCost = parseInt(orderCost);
        localStorage.setItem("totalCost", orderCost + product.price);
    } else {
        localStorage.setItem("totalCost", product.price);
    }
}

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
 localStorage.setItem('productsOrdered', JSON.stringify(orderItems));
}


function displayOrder() {
    let orderItems = localStorage.getItem("productsOrdered");
    orderItems = JSON.parse(orderItems);
    let productContainer = document.querySelector('.products');
    let orderCost = localStorage.getItem('totalCost');
    if( orderItems && productContainer) {
        productContainer.innerHTML = '';
        Object.values(orderItems).map(item => {
            productContainer.innerHTML += `
            <div class="product">
            <ion-icon name="close-circle"></ion-icon>
            <img src="/css/${item.crust}.jpeg">
            <span>${item.toppings}</span>
            </div>
            <div class="price">${item.price}</div>
            <div class="quantity">
            <ion-icon class = "decrease" name="chevron-down-circle-outline"></ion-icon>
            <span>${item.Ordered}</span>
            <ion-icon class = "increase" name="add-circle-outline"></ion-icon>
            </div>
            <div class="total">
            Ksh.${
                item.Ordered * item.price
            }.00
            </div>`;
            

        });
        productContainer.innerHTML += `
        <div class="basketTotalContainer">
        <h4 class="basketTotalTitle">
        Order Total:
        </h4><br>
        <h4 class="basketTotal">Ksh.<br> ${orderCost}.00 </h4>
        `;
    }
}

onLoadOrderNumbers();
displayOrder();


<<<<<<< HEAD
//cart box
const order = document.querySelector('.order');
const orderBox = document.querySelector('.order-box');
const orderClose = document.querySelector('.fa-close');
order.addEventListener('click', function() {
        orderBox.classList.add('active');
        
    });
    orderClose.addEventListener('click', function() {
        orderBox.classList.remove('active');
    });

    const orderP = document.querySelector('.order span');
    // orderP.innerHTML = products;

    const cardBoxTable = orderBox.querySelector('table');


=======
// //cart box
// const order = document.querySelector('.order');
// const orderBox = document.querySelector('.order-box');
// const orderClose = document.querySelector('.fa-close');
// order.addEventListener('click', function() {
//         orderBox.classList.add('active');
        
//     });
//     orderClose.addEventListener('click', function() {
//         orderBox.classList.remove('active');
//     });

//     const orderSpan = document.querySelector('.order span');
//     // orderP.innerHTML = products;

//     const orderBoxTable = orderBox.querySelector('table');


//     // adding data to shopping cart 
// 	let Ordered = 0;
// 	JSON.parse(localStorage.getItem('itemsOrdered')).map(item=>{
// 		Ordered= Ordered+item.Ordered
// ;	});
// 	orderSpan.innerHTML = Ordered;


// 	//adding orderbox data in table
// 	let tableData = '';
// 	tableData += '<tr><th>S Ordered.</th><th>Item Size</th><th>Item Ordered</th><th>item Price</th><th></th></tr>';
// 	if(JSON.parse(localStorage.getItem('itemsOrdered'))[0] === null){
// 		tableData += '<tr><td colspan="5">No items found</td></tr>'
// 	}else{
// 		JSON.parse(localStorage.getItem('itemsOrdered')).map(item=>{
// 			tableData += '<tr><th>'+item.crust+'</th><th>'+item.size+'</th><th>'+item.ordered+'</th><th>'+item.price+'</th><th><a href="#" onclick=Delete(this);>Delete</a></th></tr>';
// 		});
// 	}
// 	orderBoxTable.innerHTML = tableData;


    window.onload = function(){
        //cart box
        
    
    
        // adding data to localstorage
        // const attToCartBtn = document.getElementsByClassName('order-now');
        // let items = [];
        // for(let i=0; i<attToCartBtn.length; i++){
        //     attToCartBtn[i].addEventListener("click",function(e){
        //         if(typeof(Storage) !== 'undefined'){
        //             let item = {
        //                     id:i+1,
        //                     name:e.target.parentElement.children[0].textContent,
        //                     price:e.target.parentElement.children[1].children[0].textContent,
        //                     no:1
        //                 };
        //             if(JSON.parse(localStorage.getItem('items')) === null){
        //                 items.push(item);
        //                 localStorage.setItem("items",JSON.stringify(items));
        //                 window.location.reload();
        //             }else{
        //                 const localItems = JSON.parse(localStorage.getItem("items"));
        //                 localItems.map(data=>{
        //                     if(item.id == data.id){
        //                         item.no = data.no + 1;
        //                     }else{
        //                         items.push(data);
        //                     }
        //                 });
        //                 items.push(item);
        //                 localStorage.setItem('items',JSON.stringify(items));
        //                 window.location.reload();
        //             }
        //         }else{
        //             alert('local storage is not working on your browser');
        //         }
        //     });
        // }
        // adding data to shopping cart 
        const orderSpan = document.querySelector('.order span');
        let Ordered = 0;
        JSON.parse(localStorage.getItem('items')).map(item=>{
            Ordered = Ordered+item.Ordered
    ;	});
        orderSpan.innerHTML = Ordered;
    
    
        //adding cartbox data in table
        const orderBoxTable = orderBox.querySelector('table');
        let tableData = '';
        tableData += '<tr><th>S no.</th><th>Item Name</th><th>Item No</th><th>item Price</th><th></th></tr>';
        if(JSON.parse(localStorage.getItem('orderItems'))[0] === null){
            tableData += '<tr><td colspan="5">No items found</td></tr>'
        }else{
            JSON.parse(localStorage.getItem('orderItems')).map(item=>{
                tableData += '<tr><th>'+data.id+'</th><th>'+item.name+'</th><th>'+item.Ordered+'</th><th>'+item.price+'</th><th><a href="#" onclick=Delete(this);>Delete</a></th></tr>';
            });
        }
        cardBoxTable.innerHTML = tableData;
    }
>>>>>>> display major changes















// alert("Welcome Vincent")
// // Crispy, Stuffed, Gluten-free


// function Pizza(size,crust,toppings) {

// this.size = size;
// this.crust = crust;
// this.toppings = toppings;
// }
  
//   var Crunchy = new Pizza("large", "Stuffed", "mushroomSoup");
//   console.log("I love Water")
  