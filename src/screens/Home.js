import {
	SafeAreaView,
	ScrollView,
	StatusBar,
	StyleSheet,
	Text,
} from 'react-native';
import React from 'react';
import globalStyles from '../globalStyles';
import Search from '../components/home/Search';
import Suggestions from '../components/home/Suggestions';
import Tips from '../components/home/Tips';
import Carousel from '../components/home/Carousel';

const Home = () => {
	const { regular, black } = globalStyles;
	const { container, logo } = styles;

	return (
		<SafeAreaView style={container}>
			<ScrollView>
				<StatusBar
					translucent
					backgroundColor='#18181b'
					barStyle='white'
				/>
				<Text style={[black, logo]}>Uberr</Text>
				<Search />
				<Suggestions />
				<Tips />
				<Carousel />
			</ScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 18,
		paddingTop:
			(Platform.OS === 'android' ? StatusBar.currentHeight : 0) + 20,
		backgroundColor: '#18181b',
	},
	logo: {
		color: '#fff',
		alignSelf: 'center',
		fontSize: 60,
		marginBottom: 20,
	},
});

export default Home;
