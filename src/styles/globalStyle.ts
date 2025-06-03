import { createGlobalStyle } from "styled-components";
import type { Theme } from "../types/theme-type";

type GlobalStyleProps = {
  theme: Theme;
};

export const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background-color: ${({ theme }) =>
      theme === "light" ? "white" : "black"};   
    color: ${({ theme }) => (theme === "light" ? "black" : "white")};
    transition: all 0.3s ease;
    font-family: var(--inter);
  }

`;
