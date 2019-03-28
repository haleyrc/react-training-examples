import React from "react";
import styled from "styled-components";

const Gallery = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin: 0 auto;
`;

const StyledExhibit = styled.div`
  padding: 20px;
  border-bottom: 1px solid lightgrey;
`;

const StyledChildren = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Exhibit = ({ title, children }) => (
  <StyledExhibit>
    <h4>{title}</h4>
    <StyledChildren>{children}</StyledChildren>
  </StyledExhibit>
);

export { Gallery, Exhibit };
