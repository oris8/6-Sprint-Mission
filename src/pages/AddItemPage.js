import React, { useEffect, useState } from "react";
import styled from "styled-components";

import ItemFormGroup from "../components/ItemFormGroup";
import Button from "../components/BaseButton";
import DeleteIconButton from "../components/DeleteIconButton";

const TAG_LIMIT = 7;

const AddItemPage = () => {
  const [tags, setTags] = useState([]);
  const [isValidation, setIsValidation] = useState(false);

  const [values, setValues] = useState({
    name: "",
    price: "",
    description: "",
    tag: "",
  });

  const { name, price, description, tag } = values;
  const formatPrice = Number(price).toLocaleString();

  const handleChangeValue = (e) => {
    const { name, value } = e.target;

    let formatValue = value;
    if (name === "price") formatValue = value.replace(/\D/g, "");
    if (name === "tag") formatValue = value.replaceAll(" ", "");

    setValues((prevValues) => ({
      ...prevValues,
      [name]: formatValue,
    }));
  };

  const handleUpdateTag = (e) => {
    if (tags.length > TAG_LIMIT) return;

    const nextValue = e.target.value;

    nextValue &&
      setTags((prevValues) => [...new Set([...prevValues, nextValue])]);

    setValues((prevValues) => ({
      ...prevValues,
      tag: "",
    }));
  };

  const handleDeleteTag = (tag) => {
    setTags((prevTags) => prevTags.filter((tagEl) => tagEl !== tag));
  };

  useEffect(() => {
    if (name && price && description && tags) {
      setIsValidation(true);
    } else {
      setIsValidation(false);
    }
  }, [name, price, description, tags]);

  return (
    <StyledDiv>
      <div className="form-header">
        <h1>상품 등록하기</h1>
      </div>
      <form>
        <ItemFormGroup label="image" placeholder="이미지 등록" />
        <ItemFormGroup
          label="name"
          placeholder="상품명을 입력해주세요"
          value={name}
          onChange={handleChangeValue}
        />
        <ItemFormGroup
          label="price"
          placeholder="판매가격을 입력해주세요"
          value={price && formatPrice}
          onChange={handleChangeValue}
        />
        <ItemFormGroup
          label="description"
          placeholder="상품소개를 입력해주세요"
          value={description}
          onChange={handleChangeValue}
        />
        <ItemFormGroup
          label="tag"
          placeholder="태그를 입력해주세요"
          value={tag}
          onChange={handleChangeValue}
          onBlur={handleUpdateTag}
        />
        {tags && (
          <TagBox>
            {tags.map((tag) => (
              <TagEl>
                <p>{tag}</p>
                <DeleteIconButton
                  key={tag}
                  onClick={() => handleDeleteTag(tag)}
                />
              </TagEl>
            ))}
          </TagBox>
        )}
        <StyledButton type="submit" size="small" disabled={!isValidation}>
          등록
        </StyledButton>
      </form>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  position: relative;
  margin: 96px 16px;
  height: auto;

  .form-header {
    display: flex;
    align-items: center;
    height: 42px;
    margin-bottom: 16px;
    font-size: 20px;
    font-weight: 700;
  }

  @media screen and (min-width: 768px) {
    margin: 96px 24px;

    .form-header {
      margin-bottom: 20px;
      font-size: 28px;
      line-height: 33.41px;
    }
  }

  @media screen and (min-width: 1200px) {
    max-width: 1200px;
    margin: 96px auto;
  }
`;

const StyledButton = styled(Button)`
  position: absolute;
  top: 0;
  right: 0;
  width: 88px;
  height: 42px;
`;

const TagBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  width: 100%;
  min-height: 100px;
  height: auto;
  margin-top: 8px;
`;

const TagEl = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 4px;
  min-width: 100px;
  height: 48px;
  padding: 12px;
  border-radius: 26px;
  background-color: var(--color-cool-gray-100);
  font-weight: 400;
  font-size: 16px;
`;

export default AddItemPage;
