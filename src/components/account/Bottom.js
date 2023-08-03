import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import globalStyles from '../../globalStyles';

const Bottom = () => {
	const { regular } = globalStyles;
	const { textStyle, container } = styles;

	return (
		<View style={container}>
			<Text style={[regular, textStyle]}>Bottom</Text>
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
});

export default Bottom;
