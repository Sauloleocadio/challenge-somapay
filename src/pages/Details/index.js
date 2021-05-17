import { useLayoutEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import api from "../../services/api";
import Header from "../../components/Header";
import {useCleanup} from '../../hooks/useCleanup';

import { Container, Card, CardCharacters, Wrapper } from "./styles";

function Details() {
  const isMountedRef = useCleanup();
  const history = useHistory();
  const [comics] = useSelector((state) => state.comics);

  const [comicscharacters, setCharacterscomics] = useState([]);

  useLayoutEffect(() => {
    if (!comics) {
      history.push("/");
    } else {
        async function loadCharactersComics() {
          const response = await api.get(`/comics/${comics.id}/characters`);
          if (isMountedRef.current) {
            setCharacterscomics(response.data.data.results);
          }
        }
        loadCharactersComics();
      }

  }, [history, comics, isMountedRef]);

  return(
    <Container>
      <Header />
      <Card>
      <article>
      <Wrapper>

        <img
          src={comics ? `${comics.thumbnail.path}.${comics.thumbnail.extension}` : ""}
          alt={comics ? comics.title : ""}
        />
        <h1>{comics ? comics.title : ""}</h1>
        <strong>{comics ? comics.description : ""}</strong>
      </Wrapper>
      {comicscharacters.length !== 0 ? (
           <h1>Personagens principais:</h1>
      ) : <></>}
      <CardCharacters>
      {comicscharacters.map((item, index) => {
            return (
              <article
                key={index}
             >
                <img
                  src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                  alt={item.name}
                />
                <strong>{item.name}</strong>
              </article>
          )
        })}
      </CardCharacters>
      </article>
      </Card>
    </Container>
  )
}

export default Details;
