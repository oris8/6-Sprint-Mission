import React from "react";
import styled from "styled-components";

import BaseIcon from "./BaseIcon";
import BaseInput from "./BaseInput";

import searchIcon from "../assets/icon/search.svg";

const ItemPageSearchInput = ({
  className = "",
  placeholder,
  value,
  onChange,
}) => {
  const handleChange = (e) => {
    value = e.target.value;
    onChange(value);
  };

  return (
    <StyledSearchInput className={className}>
      <StyledIcon src={searchIcon} />
      <StyledInput
        type="text"
        className="input-field"
        placeholder={placeholder}
        onChange={handleChange}
      />
    </StyledSearchInput>
  );
};

const StyledSearchInput = styled.div`
  position: relative;
  width: 294px;
  height: 42px;
`;

const StyledIcon = styled(BaseIcon)`
  position: absolute;
  top: 9px;
  left: 16px;
`;

const StyledInput = styled(BaseInput)`
  padding: 9px 44px;
`;

export default ItemPageSearchInput;
