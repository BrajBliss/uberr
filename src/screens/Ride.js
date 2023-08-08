import {
	ImageBackground,
	Image,
	SafeAreaView,
	StatusBar,
	StyleSheet,
	Text,
	View,
	ScrollView,
	TouchableOpacity,
} from 'react-native';
import React from 'react';
import globalStyles from '../globalStyles';

const Ride = () => {
	const { light, regular, medium } = globalStyles;
	const {
		container,
		textStyle,
		upper,
		img,
		bottom,
		notice,
		rides,
		payment,
		book,
	} = styles;

	return (
		<SafeAreaView style={container}>
			<View style={upper}>
				<Image
					style={img}
					source={{
						uri: 'https://simonpan.com/wp-content/themes/sp_portfolio/assets/uber-suboptimal.jpg',
					}}
				/>
			</View>
			<View style={bottom}>
				<Text style={[textStyle, light, notice]}>
					Fares are higher due to increased demand
				</Text>
				<ScrollView style={rides}>
					<Text style={[regular, textStyle]}>OPTIONS</Text>
				</ScrollView>
				<TouchableOpacity style={payment}>
					<Text style={[textStyle, regular]}>CASH</Text>
				</TouchableOpacity>
				<TouchableOpacity style={book}>
					<Text style={[textStyle, regular]}>BOOK</Text>
				</TouchableOpacity>
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
		flex: 1.5,
	},
	img: {
		flex: 1,
		resizeMode: 'cover',
	},
	bottom: {
		flex: 2.5,
		paddingHorizontal: 18,
		// paddingTop:
		// 	(Platform.OS === 'android' ? StatusBar.currentHeight : 0) + 25,
	},
	notice: {
		backgroundColor: 'indianred',
	},
	rides: {
		backgroundColor: 'gray',
	},
	payment: {
		backgroundColor: 'red',
	},
	book: {
		backgroundColor: 'green',
	},
});

export default Ride;
