import styled from "styled-components";

export const StyledPurchase = styled.div`
  & {
    background-color: ${({ status }) =>
      status == "purchased" ? "var(--dark-green)" : "var(--yellow)"};
    border: 2px solid var(--light-grey);
    border-radius: 10px;
    padding: 20px;
    text-align: left;
    width: 140px;
  }

  & .total {
    border-bottom: 1px solid var(--white);
    font-size: 28px;
    font-weight: bold;
    margin: 0;
    padding: 10px 0;
  }

  & .description {
    font-size: 18px;
    margin: 0 0 10px 0;
    padding: 10px 0;
  }

  & ul li {
    font-size: 14px;
    margin: 5px 0;
  }

  & .btnBuy {
    background-color: var(--dark-green);
    border-radius: 25px;
    color: var(--white);
    margin: 10px 0;
    padding: 10px;
  }

  & .statusTextPending {
    color: var(--orange);
    font-size: 16px;
    font-weight: bold;
    margin: 20px 0;
    text-align: center;
  }
`;
