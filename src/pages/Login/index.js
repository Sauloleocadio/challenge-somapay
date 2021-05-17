import { useState, useContext } from "react";
import { toast } from "react-toastify";
import { SiGoogle, SiGithub } from "react-icons/si";


import { AuthContext } from "../../contexts/Authprovider";
import { githubProvider, googleProvider } from "../../services/config/firebaseauthmetods";
import socialMediaAuth from "../../services/authfirebase";

import logoimg from "../../assets/logo.png"


import {
  Container,
  Content,
  AnimationContainer,
  Background,
  Form,
  ButtonLogin,
} from "./styles";

function Signin() {
  const { storageAuth } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const handleLogin = async(provider) => {
    setLoading(true)

    await socialMediaAuth(provider)
    .then((res) => {
      localStorage.setItem("@somapay:name", res.displayName ? res.displayName : "");
      localStorage.setItem("@somapay:email", res.email ? res.email : "");
      localStorage.setItem("@somapay:thumbnail", res.photoURL ? res.photoURL : "");
      setLoading(false);
      toast.success("Login realizado com sucesso!");

      storageAuth();

    })
    .catch((error) => {
      toast.error("Nao foi possivel fazer login tente novamente!");
      setLoading(false);
    });


  };

  const handleSubmit = event => {
    event.preventDefault();
  };

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={logoimg} alt="Marvel studios" />

          <Form onSubmit={handleSubmit}>
            <h1>Faça seu login</h1>

            <ButtonLogin
              onClick={() => handleLogin(githubProvider)}
              type="primary"
              loading={loading}
              disabled={loading}
            >

              {loading ? "" : <SiGithub size={20} color="#FFFFFF"/>}
              {loading ? "" : "Github"}
            </ButtonLogin>

            <ButtonLogin
              onClick={() => handleLogin(googleProvider)}
              type="primary"
              loading={loading}
              disabled={loading}
            >
              {loading ? "" : <SiGoogle size={20} color="#FFFFFF"/>}
              {loading ? "" : "Google"}
            </ButtonLogin>

          </Form>

        </AnimationContainer>
      </Content>
      <Background />
    </Container>
  );
}
export default Signin;
