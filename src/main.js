import "./css/style.css";
import Home from "./pages/Home";

document.querySelector("#app").innerHTML = `
  <div>
    ${Home()}
  </div>
`;
