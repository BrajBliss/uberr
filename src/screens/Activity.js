import { SafeAreaView, StatusBar, StyleSheet, Text } from 'react-native';
import React from 'react';
import globalStyles from '../globalStyles';

const Activity = () => {
	const { regular } = globalStyles;
	const { container, textStyle } = styles;

	return (
		<SafeAreaView style={container}>
			<Text style={[regular, textStyle]}>Activity</Text>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 50,
		paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
		backgroundColor: '#18181b',
	},
	textStyle: {
		color: '#fff',
	},
});

export default Activity;
