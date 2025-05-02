import { css } from "@emotion/react";
import theme from "../../styles/theme";

export const headerStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 2rem 0;
  background-color: ${theme.colors.darkgreen};
  color: ${theme.colors.white};
  font-size: 2rem;

  div {
    display: flex;
    gap: 1rem;
  }
`;
