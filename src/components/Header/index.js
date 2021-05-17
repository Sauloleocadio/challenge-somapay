import { useContext } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { AuthContext } from "../../contexts/Authprovider";

import logo from "../../assets/logo.png";
import hero from "../../assets/hero.png";

import { Container, ContainerUser, ContainerImg, ContainerInfo } from "./styles";

function Header() {
  const { authname, auththumbnail, authemail } = useContext(AuthContext);
  const [comics] = useSelector((state) => state.comics);

  return (
    <Container>
      <Link to="/details">
        <img
          src={comics ? `${comics.thumbnail.path}.${comics.thumbnail.extension}` : logo}
          alt="Marvel studios"
        />
      </Link>

      <Link to="/">
        <ContainerUser>
          <ContainerImg>
            <img
              src={auththumbnail === "" ? hero : auththumbnail}
              alt="Thumbnail"
            />
          </ContainerImg>

        <ContainerInfo>
            <strong>
              {authname}
            </strong>

            <strong>
              {authemail}
            </strong>
        </ContainerInfo>
        </ContainerUser>
      </Link>
    </Container>
  );
}

export default Header;
