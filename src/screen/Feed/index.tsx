import React from 'react';
import {Button, View} from 'react-native';

const Feed: React.FC = ({navigation}) => {
  const handlePress = () => {
    navigation.navigate('stories');
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
