import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import globalStyles from '../../globalStyles';

const Tips = () => {
	const { light, regular, semiBold } = globalStyles;
	const { container, textStyle } = styles;

	return (
		<View style={container}>
			<Text style={textStyle}>Tips</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {},
	textStyle: {
		color: '#fff',
	},
});

export default Tips;
