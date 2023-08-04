import {
	FlatList,
	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity,
} from 'react-native';
import React from 'react';
import globalStyles from '../../globalStyles';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Ways = [
	{
		id: 1,
		url: 'https://images.unsplash.com/photo-1539787200876-3c033a7bebcd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
		title: 'Safety Toolkit',
		desc: 'On-trip help with safety issues',
	},
	{
		id: 2,
		url: 'https://images.unsplash.com/photo-1641671331342-d895eb52077f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
		title: 'Premier trips',
		desc: 'Top-rated drivers, newer cars',
	},
	{
		id: 3,
		url: 'https://images.unsplash.com/photo-1621503238137-035520b63e86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
		title: 'Send a package',
		desc: 'On-demand delivery across town',
	},
];

const Tips = () => {
	const { light, regular, semiBold } = globalStyles;
	const {
		container,
		textStyle,
		titleText,
		secondaryTextStyle,
		innerContainer,
		imgContainer,
		img,
		screenTitle,
	} = styles;

	const renderItem = ({ item }) => (
		<TouchableOpacity style={innerContainer}>
			<View style={imgContainer}>
				<Image source={{ uri: item.url }} style={img} />
			</View>
			<Text style={[regular, textStyle, titleText]}>
				{item.title}{' '}
				<MaterialCommunityIcons
					name='arrow-right'
					size={24}
					color='#fff'
				/>
			</Text>
			<Text style={[light, secondaryTextStyle]}>{item.desc}</Text>
		</TouchableOpacity>
	);

	return (
		<View style={container}>
			<Text style={[screenTitle, semiBold, textStyle]}>
				More ways to use Uber
			</Text>
			<FlatList
				data={Ways}
				renderItem={renderItem}
				keyExtractor={(item) => item.id.toString()}
				horizontal
				showsHorizontalScrollIndicator={false}
			/>
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
	titleText: {
		fontSize: 16,
	},
	secondaryTextStyle: {
		color: '#ccc',
		fontSize: 12,
	},
	innerContainer: {
		flexDirection: 'column',
		marginRight: 20,
	},
	imgContainer: {
		width: 200,
		height: 110,
		borderRadius: 10,
		overflow: 'hidden',
		marginBottom: 15,
	},
	img: {
		resizeMode: 'cover',
		width: '100%',
		height: '100%',
	},
});

export default Tips;
