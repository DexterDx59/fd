  var config = {
    apiKey: "AIzaSyD18yvztaMcuduTcb08kH-tPoTPjd1PInk",
    authDomain: "techcare-63a54.firebaseapp.com",
    databaseURL: "https://techcare-63a54.firebaseio.com",
    projectId: "techcare-63a54",
    storageBucket: "techcare-63a54.appspot.com",
    messagingSenderId: "423664135845"
  };
  firebase.initializeApp(config);
  localStorage.removeItem('cart');
  var products=[];
  var CartItems=[];
  var cart_n = document.getElementById('cart_n');

  var PCDIV= document.getElementById("PCDIV");
  var MoniteursDIV= document.getElementById("MoniteursDIV");
  var AccessoiresDIV= document.getElementById("AccessoiresDIV");
  var PC=[
      {name:'TITAN' ,price:1250},
      {name:'Alienware' ,price:1500},
      {name:'HP OMEN 880-155NF' ,price:1980},
      {name:'NightShark' ,price:2600},
      {name:'Asus' ,price:1789},
      {name:'SpiritGamer' ,price:3200},
];
  var Moniteurs=[
      {name:'Moniteurs #1' ,price:450},
      {name:'Moniteurs #2' ,price:600},
      {name:'Moniteurs #3' ,price:999}
];
  var Accessoires=[
    {name:'Accessoires #1' ,price:25},
    {name:'Accessoires #2' ,price:165},
    {name:'Accessoires #3' ,price:75}
];

