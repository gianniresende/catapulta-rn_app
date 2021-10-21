import React from 'react';

import {Container, Name, Title} from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Title>Bem vindo!</Title>
      <Name>Gianni</Name>
    </Container>
  );
};

export default Header;
