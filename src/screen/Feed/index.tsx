/* eslint-disable @typescript-eslint/no-unused-vars */
import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Button, View} from 'react-native';
const Feed: React.FC = () => {
  const navigation = useNavigation<StartBotonTabNavigationProp>();

  navigation.navigate('profile');
  navigation.navigate('home');

  const handlePress = () => {
    navigation.navigate('home', {
      screen: 'stories',
      params: {para: 'Gianni'},
    });
  };

  const handlePressToPosts = () => {
    navigation.navigate('profile', {
      screen: 'post',
    });
  };

  return (
    <View style={{flex: 1, backgroundColor: 'green'}}>
      <Button title="Go to Stories" onPress={handlePress} />
      <Button title="Go to Posts" onPress={handlePressToPosts} />
    </View>
  );
};

export default Feed;
