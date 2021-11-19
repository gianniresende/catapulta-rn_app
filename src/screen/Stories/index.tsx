import { useRoute } from '@react-navigation/core';
import React from 'react';
import {View} from 'react-native';

// import { Container } from './styles';

const Stories: React.FC = () => {
  const {params} = useRoute<StoriesHomeStackRouteProp>();
  console.log(params.para);
  return <View style={{flex: 1, backgroundColor: 'black'}} />;
};

export default Stories;
