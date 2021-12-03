import {useContext} from 'react';
import {AuthContext} from '~/context/Auth';

const useAuth = () => {
  const Context = useContext(AuthContext);

  if (!Context) {
    throw new Error('useAuth must be used with an Provider!');
  }

  return Context;
};

export default useAuth;
