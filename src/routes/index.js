import Header from "../templates/Header";
import Home from "../pages/Home";
import Character from "../pages/Character";
import Error404 from "../pages/Error404";

const routes = {
  "/": Home,
  "/:id": Character,
};

const router = async () => {
  const header = null || document.querySelector("#header");
  const content = null || document.querySelector("#content");

  header.innerHTML = await Header();
};

export default router;
