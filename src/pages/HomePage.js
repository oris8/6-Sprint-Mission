import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Button from "../components/BaseButton";
import WebpLoader from "../components/WebpLoader";
import SectionDescription from "../components/SectionDescription";
import MultiLineText from "../components/MultiLineText";

import homeImg01 from "../assets/img/Img_home_01@2x.jpg";
import homeImg01webp from "../assets/img/Img_home_01@2x.webp";
import homeImg02 from "../assets/img/Img_home_02@2x.jpg";
import homeImg02webp from "../assets/img/Img_home_02@2x.webp";
import homeImg03 from "../assets/img/Img_home_03@2x.jpg";
import homeImg03webp from "../assets/img/Img_home_03@2x.webp";
import banner1 from "../assets/img/panda-1.svg";
import banner2 from "../assets/img/panda-2.svg";

const HomePage = () => {
  return (
    <StyledMain className="main">
      <Banner className="banner">
        <div className="banner-container">
          <img
            src={banner1}
            alt="판다가 반갑게 손을 흔들고 있어요"
            className="banner__img"
          />
          <BannerDescription isWrap="all" className="banner__top-desc">
            일상의 모든 물건을,거래해보세요
          </BannerDescription>
          <Link to="/items">
            <Button className="banner__btn" size="large">
              구경하러 가기
            </Button>
          </Link>
        </div>
      </Banner>

      <div className="section-container">
        <div className="section">
          <SectionImg
            src={homeImg01}
            alt="판다마켓"
            webpSrc={homeImg01webp}
            className="section__img"
          />
          <SectionDescription
            badgeText="Hot item"
            title="인기 상품을,확인해 보세요"
            content="가장 HOT한 중고거래 물품을,판다 마켓에서 확인해보세요"
          />
        </div>
        <div className="section">
          <SectionImg
            src={homeImg02}
            alt="판다마켓"
            webpSrc={homeImg02webp}
            className="section__img"
          />
          <SectionDescription
            badgeText="search"
            title="구매를 원하는,상품을 검색하세요"
            content="구매하고 싶은 물품은 검색해서,쉽게 찾아보세요"
          />
        </div>
        <div className="section">
          <SectionImg
            src={homeImg03}
            alt="판다마켓"
            webpSrc={homeImg03webp}
            className="section__img"
          />
          <SectionDescription
            badgeText="Register"
            title="판매를 원하는,상품을 등록하세요"
            content="어떤 물건이든 판매하고 싶은 상품을,쉽게 등록하세요"
          />
        </div>
      </div>

      <Banner className="banner">
        <div className="banner-container">
          <img
            src={banner2}
            alt="즐거운 중고거래가 끝나고 판다들이 헤어지고 있어요"
            className="banner__img"
          />
          <BannerDescription isWrap>
            믿을 수 있는,판다마켓 중고거래
          </BannerDescription>
        </div>
      </Banner>
    </StyledMain>
  );
};

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  margin-top: 70px;

  .section-container {
    max-width: 1200px;
    width: 100vw;
    height: auto;
    padding: 16px;
  }

  .section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 64px;
    min-height: 720px;
    height: auto;

    &:nth-child(2) {
      text-align: end;
    }
  }

  @media screen and (min-width: 768px) {
    .section {
      padding: 24px;
    }
  }

  @media screen and (min-width: 1200px) {
    .banner-container {
      padding: 0 24px;
    }

    .section {
      display: flex;
      flex-direction: row;

      &:nth-child(2) {
        flex-direction: row-reverse;
      }
    }

    .section picture {
      flex-shrink: 0;
    }
  }
`;

const Banner = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 540px;
  background-color: #cfe5ff;
  overflow: hidden;

  .banner-container {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 18px;
    max-width: 1200px;
    width: 100vw;
    height: 540px;
  }

  .banner__img {
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%);
    height: 281px;
  }

  .banner__btn {
    width: 154px;
    font-size: 16px;
  }

  @media screen and (min-width: 768px) {
    height: 771px;

    .banner-container {
      gap: 24px;
      height: 771px;
    }

    &:last-of-type,
    &:last-of-type .banner-container {
      height: 927px;
    }

    .banner__img {
      width: 996px;
      height: auto;
    }

    &:last-of-type p {
      margin-top: 201px;
    }

    .banner__btn {
      width: 335px;
      font-size: 20px;
    }
  }

  @media screen and (min-width: 1200px) {
    height: 540px;

    .banner-container {
      justify-content: center;
      align-items: flex-start;
      height: 540px;
    }

    &:last-of-type,
    &:last-of-type .banner-container {
      height: 540px;
    }

    &:last-of-type p {
      margin-top: 0;
    }

    .banner__img {
      left: 0;
      transform: translate(33%);
    }
  }
`;

const BannerDescription = styled(MultiLineText)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  max-width: 1200px;
  width: 100%;
  margin-top: 48px;
  font-size: 32px;
  font-weight: 700;
  line-height: 44.8px;
  text-align: center;
  z-index: 1;

  &.text-nowrap {
    display: none;
  }

  @media screen and (min-width: 768px) {
    &.banner__top-desc&.text-nowrap {
      display: block;
    }
    &.banner__top-desc&.text-wrap:first-of-type {
      display: none;
    }

    margin-top: 84px;
    font-size: 40px;
    line-height: 56px;
  }

  @media screen and (min-width: 1200px) {
    margin-top: 0;
    justify-content: center;
    align-items: flex-start;
    text-align: left;

    &.banner__top-desc&.text-nowrap {
      display: none;
    }
    &.banner__top-desc&.text-wrap:first-of-type {
      display: block;
    }
  }
`;

const SectionImg = styled(WebpLoader)`
  margin-bottom: 20px;
  width: 100%;

  @media screen and (min-width: 1200px) {
    width: 588px;
    height: 444px;
  }
`;

export default HomePage;
