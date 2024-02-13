class Product {
  constructor(img,title,price,description){
    this.img = img
    this.title = title
    this.price = price
    this.description = description
  }
}

const productList = [
  new Product ("images/knittedShirt.jpg","Knitted Shirt",15.99,"Handmade by: Eva"),
  new Product ("images/crotchetCat.jpg","Crochet Cat",5.99,"Handmade by: Maria")
];
console.log(productList);

const cartList = [];

const shopdiv = document.getElementById("shop");
 
for (const product of productList){
  const card = document.createElement("div");
  const cardBody = document.createElement("div");
  const cardImg = document.createElement("img");
  const cardTitle = document.createElement("p");
  const cardPrice = document.createElement("p");
  const cardDescription = document.createElement("p");
  const cardFooter = document.createElement("div");
  const closeBtn = document.createElement("button");
  const addCartBtn = document.createElement("button");

  cardImg.src = product.img;
  cardTitle.innerText = product.title;
  cardPrice.innerText = product.price;
  cardDescription.innerText = product.description;
  closeBtn.innerText = "Close";
  closeBtn.onclick = () => {
    return
  }
  addCartBtn.innerText = "Add to cart";
  addCartBtn.onclick = () => {
    addProduct() 
  }
  cardBody.appendChild(cardImg);
  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardPrice);
  cardBody.appendChild(cardDescription);
  cardFooter.appendChild(closeBtn);
  cardFooter.appendChild(addCartBtn);

  card.appendChild(cardBody);
  card.appendChild(cardFooter);

  shopdiv.appendChild(card);
}


function showCart(){
  
}
function addProduct(){
 
}
function removeProduct(){
  
}