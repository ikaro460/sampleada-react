
import styled from "styled-components";

export const StyledContainer = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;

   position: fixed;
   left: 0;
   top: 0;
   width: 100%;
   height: 70px;
   background-color: var(--background-black);
   color: white;
   text-align: center;

   img:hover {
      cursor: pointer;
   }

   ul {
      display: flex;
      list-style: none;
   }
   li {
      margin: 10px;
   }

   a {
      border: none;
      color: white;
      text-align: center;
      margin: 4px 2px;
      opacity: 0.6;
      transition: 0.3s;

      
      font-style: Regular;
      font-size: 19px;

      line-height: 23px;
      line-height: 100%;
      letter-spacing: 2px;
   }
   a:hover {opacity: 1}
`;