import { css } from "@emotion/react";
import theme from "../../styles/theme";

export const tabBtnStyle = css`
  padding: 0.5rem 1rem;
  background-color: transparent;
  border: none;
  border-radius: 5px;
  color: ${theme.colors.white};
  cursor: pointer;

  &:hover {
    background-color: ${theme.colors.lightgreen};
    color: ${theme.colors.black};
  }
`;

export const activeStyle = css`
  background-color: ${theme.colors.lightgreen};
  color: ${theme.colors.black};
`;
