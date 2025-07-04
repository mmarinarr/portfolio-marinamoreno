import "./Footer.css";
import { Button } from "../Button/Button";

export const Footer = () => `

<h2>Contacto</h2>
<div>
${Button("/github.jpeg", "GitHub", "https://github.com/mmarinarr")}
${Button("/linkedin.jpeg", "LinkedIn", "https://www.linkedin.com/in/marina-moreno-4a2165255/")}
${Button("/email2.jpg", "Email", "mailto:marina10paula5@gmail.com")}
</div>
`;