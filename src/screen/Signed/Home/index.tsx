import React from 'react';
import {SafeAreaView} from 'react-native';
import Button from '~/components/Button';
import useAuth from '~/hooks/useAuth';

const Home: React.FC = () => {
  const {signOut} = useAuth();
  return (
    <SafeAreaView>
      <Button onPress={signOut}>Sign Out</Button>
    </SafeAreaView>
  );
};

export default Home;
