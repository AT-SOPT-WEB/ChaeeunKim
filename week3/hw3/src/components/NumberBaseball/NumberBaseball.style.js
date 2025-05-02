import { css } from "@emotion/react";
import theme from "../../styles/theme";

export const numballStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 10rem;

  input {
    width: 50rem;
    padding: 1rem;
    background-color: ${theme.colors.lightgreen2};
    border: 1px solid ${theme.colors.darkgreen};
    border-radius: 5px;
    outline: none;
    font-size: 1.3rem;
  }
`;

export const messageSection = css`
  padding: 1rem;
  color: ${theme.colors.red};
  font-size: 1.5rem;
  font-weight: bold;
`;

export const listSection = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  div {
    display: flex;
    justify-content: center;
    width: 50rem;
    padding: 1.3rem;
    border: 1px solid ${theme.colors.darkgreen};
    border-radius: 5px;
    font-size: 1.3rem;
  }
`;
