import "./About.css";
import { cleanPage } from "../../utils/cleanPage";
import { galeries } from "../../data/galeries";
import { GaleryCard } from "../../components/GaleryCard/GaleryCard";
import { Divider } from "../../components/Divider/Divider";

export const About = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `
    <section class="galeries">
    <h3>ESTUDIOS</h3>
    ${Divider()}
    <div class="galeries-container"></div>
    </section>`;
  const container = document.querySelector(".galeries-container");
  for (const galery of galeries) {
    const figure = document.createElement("figure");
    figure.innerHTML = GaleryCard(galery);
    container.appendChild(figure);
  }
};