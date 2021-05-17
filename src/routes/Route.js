import { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../contexts/Authprovider";

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const { loading, authemail } = useContext(AuthContext);

  if (loading) {
    return <></>;
  }

  if (authemail === null && isPrivate) {
    return <Redirect to="/" />;
  }

  if (authemail !== null  && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }

  return <Route {...rest} render={(props) => <Component {...props} />} />;
}
