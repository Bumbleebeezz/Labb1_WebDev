class Product {
  constructor(img,title,price,description){
    this.img = img
    this.title = title
    this.price = price
    this.description = description
  }
}

const productList = [
  new Product ("images/crochetChickens.jpg","3 pack Chickens","35.99 $","100% cotton, 25 cm / 9,8 inch tall"),
  new Product ("images/crotchetCat.jpg","Crochet Cat","29.99 $","100% cotton, 100 cm / 39,4 inch tall"),
  new Product ("images/crotchetPinguin.jpg","Crochet Pinguin","15.99 $","100% cotton, 15 cm / 5,9 inch tall"),
  new Product ("images/knittedShirt.jpg","Knitted Shirt","35.99 $","100% cotton, size S-XXL / 4-22"),
  new Product ("images/knittedSocks.jpg","Knitted Socks","15.99 $","100% wool, size 35-40 / 3-8"),
  new Product ("images/knittedSweater.jpg","Knitted Sweater","5.99 $","100% wool, size S-XXL / 4-22"),
  new Product ("images/sewingApron.jpg","Kitchen Apron","15.99 $","100% cotton, Unisex, Size M-L / 8-14"),
  new Product ("images/sewingTravelpurse.jpg","Traveling Purse","5.99 $","100% cotton, 25 cm / 9,8 inch tall"),
  new Product ("images/sewingBag.jpg","2 pack Gift Bags","15.99 $","100% cotton, 45x25 cm / 17,7x9,8 inch")
];
const shopdiv = document.getElementById("shop");
for (const product of productList){
  const card = document.createElement("div");
  const cardImg = document.createElement("img");
  const cardTitle = document.createElement("p");
  const cardPrice = document.createElement("p");
  const cardDescription = document.createElement("p");
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
  card.appendChild(cardImg);
  card.appendChild(cardTitle);
  card.appendChild(cardPrice);
  card.appendChild(cardDescription);

  card.appendChild(infoBtn);
  card.appendChild(addCartBtn);

  shopdiv.appendChild(card);
}

const cartList = [
  productList[1],
  productList[5],
  productList[3]
];

const cart_div = document.getElementById("cart_list");
for (const product of cartList) {
  const card = document.createElement("div");
  const cardImg = document.createElement("img");
  const cardTitle = document.createElement("p");
  const cardPrice = document.createElement("p");
  const cardDescription = document.createElement("p");
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
  card.appendChild(cardImg);
  card.appendChild(cardTitle);
  card.appendChild(cardPrice);
  card.appendChild(cardDescription);

  card.appendChild(infoBtn);
  card.appendChild(addCartBtn);

  cart_div.appendChild(card);
}

function addProduct(){

}
function removeProduct(){
  
}