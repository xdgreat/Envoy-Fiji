import { Categories } from "./data.js";

const maginfyingGlass = document.getElementById("glass");
const link = document.getElementById("link");
const learn = document.getElementById("learn");
const explore = document.getElementById("explore");

explore.addEventListener("mouseenter", () => {
  maginfyingGlass.classList.add("fa-shake");
});

explore.addEventListener("mouseleave", () => {
  maginfyingGlass.classList.remove("fa-shake");
});

learn.addEventListener("mouseenter", () => {
  link.classList.add("fa-shake");
});

learn.addEventListener("mouseleave", () => {
  link.classList.remove("fa-shake");
});

const container = document.getElementById("top-rated-container");
const electronicsEl = Categories.Electronics.length;

for (let i = 0; i < electronicsEl; i++) {
  const product = document.createElement("div");
  product.classList.add("products");
  const image = document.createElement("div");
  image.classList.add("product-image");
  const description_container = document.createElement("div");
  description_container.classList.add("product-container-description");
  const name = document.createElement("p");
  name.classList.add("product-name");
  const hr = document.createElement("hr");
  const hr2 = document.createElement("hr");
  const price = document.createElement("p");
  price.classList.add("product-price");
  const description = document.createElement("p");
  description.classList.add("product-description");
  const addToCart = document.createElement("button");
  addToCart.classList.add("button-56");
  addToCart.textContent = "Add To Cart";
  addToCart.style.cursor = "pointer";

  image.style.backgroundImage = Categories.Electronics[i].image;
  name.textContent = Categories.Electronics[i].name;
  price.textContent = Categories.Electronics[i].price;
  description.textContent = Categories.Electronics[i].description;

  addToCart.style.display = "none"
  description.style.display = "none";

  description_container.append(name, hr, price, hr2, description);
  product.append(image, description_container, addToCart);
  container.append(product);

  console.log(Categories.Electronics[i].name);

  product.addEventListener("mouseenter", () => {
    description.style.display = "inherit";
    addToCart.style.display = "inherit";
  });

  product.addEventListener("mouseleave", () => {
    description.style.display = "none";
    addToCart.style.display = "none";
  });
}
