import React from "react";
import styled from "styled-components";

const BaseIcon = ({ className, src }) => {
  return <Icon className={className} src={src} />;
};

const Icon = styled.i`
  display: block;
  width: 24px;
  height: 24px;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
`;

export default BaseIcon;
