import styled from "styled-components";


export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px 0px 10px 0px;
  background-color: #312e38;
  width: 100%;

  img {
    max-width: 110px;
    max-height: 110px;
  }

`;

export const ContainerUser = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media(max-width: 800px) {
    display: flex;
    flex-direction: column;
  }

`;

export const ContainerImg = styled.div`
  max-width: 50px;
  max-height: 50px;
  border-radius: 25px;
  background: #f0141e;
  align-items: center;
  justify-content: center;
  display: flex;

  img {
    padding: 2px;
    width: 100%;
    height: 100%;
    border-radius: 45px;
  }

`;

export const ContainerInfo = styled.div`
  margin-left: 10px;

  strong {
    color: #ffffff;
    display: block;
    font-size: 12px;
    font-weight: bold;
  }

  @media(max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-content: center;
  }

`;