function HTMLPCProducts(con){
    let URL= `img/TITAN${con}.jpg`;
    let btn = `btnPC${con}`;
    return `
        <div class="col-md-4">
            <div class="card mb-4 shadow-sm">
                <img class="card-img-top" style="height:16rem;" src="${URL}" alt="Card image cap">
                <div class="card-body">
                    <i style="color:orange;" class="fa fa-star"></i>
                    <i style="color:orange;" class="fa fa-star"></i>
                    <i style="color:orange;" class="fa fa-star"></i>
                    <i style="color:orange;" class="fa fa-star"></i>
                    <i style="color:orange;" class="fa fa-star"></i>
                    <p class="card-text">${PC[con-1].name}</p>
                    <p class="card-text">Price: ${PC[con-1].price}.00</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button type="button" onclick="cart2('${PC[con-1].name}','${PC[con-1].price}','${URL}','${con}','${btn}')" class=" btn btn-sm btn-outline-primary"><a href="cart.html" style="color:inherit">Buy</a></button>
                            <button id="${btn}" type="button" onclick="cart('${PC[con-1].name}','${PC[con-1].price}','${URL}','${con}','${btn}')" class=" btn btn-sm btn-outline-primary">Add to cart</button>
                        </div>
                        <small class="text-muted">Pay Delivery</small>
                    </div>
                </div>
            </div>
        </div>
    `
}
function HTMLMoniteursProducts(con){
    let URL= `img/Moniteurs/Moniteur${con}.jpg`;
    let btn = `btnMoniteurs${con}`;
    return `
        <div class="col-md-4">
            <div class="card mb-4 shadow-sm">
                <img class="card-img-top" style="height:16rem;" src="${URL}" alt="Card image cap">
                <div class="card-body">
                    <i style="color:orange;" class="fa fa-star"></i>
                    <i style="color:orange;" class="fa fa-star"></i>
                    <i style="color:orange;" class="fa fa-star"></i>
                    <i style="color:orange;" class="fa fa-star"></i>
                    <i style="color:orange;" class="fa fa-star"></i>
                    <p class="card-text">${Moniteurs[con-1].name}</p>
                    <p class="card-text">Price: ${Moniteurs[con-1].price}.00</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button type="button" onclick="cart2('${Moniteurs[con-1].name}','${Moniteurs[con-1].price}','${URL}','${con}','${btn}')" class=" btn btn-sm btn-outline-primary"><a href="cart.html" style="color:inherit">Buy</a></button>
                            <button id="${btn}" type="button" onclick="cart('${Moniteurs[con-1].name}','${Moniteurs[con-1].price}','${URL}','${con}','${btn}')" class=" btn btn-sm btn-outline-primary">Add to cart</button>
                        </div>
                        <small class="text-muted">Pay Delivery</small>
                    </div>
                </div>
            </div>
        </div>
    `
}
function HTMLAccessoiresProducts(con){
    let URL= `img/Accessoires/Accessoires${con}.jpg`;
    let btn = `btnAccessoires${con}`;
    return `
        <div class="col-md-4">
            <div class="card mb-4 shadow-sm">
                <img class="card-img-top" style="height:16rem;" src="${URL}" alt="Card image cap">
                <div class="card-body">
                    <i style="color:orange;" class="fa fa-star"></i>
                    <i style="color:orange;" class="fa fa-star"></i>
                    <i style="color:orange;" class="fa fa-star"></i>
                    <i style="color:orange;" class="fa fa-star"></i>
                    <i style="color:orange;" class="fa fa-star"></i>
                    <p class="card-text">${Accessoires[con-1].name}</p>
                    <p class="card-text">Price: ${Accessoires[con-1].price}.00</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button type="button" onclick="cart2('${Accessoires[con-1].name}','${Accessoires[con-1].price}','${URL}','${con}','${btn}')" class=" btn btn-sm btn-outline-primary"><a href="cart.html" style="color:inherit">Buy</a></button>
                            <button id="${btn}" type="button" onclick="cart('${Accessoires[con-1].name}','${Accessoires[con-1].price}','${URL}','${con}','${btn}')" class=" btn btn-sm btn-outline-primary">Add to cart</button>
                        </div>
                        <small class="text-muted">Pay Delivery</small>
                    </div>
                </div>
            </div>
        </div>
    `
}
function animation(){
    const toast=swal.mixin({
        toast:true,
        position:'top-end',
        showConfirmButton:false,
        timer:1000
    });
    toast({
        type:'success',
        title:'Added to shopping cart'
    });
}
function cart(name,price,url,con,btncart){
    var item={
        name:name,
        price:price,
        url:url
    }
    CartItems.push(item);
    let storage= JSON.parse(localStorage.getItem("cart"));
    if (storage==null) {
            products.push(item);
            localStorage.setItem("cart",JSON.stringify(products));
    } else {
        products= JSON.parse(localStorage.getItem("cart"));
        products.push(item);
        localStorage.setItem("cart",JSON.stringify(products));
    }
    products= JSON.parse(localStorage.getItem("cart"));
    cart_n.innerHTML=`[${products.length}]`;
    document.getElementById(btncart).style.display="none";
    animation();
}
function cart2(name,price,url,con,btncart){
    var item={
        name:name,
        price:price,
        url:url
    }
    CartItems.push(item);
    let storage= JSON.parse(localStorage.getItem("cart"));
    if (storage==null) {
        products.push(item);
        localStorage.setItem("cart",JSON.stringify(products));
    } else {
        products= JSON.parse(localStorage.getItem("cart"));
        products.push(item);
        localStorage.setItem("cart",JSON.stringify(products));
    }
    products= JSON.parse(localStorage.getItem("cart"));
    cart_n.innerHTML=`[${products.length}]`;
    document.getElementById(btncart).style.display="none";
}
function render(){
    for (let index = 1; index <= 6; index++) {
        PCDIV.innerHTML+=`${HTMLPCProducts(index)}`;
    }
    for (let index = 1; index <= 3; index++) {
        MoniteursDIV.innerHTML+=`${HTMLMoniteursProducts(index)}`;
        AccessoiresDIV.innerHTML+=`${HTMLAccessoiresProducts(index)}`;
    }
    
    if (localStorage.getItem("cart")==null) {
        
    } else {
        products=JSON.parse(localStorage.getIten("cart"));
        cart_n.innerHTML=`[${products.legth}]`;
    }
}

function onShoppingCardClick(){
    document.getElementById("shopping-list-show").innerHTML = "";
    console.log("aaa3333" ,CartItems)
    for(let item of CartItems){
document.getElementById("shopping-list-show").innerHTML+= `
        <p>price : ${item.price} , name : ${item.name}</p>
`
    }

}