import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import globalStyles from '../globalStyles';

const HomeOptions = () => {
	const { container, textColor } = styles;
	const { regular } = globalStyles;

	return (
		<TouchableOpacity style={container}>
			<Text style={textColor}>THIS SHOULD BE TOUCHABLE</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	textColor: {
		color: '#fff',
	},
});

export default HomeOptions;
