import styled from "styled-components";
import Button from "../../components/Button"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  margin: 45px;
  width: 1020px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  article {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 200px;
  height: 400px;
  background-color: #fff;
  margin: 15px;
  border-radius: 5px;

  &:hover {
  background-color: #ffffffea;
  transform: scale(1.1);
  cursor: pointer;
  }

  }

  strong {
  font-size: 14px;
  text-align: center;
  color: #454158;
  margin-bottom: 10px;
 }

 img {
  max-width: 200px;
  max-height: 300px;
 }


 @media screen and (max-width: 960px) {
  width: 100%;

  article {
    width: 100%;

    &:hover {
    cursor: pointer;
    transform: none;
    }
  }

  img {
    margin-top: 20px;
  }


 }
`;

export const ButtonLoadMore = styled(Button)`
  width: 200px;
  margin-top: 10px;
  margin-bottom: 60px;
`;
