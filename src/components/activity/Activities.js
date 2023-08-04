import {
	FlatList,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import React from 'react';
import globalStyles from '../../globalStyles';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Trips = [
	{
		id: 1,
		ride: 'Auto',
		icon: <MaterialCommunityIcons name='rickshaw' size={30} color='#fff' />,
		dest: 'Sudama Nagar',
		dateTime: '23 Jul • 9:17 AM',
		status: '₹0.00 • Cancelled',
	},
	{
		id: 2,
		ride: 'Bike',
		icon: <FontAwesome name='motorcycle' size={24} color='#fff' />,
		dest: 'Vijay Nagar',
		dateTime: '28 Jun • 7:55 PM',
		status: '₹202.00',
	},
	{
		id: 3,
		ride: 'Auto',
		icon: <MaterialCommunityIcons name='rickshaw' size={30} color='#fff' />,
		dest: 'Sudama Nagar',
		dateTime: '23 Jul • 9:17 AM',
		status: '₹0.00 • Cancelled',
	},
	{
		id: 4,
		ride: 'Bike',
		icon: <FontAwesome name='motorcycle' size={24} color='#fff' />,
		dest: 'Vijay Nagar',
		dateTime: '28 Jun • 7:55 PM',
		status: '₹202.00',
	},
	{
		id: 5,
		ride: 'Auto',
		icon: <MaterialCommunityIcons name='rickshaw' size={30} color='#fff' />,
		dest: 'Sudama Nagar',
		dateTime: '23 Jul • 9:17 AM',
		status: '₹0.00 • Cancelled',
	},
	{
		id: 6,
		ride: 'Bike',
		icon: <FontAwesome name='motorcycle' size={24} color='#fff' />,
		dest: 'Vijay Nagar',
		dateTime: '28 Jun • 7:55 PM',
		status: '₹202.00',
	},
];

const Activities = () => {
	const { regular, light } = globalStyles;
	const {
		container,
		textStyle,
		secondaryTextStyle,
		iconContainer,
		deetsContainer,
		rebookContainer,
	} = styles;

	const renderItem = ({ item }) => (
		<View style={container}>
			<TouchableOpacity style={iconContainer}>
				{item.icon}
			</TouchableOpacity>
			<TouchableOpacity>
				<View style={deetsContainer}>
					<Text style={[regular, textStyle]}>{item.dest}</Text>
					<Text style={[light, secondaryTextStyle]}>
						{item.dateTime}
					</Text>
					<Text style={[light, secondaryTextStyle]}>
						{item.status}
					</Text>
				</View>
			</TouchableOpacity>
			<TouchableOpacity style={rebookContainer}>
				<FontAwesome name='repeat' size={24} color='#fff' />
				<Text style={[regular, textStyle]}>Rebook</Text>
			</TouchableOpacity>
		</View>
	);

	return (
		<View style={container}>
			<FlatList
				data={Trips}
				renderItem={renderItem}
				keyExtractor={(item) => item.id.toString()}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingVertical: 10,
	},
	textStyle: {
		color: '#fff',
	},
	secondaryTextStyle: {
		color: '#ccc',
	},
	iconContainer: {
		height: 80,
		width: 80,
		backgroundColor: '#3f3f3f',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'space-around',
		borderRadius: 10,
	},
	deetsContainer: {
		flexDirection: 'column',
		alignItems: 'flex-start',
		width: 160,
	},
	rebookContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
		padding: 5,
		borderRadius: 50,
		width: 100,
		backgroundColor: '#3f3f3f',
	},
});

export default Activities;
