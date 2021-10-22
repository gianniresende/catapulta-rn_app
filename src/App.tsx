import React from 'react';

import {ThemeProvider} from 'styled-components';
import Button from './components/Button';
import Header from './components/Header';
import useAppearence from './hooks/Appearence';
import {Container} from './styles';

const App: React.FC = () => {
  const {theme} = useAppearence();
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header />
        <Button onPress={() => {}} />
      </Container>
    </ThemeProvider>
  );
};

export default App;
