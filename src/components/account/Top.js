import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import globalStyles from '../../globalStyles';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const Top = () => {
	const { medium, semiBold } = globalStyles;
	const {
		container,
		textStyle,
		deets,
		left,
		name,
		ratingContainer,
		ratingText,
		right,
		pfp,
		menu,
		buttonContainer,
	} = styles;

	return (
		<View style={container}>
			<View style={deets}>
				<View style={left}>
					<Text style={[textStyle, name, semiBold]}>John Doe</Text>
					<TouchableOpacity style={ratingContainer}>
						<Ionicons name='star-sharp' size={13} color='#fff' />
						<Text style={[textStyle, ratingText, medium]}>
							4.76
						</Text>
					</TouchableOpacity>
				</View>
				<TouchableOpacity style={right}>
					<Image
						source={{
							uri: 'https://images.unsplash.com/photo-1622426141446-5148b6fa1115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
						}}
						style={pfp}
					/>
				</TouchableOpacity>
			</View>
			<View style={menu}>
				<TouchableOpacity style={buttonContainer}>
					<FontAwesome name='life-buoy' size={28} color='#fff' />
					<Text style={[medium, textStyle]}>Help</Text>
				</TouchableOpacity>
				<TouchableOpacity style={buttonContainer}>
					<Foundation name='credit-card' size={32} color='#fff' />
					<Text style={[medium, textStyle]}>Wallet</Text>
				</TouchableOpacity>
				<TouchableOpacity style={buttonContainer}>
					<AntDesign name='clockcircle' size={27} color='#fff' />
					<Text style={[medium, textStyle]}>Trips</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		gap: 25,
		// backgroundColor: 'orange',
		justifyContent: 'space-around',
	},
	textStyle: {
		color: '#fff',
	},
	deets: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	left: {},
	name: {
		fontSize: 40,
		marginBottom: -3,
	},
	ratingContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
		padding: 2.5,
		borderRadius: 50,
		width: 63,
		backgroundColor: '#3f3f3f',
	},
	ratingText: {
		fontSize: 13,
	},
	right: {},
	pfp: {
		width: 75,
		height: 75,
		borderRadius: 50,
	},
	menu: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	buttonContainer: {
		height: 95,
		width: 115,
		backgroundColor: '#3f3f3f',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'space-around',
		padding: 15,
		borderRadius: 10,
	},
});

export default Top;
