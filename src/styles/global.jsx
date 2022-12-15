import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  
  //GLOBAL COLOR PALETTE
  
  :root {
        --background-black: #000000;
        --post-white: #fff;
        --title-blue: #29325D;
        --text-grey: #666;
        --button-grey: #e8e8e8;
        --purple-1: #6c80be
    }
  
  body{
    color: var(--post-white);
    display: flex;
    justify-content: center;
  }
  .App {
    padding: 25px;
  }
  .App-header {
    display:flex;
    flex-direction: column;
    align-items: center;
}
`;