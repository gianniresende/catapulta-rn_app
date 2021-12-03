import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Button from '~/components/Button';
import useAuth from '~/hooks/useAuth';

const Onboarding: React.FC = () => {
  const {signIn, loading} = useAuth();
  return (
    <SafeAreaView>
      <Button
        loading={loading}
        onPress={() =>
          signIn({
            email: 'gianniresende@gmail.com',
            password: '698dc19d489c4e4db73e28a713eab07b',
          })
        }>
        Sign in
      </Button>
    </SafeAreaView>
  );
};

export default Onboarding;
