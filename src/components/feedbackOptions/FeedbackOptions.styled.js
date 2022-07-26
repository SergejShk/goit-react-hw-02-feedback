import styled from 'styled-components';

export const FeedbackOptionsListStyled = styled.ul`
  width: 800px;
  background-color: #d9dbdf;
  border-radius: 12px;
  display: flex;
  justify-content: space-around;
  padding: 30px;
  margin: 30px auto;

  li {
    display: flex;
    align-items: center;
  }

  button {
    cursor: pointer;
    background-color: #363739;
    color: #fff;
    border-radius: 12px;
    font-size: 36px;
    font-weight: 700;
    padding: 20px;
    border: none;
  }
  button:hover {
    background-color: #a7c8f7;
  }
`;
