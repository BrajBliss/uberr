import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import globalStyles from '../globalStyles';

const HomeScreen = () => {
	const { regular, black } = globalStyles;
	const { container, logo } = styles;

	return (
		<View style={container}>
			<Text style={[black, logo]}>Uberr</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		height: '100%',
		width: '100%',
		backgroundColor: '#18181b',
	},
	logo: {
		color: '#fff',
		alignSelf: 'center',
		fontSize: 60,
	},
});

export default HomeScreen;
