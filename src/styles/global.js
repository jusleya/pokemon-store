import { createGlobalStyle, css } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    height: 100%;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  body {
    height: 100%;
    ${({ theme: { colors } }) => css`
      color: ${colors.auxiliary.black};
    `}
  }
`;
