import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [authname, setAuthname] = useState(null);
  const [authemail, setAuthemail] = useState(null);
  const [auththumbnail, setAuththumbnail] = useState(null);

  useEffect(() => {
      storageAuth();
  }, []);

  async function storageAuth() {
    setLoading(true);
    const name = localStorage.getItem("@somapay:name");
    const email = localStorage.getItem("@somapay:email");
    const thumbnail = localStorage.getItem("@somapay:thumbnail");
    setAuthname(name);
    setAuthemail(email);
    setAuththumbnail(thumbnail);
    setLoading(false);
  }

  return (
    <AuthContext.Provider
      value={{
        loading,
        authname,
        authemail,
        auththumbnail,
        storageAuth,
        setAuthname,
        setAuthemail,
        setAuththumbnail,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
