import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, CardSubtitle, CardTitle } from '../../components/Card';
import User from '../../interfaces/User';
import UserActionBuilder from '../../stores/reducers/UserActionBuilder';
import { MeContainer, UpWaves } from './style';

const Me: React.FC = () => {

  const user = useSelector<any, User>(store => store.user);
  const dispatch = useDispatch();

  const handleLogout = useCallback(() => dispatch(UserActionBuilder.buildLogout()), [dispatch]);

  return (
    <MeContainer>
      <UpWaves />
      <Card>
        <CardTitle className='shaded-text'>Hello, {user.name}</CardTitle>
        <CardSubtitle>Here is your information</CardSubtitle>
        <div>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id='name' className="form-control block" defaultValue={user.name} disabled />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id='email' className="form-control block" defaultValue={user.email} disabled />
          </div>
          <button className="btn bg-red block" onClick={handleLogout}>Logout</button>
        </div>
      </Card>
    </MeContainer>
  );
}

export default Me;