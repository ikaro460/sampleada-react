
import styled from "styled-components";

export const StyledContainer = styled.nav`
   margin: 15px;

   ul {
      margin: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      list-style: none;
   }

   li {
      margin: 5px;
   }

   a {
      color: var(--post-white);
      text-decoration: none;
   }
`;