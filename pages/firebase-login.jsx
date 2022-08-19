import React from 'react';
import { signInUserAndObtainIDToken } from '../firebase/frontend/firebase-ops';

export default function FirebaseLogin() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [token, setToken] = React.useState('');

  const handleSubmit = () => {
    setToken('Loading...');
    signInUserAndObtainIDToken(email, password).then((result) => {
      if (result.error) {
        setToken('Error Occured: ' + result.message);
      } else {
        setToken('Token: ' + result.token ?? 'Token not found');
      }
    });
  };
  return (
    <div className='flex flex-col gap-2 p-4'>
      <input
        type='email'
        placeholder='Email Address'
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        className='p-2 border'
      />
      <input
        type='password'
        placeholder='Password Input'
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        className='p-2 border'
      />
      <button
        className='p-2 mt-2 ml-2 text-white bg-blue-600'
        onClick={handleSubmit}>
        Login And Get Token
      </button>
      {token !== '' && <p>{token}</p>}
    </div>
  );
}
