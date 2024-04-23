import { useState } from "react";
import styled from "styled-components";

import heartIcon from "../assets/icon/heart.svg";
import heartActiveIcon from "../assets/icon/heart-active.svg";
import BaseIcon from "./BaseIcon";

function Card({ item, className }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const { name, price, favoriteCount, images } = item;

  const previewImage = images[0];
  const formattedPrice = `${price.toLocaleString()}원`;

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  const getFavoriteIcon = isFavorite ? heartActiveIcon : heartIcon;

  return (
    <StyledCard className={className}>
      <img src={previewImage} alt="상품 이미지" />
      <p>{name}</p>
      <p>{formattedPrice}</p>
      <StyledFavoriteSection>
        <button onClick={handleFavoriteClick}>
          <BaseIcon src={getFavoriteIcon} />
        </button>
        {isFavorite ? favoriteCount + 1 : favoriteCount}
        {/* 서버에는 반영 x */}
      </StyledFavoriteSection>
    </StyledCard>
  );
}

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 15%;
    margin: 16px 0;
  }

  p:first-of-type {
    font-weight: 500;
    font-size: 14px;
    color: #1f2937;
  }

  p:nth-of-type(2) {
    font-weight: 700;
    font-size: 16px;
    color: #1f2937;
  }
`;

const StyledFavoriteSection = styled.span`
  display: flex;
  align-items: center;
  gap: 4px;
  font-weight: 500;
  font-size: 12px;
  color: #4b5563;

  button {
    display: flex;
    width: 16px;
    height: 16px;
    padding: 0;
    background-color: transparent;
    cursor: pointer;
  }

  i {
    width: 16px;
    height: 16px;
    cursor: pointer;
  }
`;

export default Card;
