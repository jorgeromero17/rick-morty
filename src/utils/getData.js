const API = "https://rickandmortyapi.com/api/character";

const getData = async (id) => {
  const apiUrl = id ? `${API}/${id}` : API;
  try {
    const response = await fetch(apiUrl);
    const data = await response.json(); //convertimos a JSON
    return data;
  } catch (error) {
    console.error("FETCH ERROR", error);
  }
};

export default getData;
