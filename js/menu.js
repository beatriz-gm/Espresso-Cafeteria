import { menu } from "./itens.js";

const menuContainer = document.querySelector(".menuContainer");
const btnContainer = document.querySelector(".btnContainer");
const backToTop = document.querySelector("#backToTop");

window.addEventListener("DOMContentLoaded", () => {
    displayMenu(menu);
    displayButtons();
});

function displayMenu(items){
  const html = items.map(item => {
    return `
    <article class="card">
      <img src=${item.img} alt=${item.title}>
      <div class="item">
      <div class="itemH">
      <h2>${item.title}</h2>
      <h3>R$${item.price},00</h3>
      </div>
      <p>${item.desc}</p>
      </div>
    </article>
    `;
  }).join("");

  menuContainer.innerHTML = html;
}

function displayButtons(){
  const categories = ["Todos", ...new Set(menu.map(item => item.category))];
  const buttons = categories.map(category => {
    return `
    <button class="filterBtn" 
      data-id="${category}">
      ${category}
    </button>
    `;
  }).join("");

  btnContainer.innerHTML = buttons;

  const filterBtns = document.querySelectorAll(".filterBtn");
  const firstBtn = document.querySelector(".filterBtn");
  firstBtn.classList.add("active");

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(button => {
        button.classList.remove("active");
      });
      btn.classList.add("active");
      const category = btn.dataset.id;
      if(category === "Todos"){
        displayMenu(menu);
      }else{
        const filtered = menu.filter(item => item.category === category);
        displayMenu(filtered);
      }
    });
  });
}

window.addEventListener("scroll", () => {
  if(window.scrollY > 300){
    backToTop.style.display = "block";
  }else{
    backToTop.style.display = "none";
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top:0,
    behavior:"smooth"
  });
});