import getData from "../utils/getData";

const Home = async (page = 1) => {
  const characters = await getData(null, page);
  const view = `
    <div class="Characters">
      ${characters.results
        .map(
          (character) => `
        <article class="Characters-item">
          <a href="#/character/${character.id}">
            <img src="${character.image}" alt="${character.name}">
            <h2>${character.name}</h2>
          </a>
        </article>
      `
        )
        .join("")}
    </div>
    <div class="Pagination">
      ${
        characters.info.prev
          ? `<a href="#/page/${
              page - 1
            }"><button class="Prev-button"> << </button></a>`
          : ""
      }
      ${
        characters.info.next
          ? `<a href="#/page/${page + 1}"><button> >> </button></a>`
          : ""
      }
    </div>
  `;
  return view;
};

export default Home;
