import styled from "styled-components";

export const StyledMessage = styled.div`
  & {
    margin: 40px 0;
  }

  & p {
    text-align: center;
  }

  & p.error {
    color: var(--orange);
  }

  & p.success {
    color: var(--green);
  }
`;
