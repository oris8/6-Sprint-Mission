import React from "react";
import styled from "styled-components";

import BaseIcon from "./BaseIcon";

import XIcon from "../assets/icon/X.svg";
import activeXIcon from "../assets/icon/activeX.svg";

const DeleteIconButton = ({ onClick }) => {
  return (
    <DeleteButtonEl onClick={onClick}>
      <BaseIcon src={XIcon} />
      <BaseIcon src={activeXIcon} className="active" />
    </DeleteButtonEl>
  );
};

const DeleteButtonEl = styled.button`
  display: block;
  width: 22px;
  height: 24px;

  .active {
    display: none;
  }

  &:hover,
  &:focus {
    i {
      display: none;
    }
    i.active {
      display: block;
    }
  }
`;

export default DeleteIconButton;
