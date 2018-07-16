import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from 'react-navigation';
import TodayTab from './TodayTab';
import DisplayChartTab from './DisplayChartTab';
import AddExpenseTab from './AddExpenseTab';
import SettingsTab from './SettingsTab';

const TabScreen = createBottomTabNavigator(
	{
		Today: {screen: TodayTab},
		Chart: {screen: DisplayChartTab},
		Add: {screen: AddExpenseTab},
		Settings: {screen: SettingsTab}
	},
	{
		navigationOptions: ({ navigation }) => ({
			tabBarIcon: ({ focused, tintColor }) => {
				const { routeName } = navigation.state;
				let iconName;
				if (routeName === 'Today') {
					iconName = `ios-menu${focused ? '' : '-outline'}`;
				} else if (routeName === 'Chart') {
					iconName = `ios-stats${focused ? '' : '-outline'}`;
				} else if (routeName === 'Add') {
					iconName = `ios-add-circle${focused ? '' : '-outline'}`;
				} else if (routeName === 'Settings') {
					iconName = `ios-settings${focused ? '' : '-outline'}`;
				}
				return <Ionicons name={iconName} size={25} color={tintColor} />;
			},
		}),
		tabBarOptions: {
			activeTintColor: '#ffa000',
			inactiveTintColor: 'gray'
		},
		animationEnabled: false,
		swipeEnabled: true
	}
);

export default TabScreen;
