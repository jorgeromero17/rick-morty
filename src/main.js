import "./css/style.css";
import Home from "./pages/home";

document.querySelector("#app").innerHTML = `
  <div>
    ${Home()}
  </div>
`;
