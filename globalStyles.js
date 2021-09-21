import styled, { createGlobalStyle } from "styled-components";
import Link from "next/link";
const GlobalStyles = createGlobalStyle`

*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html{
  scroll-behavior: smooth;
}

body{
  /* font-family: 'Lato', sans-serif;
  font-family: 'Merriweather', serif; */
  padding-top: 80px;
  font-family: 'Lato', sans-serif;
  font-weight: 400; 
  min-height: 200vh;
  background: ${({ theme }) => theme.color_background_400};
  line-height: 1.3;
  font-size: ${({ theme }) => theme.font_regular};
  overflow: overlay;

  @media screen and (max-width: 768px) {
    padding-bottom: 70px;
  }
}

@media screen and (min-width: 425px){
  ::-webkit-scrollbar-thumb {
      width: 5px;
      border-radius: 500px;
    }
  
    ::-webkit-scrollbar {
      cursor: pointer;
      width: 14px;
      height: 14px;
    }
  
    ::-webkit-scrollbar-thumb {
      border: 4px solid rgba(0, 0, 0, 0);
      background-clip: padding-box;
      border-radius: 9999px;
      background-color: ${({ theme }) => theme.color_text_400};
    }
  
    ::-webkit-scrollbar-track {
      background: transparent;
      //background: transparent;
    }
}

a {
/* color: inherit;
user-select: none; */
text-decoration:none;
}

a:-webkit-any-link{
  color:inherit;
}

/* a:visited {
  color: inherit;
} */

input,
textarea,
button,
select,
a {
  -webkit-tap-highlight-color: rgba(0,0,0,0);
}

button{
  outline: none;
  border: none;
  background: transparent;
}

input,
label,
select,
button,
textarea {
  font-family:
  //"Source Sans Pro", //3
  //"Lora", //1.3
  //"Poppins", //8
  //"Rubik", //5
  //"Exo 2", //3
  //"Quicksand", //7,7
  //"Nunito", //7.8 
  //"Open Sans", //7
  // "Lato",
  // "Lexend",
  "Lato", sans-serif;
}

button:disabled {
  cursor: not-allowed;
  filter: grayscale(100);
  //border: 2px dashed #ccc;
}
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 80px;

  background: ${({ theme, variantColor }) =>
    variantColor ? theme.color_background_300 : "transparent"};

  @media screen and (max-width: 960px) {
    padding: 0 25px;
  }
`;

export const Section = styled.section`
  width: 100%;
  padding: 150px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ variantNegative, theme }) =>
    variantNegative ? theme.color_text_400 : theme.color_background_400};

  background: ${({ variantColor, variantNegative, theme }) =>
    variantColor
      ? variantNegative
        ? theme.color_text_400
        : theme.color_background_300
      : variantNegative
      ? theme.color_text_400
      : theme.color_background_400};

  @media screen and (max-width: 960px) {
    padding: 100px 0;
  }
`;

export default GlobalStyles;
