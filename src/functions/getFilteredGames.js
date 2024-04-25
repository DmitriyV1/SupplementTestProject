function getFilteredGames(
  games,
  filterPlatform,
  filterCoop,
  filterLocalization
) {
  let arr = [];
  games.map(
    (el) =>
      el["platform"].includes(filterPlatform) &&
      el["multiplayer"].includes(filterCoop) &&
      el["localization"].includes(filterLocalization) &&
      arr.push(el)
  );

  return arr;
}

export default getFilteredGames;
