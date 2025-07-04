import "./GaleryCard.css";

export const GaleryCard = (galery) => `
  <div class="galery-card">
    <div class="text-content">
      <h2>${galery.title}</h2>
      <p>${galery.description}</p>
    </div>
    <img src="${galery.image}" alt="${galery.title}" />
  </div>
`;