import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Card from "../components/Card";
import BaseButton from "../components/BaseButton";
import SortSelectBox from "../components/SortSelectBox";
import Pagination from "../components/Pagination";

import { getItems } from "../services/api";
import useWindowSize from "../hooks/useWindowSize";
import usePagination from "../hooks/usePagination";
import ItemPageSearchInput from "../components/ItemPageSearchInput";
import ItemPageBestSection from "../components/ItemPageBestSection";

const BEST_ITEMS_LIMIT = {
  small: 1,
  medium: 2,
  large: 4,
};

const ITEMS_LIMIT = {
  small: 4,
  medium: 6,
  large: 10,
};

function ItemPage() {
  const [items, setItems] = useState([]);
  const [bestItems, setBestItems] = useState([]);
  const [order, setOrder] = useState("createdAt");
  const [searchValue, setSearchValue] = useState("");
  const { width } = useWindowSize();
  const [screenSize, setScreenSize] = useState("small");

  useEffect(() => {
    width >= 1200
      ? setScreenSize("large")
      : width >= 768
      ? setScreenSize("medium")
      : setScreenSize("small");
  }, [width]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const { list } = await getItems();

        const sortedItems = [...list].sort((a, b) => b[order] - a[order]);
        setItems(sortedItems);

        const sortedItemsByFavorite = list.sort(
          (a, b) => b.favoriteCount - a.favoriteCount
        );

        const favoriteItemList = sortedItemsByFavorite.slice(
          0,
          BEST_ITEMS_LIMIT[screenSize]
        );
        setBestItems(favoriteItemList);

        if (searchValue) {
          const searchedItem = list.filter((item) => {
            return item.name.toLowerCase().includes(searchValue.toLowerCase());
          });
          setItems(searchedItem);
        }
      } catch (error) {
        console.error("상품 목록을 불러오는 중 오류가 발생했습니다:", error);
      }
    };

    fetchItems();
  }, [order, screenSize, searchValue]);

  const {
    currentPage,
    totalPages,
    goToPrevPage,
    goToNextPage,
    goToPage,
    paginatedList,
  } = usePagination(items, ITEMS_LIMIT[screenSize]);

  return (
    <>
      <StyledDiv>
        <ItemPageBestSection bestItems={bestItems} />

        <StyledItemPageSection>
          <StyledItemTitleSection>
            <span>판매중인 상품</span>
            <Link to="/additem">
              <StyledAddItemBtn size="small">상품 등록하기</StyledAddItemBtn>
            </Link>

            <StyledItemPageSearchInput
              placeholder="검색할 상품을 입력해주세요"
              value={searchValue}
              onChange={setSearchValue}
            />
            <StyledSelectBox
              onClick={setOrder}
              order={order}
              size={screenSize === "small" ? "small" : "medium"}
            ></StyledSelectBox>
          </StyledItemTitleSection>
          <div>
            {paginatedList.map((item) => (
              <StyledItemCard key={item.id} item={item} />
            ))}
          </div>
        </StyledItemPageSection>

        <StyledPagination
          currentPage={currentPage}
          totalPages={totalPages}
          goToPrevPage={goToPrevPage}
          goToNextPage={goToNextPage}
          goToPage={goToPage}
        ></StyledPagination>
      </StyledDiv>
    </>
  );
}

const StyledDiv = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 17px 16px;
  margin-top: 70px;
  margin-bottom: 62px;
`;

const StyledItemPageSection = styled.div`
  > div:nth-of-type(2) {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  @media screen and (min-width: 768px) {
    > div:nth-of-type(2) {
      gap: 16px;
    }
  }

  @media screen and (min-width: 1200px) {
    > div:nth-of-type(2) {
      gap: 24px;
    }
  }
`;

const StyledItemTitleSection = styled.div`
  display: grid;
  grid-template-columns: 1fr calc(132px - 42px - 8px) 42px;
  grid-template-areas:
    "title btn btn"
    "search search sort";
  grid-gap: 8px;

  > span {
    grid-area: title;
    margin: auto 0;
    font-weight: 700;
    font-size: 20px;
    color: #111827;
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr auto auto auto;
    grid-template-areas: "title search btn sort";
    grid-gap: 8px;
  }
`;

const StyledItemPageSearchInput = styled(ItemPageSearchInput)`
  grid-area: search;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 242px;
  }

  @media screen and (min-width: 1200px) {
    width: 325px;
  }
`;

const StyledAddItemBtn = styled(BaseButton)`
  grid-area: btn;
  width: 133px;
  height: 42px;
`;

const StyledSelectBox = styled(SortSelectBox)`
  grid-area: sort;
`;

const StyledItemCard = styled(Card)`
  width: calc(50% - 4px);

  @media screen and (min-width: 768px) {
    width: calc(33.3% - 12px);
  }
  @media screen and (min-width: 1200px) {
    /* 19.2px = 24(margin-right값) % 5(요소 개수) * 4(gap개수)  */
    width: calc(20% - 19.2px);
  }
`;

const StyledPagination = styled(Pagination)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;

export default ItemPage;
