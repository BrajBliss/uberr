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
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Activities from '../components/activity/Activities';

const Services = () => {
	const { semiBold } = globalStyles;
	const {
		container,
		textStyle,
		titleContainer,
		screenTitle,
		subtitleContainer,
		screenSubtitle,
	} = styles;

	return (
		<SafeAreaView style={container}>
			<View style={titleContainer}>
				<Text style={[screenTitle, semiBold, textStyle]}>Activity</Text>
				<View style={subtitleContainer}>
					<Text style={[screenSubtitle, semiBold, textStyle]}>
						Past
					</Text>
					<TouchableOpacity>
						<MaterialCommunityIcons
							name='filter-outline'
							size={27}
							color='#fff'
						/>
					</TouchableOpacity>
				</View>
			</View>
			<Activities />
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
	titleContainer: {
		flexDirection: 'column',
		gap: 25,
		marginBottom: 25,
	},
	screenTitle: {
		fontSize: 40,
	},
	subtitleContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	screenSubtitle: {
		fontSize: 20,
	},
});

export default Services;
