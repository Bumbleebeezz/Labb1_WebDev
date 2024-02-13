class Product {
  constructor(img,title,price,description){
    this.img = img
    this.title = title
    this.price = price
    this.description = description
  }
}

const productList = [];
const cartList = [];

// const myModal = document.getElementById('myModal')
//   const myInput = document.getElementById('myInput')
  
//   myModal.addEventListener('shown.bs.modal', () => {
//     myInput.focus()
//   })

async function getProducts(){
  for (let product of productList){
    const productImage = product.img;
    const productTitle = product.title;
    const productPrice = product.price;
    const productDescription = product.description;
  }
  displayProducts();
}

function displayProducts(){
  for (const product of productList){
    const li = document.createElement("li");
    const card = document.createElement("div");
    const cardBody = document.createElement("div");
    const cardFooter = document.createElement("div");
    const cardImg = document.createElement("img");
    const closeBtn = document.createElement("button");
    const addCartBtn = document.createElement("button");

    applyStyles(li,card,cardBody,cardFooter,cardImg,closeBtn,addCartBtn);

    closeBtn.innerText = "Close";
    closeBtn.onclick = () => {
      return
    }
    addCartBtn.innerText = "Add to cart";
    addCartBtn.onclick = () => {
      // add to cart[] 
    }
    cardBody.appendChild(cardImg);
    cardFooter.appendChild(closeBtn);
    cardFooter.appendChild(addCartBtn);

    card.appendChild(cardBody);
    card.appendChild(cardFooter);
    li.appendChild(card);

    productList.appendChild(li);
  }
}

function showCart(){
  
}
function addProduct(){

}
function removeProduct(){
  
}