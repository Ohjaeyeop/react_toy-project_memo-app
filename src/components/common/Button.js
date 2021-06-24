import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 4px;
  font-size: 1rem;
  padding: 0.25rem 1rem;
  color: white;
  background-color: BurlyWood;
`;

const Button = (props) => {
  return <StyledButton {...props} />;
};

export default Button;
