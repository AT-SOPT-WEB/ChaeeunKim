import { css } from "@emotion/react";
import theme from "../../styles/theme";

export const searchGithubStyle = css`
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
    border-radius: 10px;
    outline: none;
    font-size: 1.3rem;
  }
`;

export const keywordSection = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;

  p {
    font-size: 1.5rem;
    font-weight: 600;
  }

  ul {
    display: flex;
    gap: 1rem;
  }

  li {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 0.7rem;
    border: 1px solid ${theme.colors.darkgreen};
    border-radius: 20px;
  }

  button {
    padding: 0;
    font-size: 1rem;
    background-color: transparent;
    border: none;
  }
`;

export const cardSection = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background-color: ${theme.colors.darkgreen};
  border-radius: 20px;

  img {
    width: 10rem;
    border: 3px solid ${theme.colors.lightgreen};
    border-radius: 100px;
  }

  a {
    text-decoration: none;
  }
`;

export const buttonSection = css`
  background-color: ${theme.colors.lightgreen};
  border: none;
  border-radius: 100px;
`;

export const avatarSection = css`
  padding: 1rem;
`;

export const profileSection = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  .name {
    font-size: 1.5rem;
    font-weight: bold;
    color: ${theme.colors.white};
  }

  .login,
  .bio {
    font-size: 1rem;
    color: ${theme.colors.lightgray};
  }
`;

export const followSection = css`
  display: flex;
  gap: 1rem;
  padding: 0.5rem;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 13rem;
    padding: 1rem;
    border-radius: 10px;
    background-color: ${theme.colors.lightgreen};
  }

  p {
    font-weight: 700;
  }
`;
