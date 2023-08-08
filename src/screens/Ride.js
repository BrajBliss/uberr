import {
	ImageBackground,
	Image,
	SafeAreaView,
	StatusBar,
	StyleSheet,
	Text,
	View,
} from 'react-native';
import React from 'react';
import globalStyles from '../globalStyles';

const Ride = () => {
	const { light, regular, medium } = globalStyles;
	const { container, textStyle, upper, img, bottom } = styles;

	return (
		<SafeAreaView style={container}>
			<View style={upper}>
				<Image
					style={img}
					source={{
						uri: 'https://s.wsj.net/public/resources/images/BN-XR453_201802_M_20180228165619.gif',
					}}
				/>
			</View>
			<View style={bottom}>
				<Text style={regular}>BOTTOM</Text>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#18181b',
	},
	textStyle: {
		color: '#fff',
	},
	upper: {
		flex: 1,
	},
	img: {
		flex: 1,
		resizeMode: 'cover',
	},
	bottom: {
		paddingHorizontal: 18,
		// paddingTop:
		// 	(Platform.OS === 'android' ? StatusBar.currentHeight : 0) + 25,
		flex: 1,
	},
});

export default Ride;
