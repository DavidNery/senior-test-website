import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { Route } from 'react-router-dom';
import User from '../../interfaces/User';

interface Props {
  path: string,
  component: React.FC,
  exact?: boolean
}

const ProtectedRoute: React.FC<Props> = ({ component: Component, ...rest }) => {
  const user = useSelector<any, User>(store => store?.user);

  if (user)
    return <Route render={() => (<Component />)} {...rest} />;
  else
    return <Redirect to='/' />
}

export default ProtectedRoute;