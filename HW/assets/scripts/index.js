function getData(url, method = "GET", body) {
  return fetch(url, {
    method, // method: method
    headers: {
      "Content-Type": "application/json",
    },
    ...(body ? { body: JSON.stringify(body) } : {}),
  })
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      return response;
    });
}

async function getProduct() {
  const product = await getData("https://dummyjson.com/products/1");
  return product;
}

function drawProduct() {
  getProduct().then((response) => {
    const p = response;

    const abc = `<div class="slider">
        <div class="main-img">
          <img
            src="${p.thumbnail}"
            alt="Tumb"
          />
        </div>
        <div class="carousel">
          <img src="${p.images[0]}" alt="" />
          <img src="${p.images[1]}" alt="" />
          <img src="${p.images[2]}" alt="" />
          <img src="${p.images[3]}" alt="" />
          <img src="${p.images[4]}" alt="" />
          
        </div>
      </div>
      <div class="product-detailss">
        <h1>${p.title}</h1>
        <div class="product-rate">${p.rating}</div>
        <div class="product-price">
          <span class="old-price">${p.price}</span><span class="new-price">${
      p.price - (p.price * 4, 69)
    }</span>
        </div>
        <p class="product-description">
          An apple mobile which is nothing like apple
        </p>
        <ul class="info-list">
          <li>Stock: ${p.stock}</li>
          <li>Category: ${p.category}</li>
          <li>TAGS: ${p.brand}</li>
        </ul>
        <div>
          <input class="number" type="number" value="1"  min="0" max="${p.stock}" />
          <input class="add-to-cart" type="button" value="Add To Cart" />
        </div>
        <div class="product-share">
          <ul>
            <li>
              <a href="#"
                ><i
                  class="fa-brands fa-square-twitter"
                  style="color: #091325"
                ></i
              ></a>
            </li>
            <li>
              <a href="#"
                ><i
                  class="fa-brands fa-square-instagram"
                  style="color: #091325"
                ></i
              ></a>
            </li>
            <li>
              <a href="#"
                ><i class="fa-brands fa-linkedin" style="color: #091325"></i
              ></a>
            </li>
            <li>
              <a href="#"
                ><i
                  class="fa-brands fa-square-github"
                  style="color: #091325"
                ></i
              ></a>
            </li>
            <li>
              <a href="#"
                ><i
                  class="fa-brands fa-square-facebook"
                  style="color: #091325"
                ></i
              ></a>
            </li>
            <li>
              <a href="#"><i class="fa-regular fa-heart"></i>ADD TO WISHLIST</a>
            </li>
          </ul>
        </div>
      </div>`;
    document.getElementById("detail").innerHTML = abc;
  });
}

drawProduct();

async function getProductsCarousel() {
    const products = await getData("https://dummyjson.com/products/");
    return products.products;
  }


 


function drawProductsCarousel() {
    getProductsCarousel().then((response) => {
        
      const products = response.map((p) => {
        return ` <div class="product-default">
        <figure>
          <a href="#">
            <img src="${p.thumbnail}" width="280" height="280" alt="product" />
          </a>
        </figure>
        <div class="product-details">
          <div class="category-list">
            <a href="#" class="product-category">Category: ${p.category}</a>
          </div>
          <h3 class="product-title">
            <a href="#">${p.title}</a>
          </h3>
         <div class="price">  <span class="old-price">${p.price}</span>  <span class="new-price">${
            p.price - (p.price *p.discountPercentage /100 )
          }</span>
          </div>
          <div class="product-action">
          <input class="add-to-cart" type="button" value="SELECT OPTION" />
          </div>
        </div>
      </div>`;
      });
      document.getElementById("rel-box").innerHTML = products.join("");
    });
  }
  
  drawProductsCarousel();