import "react-toastify/dist/ReactToastify.css";
import React from "react";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";

import store from "./redux/store";
import Routes from "./routes";
import AuthProvider from "./contexts/Authprovider";

import GlobalStyle from "./styles/global.js";

function App() {
  return (
    <Provider store={store}>
    <AuthProvider>
      <BrowserRouter>
        <ToastContainer autoclose={4000} />
        <Routes />

        <GlobalStyle />
      </BrowserRouter>
    </AuthProvider>
    </Provider>
  );
}

export default App;
