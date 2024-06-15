import Header from "../templates/Header";
import Home from "../pages/Home";
import Character from "../pages/Character";
import Error404 from "../pages/Error404";
import getHash from "../utils/getHash";
import resolveRoutes from "../utils/resolveRoutes";

const routes = {
  "/": Home,
  "/character": Character,
};

const router = async () => {
  const header = null || document.querySelector("#header");
  const content = null || document.querySelector("#content");

  header.innerHTML = await Header();

  let { route, id } = getHash();
  let resolvedRoute = await resolveRoutes(route);

  let render = routes[resolvedRoute] ? routes[resolvedRoute] : Error404;
  content.innerHTML = await render(parseInt(id, 10));
};

export default router;
