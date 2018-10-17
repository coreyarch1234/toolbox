import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import ToolListScreen from '../screens/ToolStack/ToolListScreen';
import CreateToolModal from '../CreateToolModal';
import SettingsScreen from '../screens/SettingsScreen';

const ToolListStack = createStackNavigator({
    ToolList: ToolListScreen,
  });

const RootToolStack = createStackNavigator(
  {
    ToolList: ToolListStack,
    CreateTool: CreateToolModal
  },
  {
    mode: 'card',
    headerMode: 'none',
  }
);

RootToolStack.navigationOptions = {
  tabBarLabel: 'Tools',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Bookmarks',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options'}
    />
  ),
};

export default createBottomTabNavigator({
  RootToolStack,
  SettingsStack,
});
