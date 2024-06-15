const getHash = () => {
  const infoLocation =
    location.hash.slice(1).toLowerCase().split("/").slice(1, 3) || "/";
  const route = infoLocation[0];
  const id = infoLocation[1];

  return { route, id };
  //return location.hash.slice(1).toLocaleLowerCase().split("/")[1] || "/";
};
export default getHash;
