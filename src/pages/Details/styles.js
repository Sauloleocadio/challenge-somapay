import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  margin: 45px;
  width: 1020px;

  article {
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #fff;
  margin: 15px;
  padding: 15px;
  border-radius: 5px;
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
  margin: 20px;
 }

 h1 {
    font-size: 20px;
    margin: 20px;
    color: #312e38;
  }


 @media screen and (max-width: 960px) {
  width: 100%;

  article {
    width: 100%;
    margin: 0px;

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

export const CardCharacters = styled.div`
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
  height: 280px;
  background-color: #454158;
  margin: 15px;
  border-radius: 5px;

  &:hover {
  background-color: #312e38;
  transform: scale(1.1);
  cursor: pointer;
  }

  img {
  max-width: 120px;
  max-height: 120px;
  }

  strong {
  font-size: 14px;
  text-align: center;
  color: #FFFFFF;
  margin-bottom: 10px;
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


}
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img {
    max-width: 200px;
    max-height: 300px;
  }

  h1 {
    font-size: 20px;
    margin: 20px;
    color: #312e38;
  }
`;
