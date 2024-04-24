import React from "react";
import styled from "styled-components";

import BaseIcon from "./BaseIcon";

import heartIcon from "../assets/icon/heart.svg";
import heartActiveIcon from "../assets/icon/heart-active.svg";

const CardFavorites = ({ isFavorite, favoriteCount, onClick, className }) => {
  const getFavoriteIcon = isFavorite ? heartActiveIcon : heartIcon;

  return (
    <StyledFavorite className={className} onClick={onClick}>
      <BaseIcon src={getFavoriteIcon} />
      {isFavorite ? favoriteCount + 1 : favoriteCount}
    </StyledFavorite>
  );
};

const StyledFavorite = styled.button`
  padding: 0;
  background-color: transparent;
  font-weight: 500;
  font-size: 12px;
  color: #4b5563;
  cursor: pointer;

  i {
    width: 16px;
    height: 16px;
    cursor: pointer;
  }
`;

export default CardFavorites;
