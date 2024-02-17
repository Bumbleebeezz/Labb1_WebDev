class Product {
  constructor(img, title, price, description) {
    this.img = img;
    this.title = title;
    this.price = price;
    this.description = description;
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
let cartList = [];
let totalPrice = 0;

const shopdiv = document.getElementById("shop");
for (const product of productList) {
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
  infoBtn.classList.add("card-btn", "grey");
  addCartBtn.classList.add("card-btn", "green");

  cardImg.src = product.img;
  cardImg.alt = product.title;
  cardTitle.innerText = product.title;
  cardPrice.innerText = product.price;
  cardDescription.innerText = product.description;

  infoBtn.innerText = "View product information";
  infoBtn.onclick = () => {
    productInfo(product)
  };
  addCartBtn.innerText = "Add to cart";
  addCartBtn.onclick = () => {
    addProduct(product);
  };
  card.appendChild(cardImg);
  card.appendChild(cardTitle);
  card.appendChild(cardPrice);
  card.appendChild(cardDescription);

  card.appendChild(infoBtn);
  card.appendChild(addCartBtn);

  shopdiv.appendChild(card);
}

const cart = document.getElementById("cart_list");
for (const product of cartList) {
  const ul = document.createElement("ul");
  const li = document.createElement("li");

  ul.classList.add("list-group");
  li.classList.add("list-group-item");

  li.innerText = product.title + " : " + product.price;

  ul.appendChild(li);
  cart.appendChild(ul);
}

function productInfo(product) {
  let myModal = new bootstrap.Modal(document.getElementById('shopModal'), {});
  myModal.show();

  const title = document.getElementById("modal_title");
  title.innerText = product.title;
  const description = document.getElementById("modal_description");
  description.innerText = product.description;
  console.log(product.description);
}
function addProduct(product) {
  cartList.push(product);
  console.log("Placeholder: Product added to cart");
  document.getElementById("cart_list").innerHTML = "";
  const cartPrice = document.getElementById("cartTotal");
  const cart = document.getElementById("cart_list");
  for (const product of cartList) {
    const ul = document.createElement("ul");
    const li = document.createElement("li");

    ul.classList.add("list-group");
    li.classList.add("list-group-item");

    li.innerText = product.title + " : " + product.price;

    ul.appendChild(li);
    cart.appendChild(ul);

    totalPrice += parseFloat(product.price);
  }
  cartPrice.innerText = "Total: " + totalPrice + "$";
}
function removeProduct(){
  cartList = [];
  document.getElementById("cart_list").innerHTML = "";
  const cartPrice = document.getElementById("cartTotal");
  cartPrice.innerText = "Total: 0$"
  totalPrice = 0;
  console.log("Placeholder: Cart is reset");
}
function checkOut(){
  console.log("Thank you for purchased, Welcome back!");
  cartList = [];
  document.getElementById("cart_list").innerHTML = "";
  const cartPrice = document.getElementById("cartTotal");
  cartPrice.innerText = "Total: 0$"
  totalPrice = 0;
}