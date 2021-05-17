import styled from "styled-components";
import { shade } from "polished";

export const Container = styled.button`
  background: #312e38;
  color: #ffffff;
  font-weight: 700;
  margin-top: 7px;
  border-radius: 5px;
  border: 0;
  height: 46px;
  width: 100%;
  transition: background 0.2s;

  &:hover {
    background: ${shade(0.2, "#312e38")};
  }
`;
