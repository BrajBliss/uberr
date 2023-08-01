import React from 'react';
import Home from '../screens/Home';
import Services from '../screens/Services';
import Activity from '../screens/Activity';
import Account from '../screens/Account';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Foundation } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const Tabs = () => {
	return (
		<Tab.Navigator
			screenOptions={{
				headerShown: false,
				tabBarStyle: {
					backgroundColor: '#18181b',
					borderTopWidth: 0,
					height: 65,
					paddingBottom: 10,
					paddingTop: 10,
					elevation: 10,
					shadowColor: 'white',
				},
				tabBarActiveTintColor: '#fff',
				tabBarInactiveTintColor: '#999',
				tabBarLabelStyle: {
					fontSize: 11,
				},
			}}>
			<Tab.Screen
				name='Home'
				component={Home}
				options={{
					tabBarIcon: ({ focused }) => (
						<Foundation
							name='home'
							size={25}
							color={focused ? '#fff' : '#999'}
						/>
					),
				}}
			/>
			<Tab.Screen
				name='Services'
				component={Services}
				options={{
					tabBarIcon: ({ focused }) => (
						<Fontisto
							name='nav-icon-grid'
							size={20}
							color={focused ? '#fff' : '#999'}
						/>
					),
				}}
			/>
			<Tab.Screen
				name='Activity'
				component={Activity}
				options={{
					tabBarIcon: ({ focused }) => (
						<FontAwesome5
							name='receipt'
							size={23}
							color={focused ? '#fff' : '#999'}
						/>
					),
				}}
			/>
			<Tab.Screen
				name='Account'
				component={Account}
				options={{
					tabBarIcon: ({ focused }) => (
						<MaterialCommunityIcons
							name='account'
							size={27}
							color={focused ? '#fff' : '#999'}
						/>
					),
				}}
			/>
		</Tab.Navigator>
	);
};

export default Tabs;
