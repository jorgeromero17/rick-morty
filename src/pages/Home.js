import getData from "../utils/getData";

const Home = async () => {
  const characters = await getData();
  const view = `
    
      ${characters.results
        .map(
          (character) => `
          <div class="Characters">
            <article class="Character-item">
              <a href="#/${character.id}/">
                <img src="${character.image}" alt="${character.name}">
                <h2>${character.name}</h2>
              </a>
            </article>
          </div>
        `
        )
        .join()}
      
  `;
  return view;
};

export default Home;
