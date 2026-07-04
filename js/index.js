import { menu } from "./itens.js";

const featuredContainer = document.querySelector(".featuredContainer");
const featuredItems = menu.filter(item => item.featured);

displayFeatured(featuredItems);

function displayFeatured(featuredItems){
  const html = featuredItems.map(item => {
    return `
    <article class="card">
      <img src="${item.img}" alt="${item.title}">
      <div class="item">
        <div class="itemH">
        <h2>${item.title}</h2>
        </div>
        <a href="./pages/menu.html" class="button">
          Ver no cardápio ➜
        </a>
      </div>
    </article>
    `;
  }).join("");
  featuredContainer.innerHTML = html;
}