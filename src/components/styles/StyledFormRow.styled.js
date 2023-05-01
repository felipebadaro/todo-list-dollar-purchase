import styled from "styled-components";

export const StyledFormRow = styled.div`
  & {
    display: flex;
    flex-direction: row;
    gap: 4px;
    justify-content: space-between;
    margin-bottom: 15px;
  }

  & input[type="text"] {
    border: 2px solid var(--green);
    border-radius: 5px;
    font-size: 18px;
    padding: 3px;
  }

  & label {
    color: var(--dark-green);
    font-size: 16px;
  }
`;
