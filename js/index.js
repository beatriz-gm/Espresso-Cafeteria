// importa os itens
import { menu } from "./itens.js";

// declarando constantes pela classe do elemento e filtrando pela propriedade definida no mesmo
const featuredContainer = document.querySelector(".featuredContainer");
const featuredItems = menu.filter(item => item.featured);

displayFeatured(featuredItems);

// filtra apenas os itens onde a propriedade é verdadeira e apresenta eles na tela com as propriedades escolhidas
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