import { useContext } from "react";
import styled from "styled-components";
import { FilterContext } from "../context/FilterContext";

const StyledSidebar = styled.div`
  width: 20vw;
  height: 100vh;
`;

const StyledRadio = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 15vw;
  padding: 1rem;
`;

function Sidebar() {
  const {
    setfilterRating,
    setFilterPlatform,
    setFilterCoop,
    setFilterLocalization,
  } = useContext(FilterContext);

  return (
    <StyledSidebar>
      <StyledRadio onChange={(e) => setFilterPlatform(e.target.value)}>
        <span>Платформа</span>
        <label>
          <input type="radio" name="platform" value="PC" />
          PC
        </label>
        <label>
          <input type="radio" name="platform" value="Sony PlayStation" />
          Sony PlayStation
        </label>
        <label>
          <input type="radio" name="platform" value="Nintendo Switch" />
          Nintendo Switch
        </label>
      </StyledRadio>

      <StyledRadio onChange={(e) => setfilterRating(() => e.target.value)}>
        <span>По рейтингу</span>
        <label>
          <input type="radio" name="raiting" value="asc" />
          По возрастанию
        </label>
        <label>
          <input type="radio" name="raiting" value="des" />
          По убыванию
        </label>
      </StyledRadio>

      <StyledRadio onChange={(e) => setFilterCoop(e.target.value)}>
        <span>Кооператив</span>
        <label>
          <input type="radio" name="coop" value="Нет" />
          Нет
        </label>
        <label>
          <input type="radio" name="coop" value="Локальный" />
          Локальный
        </label>
        <label>
          <input type="radio" name="coop" value="Есть" />
          Мультиплеер
        </label>
      </StyledRadio>

      <StyledRadio onChange={(e) => setFilterLocalization(e.target.value)}>
        <span>Русская локализация</span>
        <label>
          <input type="radio" name="localization" value="true" />
          Есть
        </label>
        <label>
          <input type="radio" name="localization" value="false" />
          Нету
        </label>
      </StyledRadio>
    </StyledSidebar>
  );
}

export default Sidebar;
