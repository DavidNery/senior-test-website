import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Me from "./pages/Me";
import Register from "./pages/Register";
import API from "./services/api";
import UserActionBuilder from "./stores/reducers/UserActionBuilder";

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    const interceptorID = API.interceptors.request.use(request => {
      if (request.url?.indexOf('/me') === -1) return request;

      const token = localStorage.getItem('token');
      if (token) {
        request.headers = {
          ...request.headers,
          'Authorization': `Bearer ${token}`
        }
      }
      return request;
    });

    return () => API.interceptors.request.eject(interceptorID);
  }, []);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      API.get('/me').then(meResponse => {
        const { id, name, email } = meResponse.data;
        dispatch(UserActionBuilder.buildUpdateUser({ id, name, email }));
      }).catch(_ => dispatch(UserActionBuilder.buildLogout()));
    }
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <ProtectedRoute path='/me' component={Me} />
        <Route render={() => (<Redirect to='/' />)} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;