import React from 'react';
import { Link } from 'react-router-dom';
import './hooks.scss';

const Hooks = () => {
  return (
    <div className="menu-hooks">
      <Link to={'/hooks/usestate'}>Use State</Link>
      <Link to={'/hooks/useeffect'}>Use effect</Link>
      <Link to={'/hooks/usememo'}>Use memo</Link>
      <Link to={'/hooks/usecontext'}>Use context</Link>
      <Link to={'/hooks/usecallback'}>Use callback</Link>
      <Link to={'/hooks/usereducer'}>Use reducer</Link>
      <Link to={'/hooks/useref'}>Use Ref</Link>
    </div>
  );
};

export default Hooks;
