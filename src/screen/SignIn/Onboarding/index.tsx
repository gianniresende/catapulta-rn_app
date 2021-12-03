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
            email: '',
            password: '',
          })
        }>
        Sign in
      </Button>
    </SafeAreaView>
  );
};

export default Onboarding;
