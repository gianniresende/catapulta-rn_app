import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '~/screen/Home';
import Profile from '~/screen/Profile';
import Icon from '~/components/Icon';
import HomeStackNavigator from '../HomeStackNavigator';
import ProfileStackNavigator from '../ProfileStackNavigator';

const BottonTab = createBottomTabNavigator();

const BottonTabs = () => {
  return (
    <BottonTab.Navigator>
      <BottonTab.Screen
        name="home"
        component={HomeStackNavigator}
        options={{
          header: () => null,
          tabBarIcon: () => <Icon icon="fantasma" size={28} />,
        }}
      />
      <BottonTab.Screen
        name="profile"
        component={ProfileStackNavigator}
        options={{
          tabBarIcon: () => <Icon icon="ceifador" size={28} />,
        }}
      />
    </BottonTab.Navigator>
  );
};

export default BottonTabs;
