import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import globalStyles from '../globalStyles';

const HomeScreen = () => {
	const { regular } = globalStyles;

	return (
		<View>
			<Text style={regular}>HomeScreen</Text>
		</View>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({});
