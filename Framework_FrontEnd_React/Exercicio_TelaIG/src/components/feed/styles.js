import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 975px;
  padding: 30px 20px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Item = styled.div`
  width: 293px;
  height: 293px;
  cursor: pointer;
  position: relative;
  
  &:hover:after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 290px;
  object-fit: cover;
`;