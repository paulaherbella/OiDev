import styled, {css} from "styled-components";

const textCss = css`
  color: ${(props) => props.color || "#fff"};
  font-weight: ${(props) => (props.bold ? "900" : "")};
  ${(props) => (props.size === "small" ? "font-size: 12px;" : "")}
`;

export const TextWrapper = styled.div`
  ${textCss}
`;

export const TextLink = styled.a`
  ${textCss};
  color: #e0f1ff;
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;