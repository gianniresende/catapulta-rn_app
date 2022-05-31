import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from '~/components/Icon';
import Home from '~/screen/SignedIn/Home';
import Profile from '~/screen/SignedIn/Profile';
import {useTheme} from 'styled-components';
import HomeStack from './HomeStack';

const BottonTab = createBottomTabNavigator<BottonTabParamsList>();

const BottonTabNavigator = () => {
  const {colors} = useTheme();
  return (
    <BottonTab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.primary.main,
        tabBarInactiveTintColor: colors.surface.main,
      }}>
      <BottonTab.Screen
        name="home"
        component={HomeStack}
        options={{
          header: () => null,
          tabBarIcon: ({color}) => <Icon icon="home" activeColor={color} />,
        }}
      />
      <BottonTab.Screen
        name="profile"
        component={Profile}
        options={{
          header: () => null,
          tabBarIcon: ({color}) => <Icon icon="profile" activeColor={color} />,
        }}
      />
    </BottonTab.Navigator>
  );
};

export default BottonTabNavigator;
