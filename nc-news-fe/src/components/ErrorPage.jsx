import React from 'react';
import { ErrorMain } from '../styles/ErrorStyles';

const ErrorPage = ({ err: { msg, status } }) => {
  return (
    <ErrorMain>
      <h2>{status} Error</h2>
      <p>{msg}</p>
    </ErrorMain>
  );
};

export default ErrorPage;
