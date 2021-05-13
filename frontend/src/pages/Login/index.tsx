import { Form } from '@unform/web';
import { AxiosError } from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { Card, CardTitle } from '../../components/Card';
import Input from '../../components/Input';
import API from '../../services/api';
import UserActionBuilder from '../../stores/reducers/UserActionBuilder';
import { LoginContainer, UpWaves } from './style';

const Login: React.FC = () => {
  const history = useHistory();
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState(false);

  const dispatch = useDispatch();

  const onSubmit = useCallback(data => {
    API.post('/login', data).then(response => {
      const token = response.data.access_token;
      localStorage.setItem('token', token);
      
      API.get('/me', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }).then(meResponse => {
        const { id, name, email } = meResponse.data;
        dispatch(UserActionBuilder.buildUpdateUser({ id, name, email }));
      });
      setSuccess(true);
    }).catch((error: AxiosError) => {
      if (error.response?.data.error) {
        setError(error.response?.data.error);
      } else {
        const errors = error.response?.data.errors;
        setError(errors[Object.keys(errors)[0]]);
      }
    });
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      const timeout = setTimeout(() => {
        setError(undefined);
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [error]);

  useEffect(() => {
    if (success) {
      const timeout = setTimeout(() => {
        history.replace('/');
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [history, success]);

  return (
    <LoginContainer>
      <UpWaves />
      <Card style={{ minWidth: '30%' }}>
        <CardTitle className='shaded-text'>Login</CardTitle>
        <div>
          <Form onSubmit={onSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Input
                type="text"
                className="form-control block"
                id='email'
                name="email"
                placeholder='Your email'
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Input
                type="password"
                className="form-control block"
                id='password'
                name="password"
                placeholder='Your password'
                required
              />
            </div>

            <div style={{ textAlign: 'end', marginBottom: '15px', fontSize: '0.9rem' }}>
              Or register <Link to='/register' style={{ fontWeight: 700, color: 'var(--blue)' }}>here</Link>
            </div>

            {success && (
              <div className="alert bg-green">You're logged in!</div>
            )}
            {error && (
              <div className="alert bg-red">{error}</div>
            )}

            <input type='submit' className='btn bg-blue block' value='Join' />
          </Form>
        </div>
      </Card>
    </LoginContainer>
  );
}

export default Login;