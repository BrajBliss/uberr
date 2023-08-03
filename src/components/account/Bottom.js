import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import globalStyles from '../../globalStyles';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const Bottom = () => {
	const { light, medium } = globalStyles;
	const {
		textStyle,
		container,
		buttonsContainer,
		settingsContainer,
		versionContainer,
		versionText,
	} = styles;

	return (
		<View style={container}>
			<View style={buttonsContainer}>
				<TouchableOpacity style={settingsContainer}>
					<Ionicons name='gift-sharp' size={24} color='#fff' />
					<Text style={[textStyle, medium]}>Send a gift</Text>
				</TouchableOpacity>
				<TouchableOpacity style={settingsContainer}>
					<FontAwesome name='gear' size={24} color='#fff' />
					<Text style={[textStyle, medium]}>Settings</Text>
				</TouchableOpacity>
				<TouchableOpacity style={settingsContainer}>
					<Entypo name='mail' size={24} color='#fff' />
					<Text style={[textStyle, medium]}>Messages</Text>
				</TouchableOpacity>
				<TouchableOpacity style={settingsContainer}>
					<MaterialCommunityIcons
						name='steering'
						size={24}
						color='#fff'
					/>
					<Text style={[textStyle, medium]}>
						Earn by driving or delivering
					</Text>
				</TouchableOpacity>
				<TouchableOpacity style={settingsContainer}>
					<MaterialCommunityIcons
						name='briefcase'
						size={24}
						color='#fff'
					/>
					<Text style={[textStyle, medium]}>Business hub</Text>
				</TouchableOpacity>
				<TouchableOpacity style={settingsContainer}>
					<Ionicons name='md-person-sharp' size={24} color='#fff' />
					<Text style={[textStyle, medium]}>Manage Uber account</Text>
				</TouchableOpacity>
				<TouchableOpacity style={settingsContainer}>
					<MaterialIcons name='info' size={24} color='#fff' />
					<Text style={[textStyle, medium]}>Legal</Text>
				</TouchableOpacity>
			</View>
			<TouchableOpacity style={versionContainer}>
				<Text style={[versionText, light]}>v4.484.10000</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	textStyle: {
		color: '#fff',
	},
	container: {
		flex: 2,
	},
	buttonsContainer: {
		flex: 1,
		justifyContent: 'space-evenly',
		marginVertical: 10,
		// backgroundColor: 'pink',
		// gap: -15,
	},
	settingsContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 20,
	},
	versionContainer: {
		height: 50,
		paddingBottom: 10,
		// backgroundColor: 'orange',
	},
	versionText: {
		color: '#ccc',
	},
});

export default Bottom;
