import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const EmptySpace = () => {
	const { container } = styles;

	return (
		<View style={container}>
			<Text></Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 3.5,
	},
});

export default EmptySpace;
