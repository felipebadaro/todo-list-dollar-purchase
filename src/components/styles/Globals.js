import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    outline: 0;
    font-size: 1em;
    font-weight: normal;
    font-style: normal;
    border: 0;
    text-decoration: none;
    list-style-type: none;
  }
  
  :root {
    --black: #1f2421;
    --green: #49a078;
    --dark-green: #216869;
    --dark-grey: #223843;
    --light-grey: #dce1de;
    --orange: #be7c4d;
    --yellow: #bab700;
    --white: #ffffff;
  }
  
  body {
    background-color: var(--black);
    color: var(--light-grey);
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  }
  
  .right {
    text-align: right;
  }  
`;
