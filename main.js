//main.js
let Items= [];
let searchSec =document.querySelector('#searchSection');
let cancelButton=document.querySelector('#iits-cancelBtn');
let picture=document.querySelector('#pic');
let describe=document.querySelector('#desc');
let Name= document.querySelector('#name');
let itemType=document.querySelector('#typeItem');
let addBtn=document.querySelector('.btn');
let Item=document.querySelector('#iits-items');
let searchBox=document.querySelector('#iits-searchBox');
let cart=document.querySelector('iits-cart');
let category=document.querySelector('.category-pill');
let allItem=document.querySelector('#all_toggle');

let searchPara = "";


function foodItem(food){
  return `
  <div class="item col-md-6 col-lg-4 p-3" data-category="coffee">
                <div class="card">
                  <div class="img-container">
                    <img
                     src="${food.pic}"
                    <span class="category-pill">${food.category}</span>
                  </div>
                  <div class="card-body">
                    <h5 class="card-title">${food.name}</h5>
                    <p class="card-text">
                    ${food.desc}
                    </p>
                    `;
}


function renderFoods() {
    allItem.innerHTML = "";
    Items.forEach(function (food) {
        if(food.name.toLowerCase().includes(searchPara.toLowerCase()))
        {
            allItem.innerHTML += foodItem(food);
        }
      });
}

async function getItems() {
  allItem.innerHTML = "Please wait";

  let url = "    ";
  let option = {
    method: "GET"
  }
  try {
    let response = await fetch(url,option);
    let data = await response.json();
    console.log(data);
    data.forEach(function(current){
      Items.push(current);
    });
    renderBooks();
  }
  catch (err) {
    console.log(err);
  }
}

getItems();


/*
let allItems=document.getElementById('')
function renderFoods(){
  allItems.innerHTML
}
*/

// 4- Add to cart button

  let addToCartBtn = document.querySelector('.addToCartBtn');
  let cartCounter = document.getElementById('iits-cart_counter');
  let cartDecrement = document.getElementById('cart_dec');

  let itemCount = 0;

  // increase the cart counter
  function updateCounter() {
    cartCounter.textContent = itemCount;
  }

  // Add to cart button Event listener 
  addToCartBtn.addEventListener('click', function () {
    itemCount++;
    updateCounter();
  });

  // 5- Event listener for cart decrement click
  cartDecrement.addEventListener('click', function () {
    if (itemCount > 0) {
      itemCount--;
      updateCounter();
    }
  });






// 6- admin button

let adminSection= document.getElementById('iits-adminSection');
let newItemForm = document.getElementById('iits-addNewForm');
let cancelBtn = document.getElementById('iits-cancelBtn');


function showForm(form){
  form.style.display = 'block';
}

function hideForm(form){
  form.style.display = 'none';
}

let admin = document.getElementById('iits-adminBtn');
admin.addEventListener('click',function(){
  let name = window.prompt('Enter your username');
  let pass= window.prompt('Enter your password');
  if (name.valueOf() =='iits' && pass.valueOf() =='23'){  //- 8
    showForm(newItemForm);}
  else {
    alert('Invalid credential');
  }
});





//My name
document.getElementById('iits-developer').textContent="Rijuana Rahman Anika";

//item adding form

/*
function clearForm(){
  newItemForm.reset();
}
*/

//cancel btn event
cancelBtn.addEventListener('click', function(hideSection){
  newItemForm.reset();
});

// event for form submission
newItemForm.addEventListener('submit',function(event){
  event.preventDefault(); //for preventing default submission
clearForm();
});

