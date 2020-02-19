var config = {
    apiKey: "AIzaSyD18yvztaMcuduTcb08kH-tPoTPjd1PInk",
    authDomain: "techcare-63a54.firebaseapp.com",
    databaseURL: "https://techcare-63a54.firebaseio.com",
    projectId: "techcare-63a54",
    storageBucket: "techcare-63a54.appspot.com",
    messagingSenderId: "423664135845"
  };
  firebase.initializeApp(config);
// 
products=JSON.parse(localStorage.getItem("cart"));
var CartItems=[];
var cart_n = document.getElementById('cart_n');
var table = document.getElementById("table");
var total= 0;

function tableHTML(i){
    return `
                <tr>
                <th scope="row">${i+1}</th>
                <td><img style="width:90px;" src="${products[i].url}"></td>
                
    `;
}



function render(){

}