import React from "react";
import styled from "styled-components";
import { buildBackgroundImagesURLs } from "../../utils/buildBackgroundImagesURLs";

const StyledIngredient = styled.div`
  background-image: ${({ bgImage }) => bgImage};
  background-repeat: no-repeat;
  background-position: center center;
  height: 300px;
  width: 300px;
`;

export const PizzaPreview = ({ ingredients }) => {
  const backgroundImages = buildBackgroundImagesURLs(ingredients);

  return (
    <>
      <StyledIngredient bgImage={backgroundImages} />
    </>
  );
};
