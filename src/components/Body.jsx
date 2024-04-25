import { useContext, useEffect, useState } from "react";
import { FilterContext } from "../context/FilterContext";
import styled from "styled-components";
import GameCard from "./GameCard";
import games from "../games.json";
import getFilteredGames from "../functions/getFilteredGames";

const StyledBody = styled.div`
  display: flex;
  flex-direction: column;
`;

function Body() {
  const [filteredGames, setfilteredGames] = useState(games);
  const { filterCoop, filterRating, filterPlatform, filterLocalization } =
    useContext(FilterContext);

  useEffect(() => {
    // -------------------- При изменении стейтов фильтров применяем фильтрацию
    let arr = getFilteredGames(
      games,
      filterPlatform,
      filterCoop,
      filterLocalization
    );

    // -------------------- Проверяем выбрана ли сортировка по рейтингу
    filterRating && filterRating == "asc"
      ? (arr = arr.sort((a, b) => a.rating - b.rating))
      : (arr = arr.sort((a, b) => (a.rating - b.rating) * -1));

    // -------------------- Устанавливаем список отсортированных игр
    setfilteredGames(arr);
  }, [filterCoop, filterRating, filterPlatform, filterLocalization]);

  return (
    <StyledBody>
      <GameCard games={filteredGames} />
    </StyledBody>
  );
}

export default Body;
