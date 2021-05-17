import axios from "axios";
import md5 from "md5";

const {REACT_APP_PUBLIC_KEY, REACT_APP_PRIVATE_KEY} = process.env;


const publicKey = REACT_APP_PUBLIC_KEY;
const privateKey = REACT_APP_PRIVATE_KEY;
const ts = Number(new Date());
const hash = md5(ts + privateKey + publicKey);

const api = axios.create({
  baseURL: "https://gateway.marvel.com/v1/public",
  params: {
    ts,
    apikey: publicKey,
    hash,
  }
});

export default api;
