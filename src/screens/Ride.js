import {
	Image,
	SafeAreaView,
	StatusBar,
	StyleSheet,
	Text,
	View,
	ScrollView,
	TouchableOpacity,
	FlatList,
} from 'react-native';
import React, { cloneElement, useState } from 'react';
import globalStyles from '../globalStyles';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const RideOptions = [
	{
		id: 1,
		icon: <Ionicons name='car-sport-sharp' size={45} color='#fff' />,
		title: 'Uber Go',
		time: '5:41am • 5 min away',
		cost: '₹341.61',
		desc: 'Affordable, compact rides',
	},
	{
		id: 2,
		icon: <MaterialCommunityIcons name='rickshaw' size={50} color='#fff' />,
		title: 'Uber Auto',
		time: '5:39am • 3 min away',
		cost: '₹451.30',
		desc: 'No bargaining, doorstep pick-up',
	},
	{
		id: 3,
		icon: (
			<MaterialCommunityIcons
				name='car-limousine'
				size={50}
				color='#fff'
			/>
		),
		title: 'Uber Premier',
		time: '5:35am • 2 min away',
		cost: '₹374.29',
		desc: 'Comfortable sedans, top-quality drivers',
	},
	{
		id: 4,
		icon: <FontAwesome name='motorcycle' size={40} color='#fff' />,
		title: 'Uber Moto',
		time: '5:30am • 1 min away',
		cost: '₹311.65',
		desc: 'Affordable, motorcycle rides',
	},
];

const Ride = ({ navigation }) => {
	const { light, regular, medium, bold } = globalStyles;
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

	const [clicked, setClicked] = useState(false);
	const [selectedItem, setSelectedItem] = useState(null);

	const handleClick = (item) => {
		setSelectedItem(item);
		setClicked(true);
	};

	const renderItem = ({ item }) => (
		<TouchableOpacity
			style={rideContainer}
			onPress={() => handleClick({ item })}>
			{item.icon}
			<View style={deets}>
				<Text style={[medium, textStyle, { fontSize: 18 }]}>
					{item.title}
				</Text>
				<Text style={[light, textStyle]}>{item.time}</Text>
			</View>
			<Text style={[regular, textStyle, { fontSize: 15 }]}>
				{item.cost}
			</Text>
		</TouchableOpacity>
	);

	const rideCard = ({ item }) => {
		return (
			<View style={{ flex: 1 }}>
				<TouchableOpacity onPress={() => setClicked(false)}>
					<MaterialCommunityIcons
						name='arrow-left'
						size={30}
						color='#fff'
					/>
				</TouchableOpacity>
				<View
					style={{
						flex: 1,
						marginVertical: 10,
						justifyContent: 'space-around',
						alignItems: 'center',
					}}>
					{cloneElement(item.icon, { size: 100 })}
					<View
						style={{
							flexDirection: 'row',
							justifyContent: 'space-between',
							// alignItems: 'center',
							width: '100%',
						}}>
						<View>
							<Text style={[textStyle, bold, { fontSize: 27 }]}>
								{item.title}
							</Text>
							<Text
								style={[textStyle, regular, { fontSize: 15 }]}>
								{item.time}
							</Text>
							<Text style={[textStyle, light, { fontSize: 13 }]}>
								{item.desc}
							</Text>
						</View>
						<View>
							<Text style={[textStyle, bold, { fontSize: 27 }]}>
								{item.cost}
							</Text>
						</View>
					</View>
				</View>
			</View>
		);
	};

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
				{clicked ? (
					rideCard(selectedItem)
				) : (
					<FlatList
						data={RideOptions}
						renderItem={renderItem}
						keyExtractor={(item) => item.id.toString()}
						showsVerticalScrollIndicator={false}
						contentContainerStyle={{
							justifyContent: 'space-around',
							flex: 1,
						}}
					/>
				)}

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
