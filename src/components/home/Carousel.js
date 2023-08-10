import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import globalStyles from '../../globalStyles';
import { SliderBox } from 'react-native-image-slider-box';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Carousel = () => {
	const Slides = [
		require('../../../assets/sale.png'),
		require('../../../assets/showroom.png'),
		require('../../../assets/event.png'),
	];
	const { regular, medium, semiBold } = globalStyles;
	const {
		container,
		textStyle,
		screenTitle,
		carouselContainer,
		imageComponentStyle,
	} = styles;

	return (
		<View style={container}>
			<Text style={[screenTitle, semiBold, textStyle]}>Offers</Text>
			<View style={carouselContainer}>
				<SliderBox
					images={Slides}
					dotColor='#18181b'
					inactiveDotColor='#ccc'
					ImageComponentStyle={imageComponentStyle}
					autoplay
					circleLoop
					sliderBoxHeight={150}
					resizeMode={'cover'}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 40,
	},
	textStyle: {
		color: '#fff',
	},
	screenTitle: {
		fontSize: 20,
		marginBottom: 20,
	},
	carouselContainer: {
		flex: 1,
		alignItems: 'center',
	},
	imageComponentStyle: {
		borderRadius: 20,
		width: '95%',
	},
});

export default Carousel;
