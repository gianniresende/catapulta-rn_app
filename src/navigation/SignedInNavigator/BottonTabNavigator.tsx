import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from '~/components/Icon';
import Home from '~/screen/Signed/Home';
import Profile from '~/screen/Signed/Profile';

const BottonTab = createBottomTabNavigator<BottonTabParamsList>();

const BottonTabNavigator = () => {
  return (
    <BottonTab.Navigator>
      <BottonTab.Screen
        name="home"
        component={Home}
        options={{
          header: () => null,
          tabBarIcon: () => <Icon icon="fantasma" size={28} />,
        }}
      />
      <BottonTab.Screen
        name="profile"
        component={Profile}
        options={{
          tabBarIcon: () => <Icon icon="ceifador" size={28} />,
        }}
      />
    </BottonTab.Navigator>
  );
};

export default BottonTabNavigator;
