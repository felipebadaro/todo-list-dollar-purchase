import styled from "styled-components";

export const StyledForm = styled.form`
  & {
    background-color: var(--light-grey);
    border: 1px solid var(--green);
    border-radius: 15px;
    max-width: 460px;
    margin: auto;
    padding: 25px;
  }

  & h3 {
    color: var(--dark-green);
    font-size: 22px;
    margin: 10px 0 30px 0;
    text-align: center;
  }

  & input[type="submit"] {
    background-color: var(--dark-green);
    border-radius: 14px;
    color: var(--white);
    font-size: 17px;
    margin: 10px 0;
    padding: 15px;
  }
`;
