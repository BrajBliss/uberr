import {
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
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const Ride = ({ navigation }) => {
	const { light, regular, medium } = globalStyles;
	const {
		container,
		textStyle,
		upper,
		img,
		bottom,
		noticeContainer,
		notice,
		rideContainer,
		deets,
		payment,
		right,
		confirm,
	} = styles;

	return (
		<SafeAreaView style={container}>
			<StatusBar
				translucent
				backgroundColor='transparent'
				barStyle='dark-content'
			/>

			<View style={upper}>
				<Image
					style={img}
					source={{
						uri: 'https://simonpan.com/wp-content/themes/sp_portfolio/assets/uber-suboptimal.jpg',
					}}
				/>
			</View>
			<View style={bottom}>
				<View style={noticeContainer}>
					<Text style={[textStyle, light, notice]}>
						Fares are higher due to increased demand
					</Text>
				</View>
				<ScrollView
					contentContainerStyle={{
						flex: 1,
						justifyContent: 'space-around',
					}}>
					<TouchableOpacity
						style={rideContainer}
						onPress={() => navigation.goBack()}>
						<Ionicons
							name='car-sport-sharp'
							size={45}
							color='#fff'
						/>
						<View style={deets}>
							<Text style={[medium, textStyle, { fontSize: 18 }]}>
								Uber Go
							</Text>
							<Text style={[light, textStyle]}>
								5:41am • 5 min away
							</Text>
						</View>
						<Text style={[regular, textStyle, { fontSize: 15 }]}>
							₹341.61
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={rideContainer}
						onPress={() => navigation.goBack()}>
						<MaterialCommunityIcons
							name='rickshaw'
							size={50}
							color='#fff'
						/>
						<View style={deets}>
							<Text style={[medium, textStyle, { fontSize: 18 }]}>
								Uber Auto
							</Text>
							<Text style={[light, textStyle]}>
								5:39am • 3 min away
							</Text>
						</View>
						<Text style={[regular, textStyle, { fontSize: 15 }]}>
							₹451.30
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={rideContainer}
						onPress={() => navigation.goBack()}>
						<MaterialCommunityIcons
							name='car-limousine'
							size={50}
							color='#fff'
						/>
						<View style={deets}>
							<Text style={[medium, textStyle, { fontSize: 18 }]}>
								Uber Premier
							</Text>
							<Text style={[light, textStyle]}>
								5:35am • 2 min away
							</Text>
						</View>
						<Text style={[regular, textStyle, { fontSize: 15 }]}>
							₹374.29
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={rideContainer}
						onPress={() => navigation.goBack()}>
						<FontAwesome name='motorcycle' size={40} color='#fff' />
						<View style={deets}>
							<Text style={[medium, textStyle, { fontSize: 18 }]}>
								Uber Moto
							</Text>
							<Text style={[light, textStyle]}>
								5:30am • 1 min away
							</Text>
						</View>
						<Text style={[regular, textStyle, { fontSize: 15 }]}>
							₹311.65
						</Text>
					</TouchableOpacity>
				</ScrollView>
				<TouchableOpacity
					style={payment}
					onPress={() => navigation.goBack()}>
					<View style={right}>
						<FontAwesome5
							name='money-bill'
							size={24}
							color='#fff'
						/>
						<Text
							style={[{ color: '#fff', fontSize: 15 }, regular]}>
							Cash
						</Text>
					</View>
					<MaterialCommunityIcons
						name='arrow-right'
						size={24}
						color='#fff'
					/>
				</TouchableOpacity>
				<TouchableOpacity
					style={confirm}
					onPress={() => navigation.goBack()}>
					<Text style={[textStyle, medium, { fontSize: 17 }]}>
						Confirm Booking
					</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#18181b',
		// paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
	},
	textStyle: {
		color: '#fff',
	},
	upper: {
		flex: 1.6,
	},
	img: {
		flex: 1,
		resizeMode: 'cover',
	},
	bottom: {
		flex: 2.4,
		paddingHorizontal: 18,
	},
	noticeContainer: {
		flex: 0,
		alignItems: 'center',
	},
	notice: {
		padding: 10,
	},
	rideContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	deets: {},
	payment: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginVertical: 10,
	},
	right: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 20,
	},
	confirm: {
		backgroundColor: '#333',
		padding: 15,
		marginVertical: 10,
		alignItems: 'center',
		borderRadius: 10,
	},
});

export default Ride;
