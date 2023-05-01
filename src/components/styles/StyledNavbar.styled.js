import styled from "styled-components";

export const StyledNavbar = styled.div`
  & {
    background-color: var(--green);
    border: 1px solid var(--white);
    margin-bottom: 20px;
    padding: 10px;
    text-align: center;
  }

  & a {
    color: var(--light-grey);
  }

  & a:hover {
    color: var(--dark-green);
  }

  & ul {
    align-content: center;
    display: flex;
    gap: 20px;
    justify-content: center;
  }
`;
