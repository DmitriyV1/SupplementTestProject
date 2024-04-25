import { useState } from "react";
import styled from "styled-components";

const StyledGameCard = styled.div`
  display: flex;
  width: 60vw;
  height: 30vh;
  border: 2px solid black;
  margin: 1rem;
`;

const StyledCarousel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 15vw;
  height: 30vh;
  border: 1px solid black;
  user-select: none;
`;

const StyledImage = styled.img`
  width: 15vw;
  height: 27vh;
`;

const StyledArrow = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 1rem;
  flex-grow: 1;

  > * {
    margin: 0.6rem;
  }
`;

function GameCard({ games }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [currentElement, setCurrentElemet] = useState(undefined);

  function handleChangeImage(id) {
    setCurrentElemet(id);
    setCurrentImage(currentImage == 0 ? 1 : 0);
  }

  return (
    <>
      {games.length == 0 ? (
        <h1>Игр по такому запросу не найдено!</h1>
      ) : (
        games?.map((game) => (
          <StyledGameCard key={game.id}>
            <StyledCarousel>
              <StyledImage
                src={
                  currentElement == game.id
                    ? game.pic[currentImage]
                    : game.pic[0]
                }
              />
              <StyledArrow onClick={() => handleChangeImage(game.id)}>
                &#x2192;
              </StyledArrow>
            </StyledCarousel>

            <InfoContainer>
              <h2>{game.name}</h2>
              <h3>Рейтинг: {game.rating}</h3>
              <h3>Мультиплеер: {game.multiplayer}</h3>
              <h3>
                Локализация: {game.localization === "true" ? "Есть" : "Нет"}
              </h3>
              <h3>Платформа: {game.platform.join(", ")}</h3>
            </InfoContainer>
          </StyledGameCard>
        ))
      )}
    </>
  );
}

export default GameCard;
