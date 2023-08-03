import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import React from 'react';
import Top from '../components/account/Top';
import Bottom from '../components/account/Bottom';

const Account = () => {
	const { container } = styles;

	return (
		<SafeAreaView style={container}>
			<Top />
			<Bottom />
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 18,
		paddingTop:
			(Platform.OS === 'android' ? StatusBar.currentHeight : 0) + 16,
		backgroundColor: '#18181b',
	},
});

export default Account;
