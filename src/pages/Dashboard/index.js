import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { addComics } from "../../redux/modules/comics/actions";
import api from "../../services/api";
import Header from "../../components/Header";
import {useCleanup} from '../../hooks/useCleanup';

import { Container, Card, ButtonLoadMore} from "./styles";

function Dashboard(params) {
  const dispatch = useDispatch();
  const history = useHistory();
  const isMountedRef = useCleanup();
  const [loading, setLoading] = useState(true);
  const [comics, setComics] = useState([]);

  useEffect(() => {
    api.get('/comics')
      .then((res) => {
        if (isMountedRef.current) {
          setComics(res.data.data.results);
          setLoading(false);
        }
    })
      .catch((error) => {
        if (isMountedRef.current) {
          setLoading(false);
        }
    });
  }, [isMountedRef]);

  const handleLoadMore = useCallback(async () => {
    try {
    if (isMountedRef.current) {
      setLoading(true);
     }
     const offset = comics.length;
     const response = await api.get('/comics', {
       params: {
         offset,
       }
     });

     if (isMountedRef.current) {
       setComics([...comics, ...response.data.data.results]);
       setLoading(false);
     }
    } catch (error) {
      setLoading(false);
    }

  }, [comics, isMountedRef]);

  function handleDetailsComics(comics) {
    dispatch(addComics(comics));

    history.push("/details");
  }

  return(
    <Container>
      <Header />
      <Card>
         {comics.map((item, index) => {
            return (
              <article
                key={index}
                onClick={() => handleDetailsComics(item)}
             >
                <img
                  src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                  alt={item.title}
                />
                <strong> {item.title} </strong>
              </article>
          )
    })}

      </Card>
      <ButtonLoadMore
       loading={loading}
       onClick={handleLoadMore}
      >
       {loading ? "" : "Carregar mais..."}
      </ButtonLoadMore>
    </Container>
  )
}

export default Dashboard;
