import "./Button.css";

export const Button = (icon, text, url) => `
  <a href="${url}" class="my-btn" target="_self">
    <img src="${icon}" alt="${text} icon"/>
    <h5>${text}</h5>
  </a>
`;