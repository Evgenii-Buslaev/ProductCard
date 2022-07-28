let navElement = document.querySelectorAll(".nav-element");
let information = document.querySelector(".information");
let navBar = document.querySelector(".product-info-navigation-bar");

let amount = document.getElementById("amount");
let addItem = document.getElementById("increase");
let deleteItem = document.getElementById("decrease");
let totalPrice = document.getElementById("price");
let inputColor = document.querySelector("input");
let rating = document.querySelector(".rating");
let addList = document.getElementById("add_wishlist");
let addCart = document.getElementById("add_cart");

navBar.addEventListener("click", (e) => {
  if (e.target.classList.value === "nav-element") {
    for (let i = 0; i < navBar.childNodes.length; i++) {
      navBar.childNodes[i].classList?.remove("active");
    }

    e.target.classList.add("active");
    information.style.opacity = 0;
    setTimeout(() => {
      information.style.opacity = 1;
    }, 500);
  } else {
    return;
  }
});

let count = 1;
let price = 420;

addItem.addEventListener("click", () => {
  count++;
  amount.innerText = count;
  totalPrice.innerText = `$${price + 420}`;
  price += 420;
});

deleteItem.addEventListener("click", () => {
  count--;
  if (count > 0) {
    amount.innerText = count;
    totalPrice.innerText = `$${price - 420}`;
    price -= 420;
  } else {
    count = 0;
    amount.innerText = 0;
    totalPrice.innerText = `$0`;
    price = 0;
  }
});

inputColor.addEventListener("input", (e) => {
  e.preventDefault();
  alert("Color is not availible for this item");
  inputColor.value = "#edc42c";
});

rating.addEventListener("click", () => {
  alert("You need to buy to rate.");
});

addList.addEventListener("click", scroll);
addCart.addEventListener("click", scroll);

function scroll() {
  document.getElementById("product").scrollIntoView({ behavior: "smooth" });
}
