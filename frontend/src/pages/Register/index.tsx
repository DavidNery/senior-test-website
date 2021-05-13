import { Form } from '@unform/web';
import { AxiosError } from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Card, CardTitle } from '../../components/Card';
import Input from '../../components/Input';
import API from '../../services/api';
import { RegisterContainer, UpWaves } from './style';

const Register: React.FC = () => {

  const history = useHistory();
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState(false);

  const onSubmit = useCallback(data => {
    API.post('/register', data).then(response => {
      setSuccess(true);
    }).catch((error: AxiosError) => {
      if (error.response?.data.error) {
        setError(error.response?.data.error);
      } else {
        const errors = error.response?.data.errors;
        setError(errors[Object.keys(errors)[0]]);
      }
    });
  }, []);

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
    <RegisterContainer>
      <UpWaves />
      <Card>
        <CardTitle className='shaded-text'>Register</CardTitle>
        <div>
          <Form onSubmit={onSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Input
                type="email"
                className="form-control block"
                id='email'
                name="email"
                placeholder='Your email'
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <Input
                type="text"
                className="form-control block"
                id='name'
                name="name"
                placeholder='Your name'
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
            <div className="form-group">
              <label htmlFor="cpassword">Confirm password</label>
              <Input
                type="password"
                className="form-control block"
                id='cpassword'
                name="cpassword"
                placeholder='Confirm your password'
                required
              />
            </div>

            <div style={{ textAlign: 'end', marginBottom: '15px', fontSize: '0.9rem' }}>
              Or login <Link to='/login' style={{ fontWeight: 700, color: 'var(--blue)' }}>here</Link>
            </div>

            {success && (
              <div className="alert bg-green">You're successfully registered!</div>
            )}
            {error && (
              <div className="alert bg-red">{error}</div>
            )}

            <input type='submit' className='btn bg-blue block' value='Join' />
          </Form>
        </div>
      </Card>
    </RegisterContainer>
  );
}

export default Register;