class Item {
  constructor(img,title,price,description){
    this.img = img
    this.title = title
    this.price = price
    this.description = description
  }
}

const productList = [];

async function getProducts(){
  for (let product of productList){
    const productImage = product.img;
    const productTitle = product.title;
    const productPrice = product.price;
    const productDescription = product.description;
  }
  displayProducts();
}

getProducts();

function displayProducts(){
  for (const product of productList){
    const li = document.createElement("li");
    const card = document.createElement("div");
    const cardBody = document.createElement("div");
    const cardFooter = document.createElement("div");
    const cardImg = document.createElement("img");
    const closeBtn = document.createElement("button");
    const addCartBtn = document.createElement("button");

    //applyStyles(li,card,cardBody,cardFooter,cardImg,closeBtn,addCartBtn);

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

// Initialize and add the map
let map;

async function initMap() {
  // The location of Uluru
  const position = { lat: -25.344, lng: 131.031 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 4,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  // The marker, positioned at Uluru
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Uluru",
  });
}

initMap();





// let cartList = [];


// const myModal = document.getElementById('myModal')
// const myInput = document.getElementById('myInput')

// myModal.addEventListener('shown.bs.modal', () => {
//   myInput.focus()
// })




function showCart(){
 
}
function addProduct(){

}
function removeProduct(){
  
}