import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import Body from "./components/Body";
import { FilterContext } from "./context/FilterContext";
import { useState } from "react";

const StyledApp = styled.div`
  display: flex;
  flex-direction: row;
`;

function App() {
  const [filterRating, setfilterRating] = useState("");
  const [filterPlatform, setFilterPlatform] = useState("");
  const [filterCoop, setFilterCoop] = useState("");
  const [filterLocalization, setFilterLocalization] = useState("");

  return (
    <StyledApp>
      <FilterContext.Provider
        value={{
          filterRating,
          setfilterRating,
          filterPlatform,
          setFilterPlatform,
          filterCoop,
          setFilterCoop,
          filterLocalization,
          setFilterLocalization,
        }}
      >
        <Sidebar />
        <Body />
      </FilterContext.Provider>
    </StyledApp>
  );
}

export default App;
