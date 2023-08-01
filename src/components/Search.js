import {
	StyleSheet,
	Text,
	View,
	TextInput,
	Keyboard,
	Button,
	TouchableOpacity,
	Animated,
} from 'react-native';
import React, { useState, useRef } from 'react';
import globalStyles from '../globalStyles';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const Search = () => {
	const { regular } = globalStyles;
	const { container, textInputStyle, textInputContainer } = styles;
	const [clicked, setClicked] = useState(false);
	const [placeholderText, setPlaceholderText] = useState('');
	const cancelAnim = useRef(new Animated.Value(0)).current;

	const handleTextInputFocus = () => {
		setPlaceholderText(TextInput.value);
	};

	const handleCancel = () => {
		Keyboard.dismiss();
		setPlaceholderText('');

		Animated.timing(cancelAnim, {
			toValue: 0,
			duration: 200,
			useNativeDriver: true,
		}).start(() => setClicked(false));
	};

	const handleFocus = () => {
		setClicked(true);
		Animated.timing(cancelAnim, {
			toValue: 1,
			duration: 200,
			useNativeDriver: true,
		}).start();
	};

	return (
		<View style={container}>
			<TouchableOpacity>
				<Feather name='search' size={24} color='#fff' />
			</TouchableOpacity>
			<View style={textInputContainer}>
				<TextInput
					style={[regular, textInputStyle]}
					value={placeholderText}
					placeholder='Enter pickup point'
					placeholderTextColor='#ccc'
					onChange={() => handleTextInputFocus()}
					onFocus={() => handleFocus()}
				/>
			</View>
			<Animated.View
				style={[
					{
						opacity: cancelAnim,
						transform: [
							{
								translateX: cancelAnim.interpolate({
									inputRange: [0, 1],
									outputRange: [100, 0],
								}),
							},
						],
					},
				]}>
				{clicked && (
					<TouchableOpacity onPress={() => handleCancel()}>
						<MaterialIcons name='cancel' size={25} color='#fff' />
					</TouchableOpacity>
				)}
			</Animated.View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#2b2b2e',
		height: 60,
		borderRadius: 30,
		marginTop: 20,
		marginBottom: 20,
		paddingHorizontal: 40,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	textInputContainer: {
		width: '90%',
		// flex: 1,
		// backgroundColor: 'red',
	},
	textInputStyle: {
		color: '#fff',
		width: '60%',
		alignSelf: 'center',
		// backgroundColor: 'orange',
	},
});

export default Search;
