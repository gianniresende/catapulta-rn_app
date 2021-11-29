import {useContext} from 'react';
import React from 'react';
import {View} from 'react-native';
import {AuthContext} from '~/context/Auth';

const Onboarding: React.FC = () => {
  const ctx = useContext(AuthContext);
  console.log(ctx);
  return <View />;
};

export default Onboarding;
