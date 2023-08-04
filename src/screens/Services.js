import {
	SafeAreaView,
	StatusBar,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import React from 'react';
import globalStyles from '../globalStyles';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import EmptySpace from '../components/EmptySpace';

const Services = () => {
	const { regular, medium, semiBold } = globalStyles;
	const {
		container,
		textStyle,
		innerContainer,
		titleContainer,
		screenTitle,
		screenSubtitle,
		servicesOptions,
		upper,
		upperOptionContainer,
		upperOptionIcon,
		lower,
		optionsContainer,
		optionText,
	} = styles;

	return (
		<SafeAreaView style={container}>
			<View style={innerContainer}>
				<View style={titleContainer}>
					<Text style={[screenTitle, semiBold, textStyle]}>
						Services
					</Text>
					<Text style={[screenSubtitle, semiBold, textStyle]}>
						Go anywhere, get anything
					</Text>
				</View>
				<View style={servicesOptions}>
					<View style={upper}>
						<TouchableOpacity
							style={[optionsContainer, upperOptionContainer]}>
							<Text style={[optionText, textStyle, medium]}>
								Ride
							</Text>
							<Ionicons
								name='car-sport-sharp'
								size={33}
								color='#fff'
								style={upperOptionIcon}
							/>
						</TouchableOpacity>
						<TouchableOpacity
							style={[optionsContainer, upperOptionContainer]}>
							<Text style={[optionText, textStyle, medium]}>
								Rentals
							</Text>
							<MaterialCommunityIcons
								name='car-clock'
								size={33}
								color='#fff'
								style={upperOptionIcon}
							/>
						</TouchableOpacity>
					</View>
					<View style={lower}>
						<TouchableOpacity style={optionsContainer}>
							<MaterialCommunityIcons
								name='car-limousine'
								size={33}
								color='#fff'
							/>
							<Text style={[optionText, textStyle, regular]}>
								Intercity
							</Text>
						</TouchableOpacity>
						<TouchableOpacity style={optionsContainer}>
							<MaterialCommunityIcons
								name='package-variant'
								size={33}
								color='#fff'
							/>
							<Text style={[optionText, textStyle, regular]}>
								Package
							</Text>
						</TouchableOpacity>
						<TouchableOpacity style={optionsContainer}>
							<MaterialIcons
								name='luggage'
								size={33}
								color='#fff'
							/>
							<Text style={[optionText, textStyle, regular]}>
								Travel
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
			<EmptySpace />
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 18,
		paddingTop:
			(Platform.OS === 'android' ? StatusBar.currentHeight : 0) + 16,
		backgroundColor: '#18181b',
	},
	textStyle: {
		color: '#fff',
	},
	innerContainer: {
		flex: 2.5,
		// justifyContent: 'space-around',
		// backgroundColor: 'orange',
	},
	titleContainer: {
		flexDirection: 'column',
		gap: 25,
		marginBottom: 25,
	},
	screenTitle: {
		fontSize: 40,
	},
	screenSubtitle: {
		fontSize: 20,
	},
	servicesOptions: {
		flex: 1,
		// justifyContent: 'space-around',
		gap: 18,
	},
	upper: {
		flexDirection: 'row',
		gap: 18,
		justifyContent: 'space-around',
	},
	upperOptionContainer: {
		width: 175,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'flex-end',
	},
	upperOptionIcon: {
		flexDirection: 'column',
		height: '100%',
	},
	lower: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	optionsContainer: {
		height: 90,
		width: 110,
		backgroundColor: '#3f3f3f',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'space-around',
		padding: 15,
		borderRadius: 10,
	},
	optionText: {},
});

export default Services;
