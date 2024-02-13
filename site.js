class Product {
  constructor(img,title,price,description){
    this.img = img
    this.title = title
    this.price = price
    this.description = description
  }
}

const productList = [
  new Product ("images/knittedShirt.jpg","Knitted Shirt","15.99 $","Handmade by: Eva"),
  new Product ("images/crotchetCat.jpg","Crochet Cat","5.99 $","Handmade by: Maria")
];

const shopdiv = document.getElementById("shop");
for (const product of productList){
  const card = document.createElement("div");
  const cardBody = document.createElement("div");
  const cardImg = document.createElement("img");
  const cardTitle = document.createElement("p");
  const cardPrice = document.createElement("p");
  const cardDescription = document.createElement("p");
  const cardFooter = document.createElement("div");
  const infoBtn = document.createElement("button");
  const addCartBtn = document.createElement("button");

  card.classList.add("product_card");
  cardImg.classList.add("product_img");
  cardTitle.classList.add("product_title");
  cardPrice.classList.add("product_price");
  cardDescription.classList.add("product_description");
  infoBtn.classList.add("card-btn","grey");
  addCartBtn.classList.add("card-btn","green");

  cardImg.src = product.img;
  cardTitle.innerText = product.title;
  cardPrice.innerText = product.price;
  cardDescription.innerText = product.description;
  infoBtn.innerText = "View product information";
  infoBtn.onclick = () => {
    console.log("Product information");
  }
  addCartBtn.innerText = "Add to cart";
  addCartBtn.onclick = () => {
    console.log("Product added to cart");
    addProduct();
  }
  cardBody.appendChild(cardImg);
  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardPrice);
  cardBody.appendChild(cardDescription);

  cardFooter.appendChild(infoBtn);
  cardFooter.appendChild(addCartBtn);

  card.appendChild(cardBody);
  card.appendChild(cardFooter);

  shopdiv.appendChild(card);
}

const cartList = [];
function showCart(){
  
}
function addProduct(){

}
function removeProduct(){
  
}