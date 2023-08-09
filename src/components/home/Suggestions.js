import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import globalStyles from '../../globalStyles';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Suggestions = () => {
	const { regular, semiBold } = globalStyles;
	const {
		container,
		textStyle,
		screenTitle,
		suggestionsContainer,
		optionsContainer,
		icon,
		titleText,
	} = styles;

	const navigation = useNavigation();

	return (
		<View style={container}>
			<Text style={[screenTitle, semiBold, textStyle]}>Suggestions</Text>
			<View style={suggestionsContainer}>
				<TouchableOpacity
					style={[optionsContainer]}
					onPress={() => navigation.navigate('Ride')}>
					<View style={icon}>
						<Ionicons
							name='car-sport-sharp'
							size={33}
							color='#fff'
						/>
					</View>
					<Text style={[textStyle, regular, titleText]}>Ride</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={[optionsContainer]}
					onPress={() => navigation.navigate('Ride')}>
					<View style={icon}>
						<MaterialCommunityIcons
							name='car-clock'
							size={33}
							color='#fff'
						/>
					</View>
					<Text style={[textStyle, regular, titleText]}>Rentals</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={optionsContainer}
					onPress={() => navigation.navigate('Ride')}>
					<View style={icon}>
						<MaterialCommunityIcons
							name='car-limousine'
							size={33}
							color='#fff'
						/>
					</View>
					<Text style={[textStyle, regular, titleText]}>
						Intercity
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={optionsContainer}
					onPress={() => navigation.navigate('Ride')}>
					<View style={icon}>
						<MaterialCommunityIcons
							name='package-variant'
							size={33}
							color='#fff'
						/>
					</View>
					<Text style={[textStyle, regular, titleText]}>Package</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		marginTop: 40,
	},
	textStyle: {
		color: '#fff',
	},
	screenTitle: {
		fontSize: 20,
	},
	suggestionsContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	optionsContainer: {
		flexDirection: 'column',
		alignItems: 'center',
		// padding: 15,
		gap: 10,
		marginTop: 20,
	},
	icon: {
		height: 65,
		width: 85,
		backgroundColor: '#3f3f3f',
		borderRadius: 10,
		justifyContent: 'center',
		alignItems: 'center',
	},
	titleText: {
		fontSize: 13,
	},
});

export default Suggestions;
