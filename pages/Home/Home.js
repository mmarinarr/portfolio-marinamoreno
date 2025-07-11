import "./Home.css";
import { cleanPage } from "../../utils/cleanPage";

export const Home = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `
    <section class="home">
    <div class="container">
    <div id="info">
    <p>Hola! Mi nombre es</p>
    <h1>Marina Moreno</h1>
    <p>Soy una estudiante cursando actualmente un Máster en Desarrollo Full-Stack y un ciclo de Desarrollo de Aplicaciones Multiplataforma (DAM). Además, tengo el título de Gráfica Interactiva (Diseño Web). Resido en Barcelona desde que nací aquí, y estoy en busca de oportunidades y nuevos retos que me hagan crecer y mejorar como programadora.</p>
    <a href="mailto:marina10paula5@gmail.com">Contacta conmigo →</a>
    </div>
    <div id="image">
    <p>Pasa el ratón por encima para conocerme mejor!</p>
    <img src="./marina2.jpg">
    <video src="./marina3.mp4" muted loop id="myVideo"></video>
    </div>
    </div>
    </section>`;

    const imageContainer = document.querySelector("#image");
    const video = imageContainer.querySelector("video");
    const img = imageContainer.querySelector("img");

    imageContainer.addEventListener("mouseenter", () => {
    img.style.opacity = "0";
    video.style.opacity = "1";
    video.currentTime = 0;
    video.play();
  });

    imageContainer.addEventListener("mouseleave", () => {
    img.style.opacity = "1";
    video.style.opacity = "0";
    video.pause();
  });
};


