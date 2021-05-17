import styled, { keyframes } from "styled-components";
import { shade } from "polished";
import Button from "../../components/Button";

import marvel from "../../assets/marvel.jpeg";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;
  background: #ffffff;
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px)
  }
  to {
    opacity: 1;
    transform: translateX(0)
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${appearFromLeft} 1s;
  img {
    height: 100px;
    width: 200px;
  }
  form {
    margin: 40px 0;
    width: 340px;
    text-align: center;
    h1 {
      margin-bottom: 24px;
    }
    a {
      color: #f0141e;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.3s;
      &:hover {
        color: ${shade(0.2, "#f0141e")};
      }
    }
  }
  > a {
    color: #f0141e;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.3s;
    display: flex;
    align-items: center;
    svg {
      margin-right: 16px;
    }
    &:hover {
      color: ${shade(0.2, "#f0141e")};
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${marvel}) no-repeat center;
  background-size: cover;
`;


export const ButtonLogin = styled(Button)`
  cursor: ${({ isLoading }) => (isLoading ? "not-allowed" : "pointer")};
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  align-content: center;
  justify-content: center;
  margin-right: 5px;

  svg {
    margin-right: 15px;
  }
`;


export const Form = styled.form`
  width: 100%;
  max-width: 350px;
  margin-right: 30px;
  h1 {
    color: #232129;
    font-size: 18px;
  }
`;
