import {
	ActivityIndicator,
	Platform,
	SafeAreaView,
	StatusBar,
	StyleSheet,
	Text,
} from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import HomeScreen from './src/screens/HomeScreen';
import {
	useFonts,
	Inter_100Thin,
	Inter_200ExtraLight,
	Inter_300Light,
	Inter_400Regular,
	Inter_500Medium,
	Inter_600SemiBold,
	Inter_700Bold,
	Inter_800ExtraBold,
	Inter_900Black,
} from '@expo-google-fonts/inter';

export default function App() {
	let [fontsLoaded] = useFonts({
		Inter_100Thin,
		Inter_200ExtraLight,
		Inter_300Light,
		Inter_400Regular,
		Inter_500Medium,
		Inter_600SemiBold,
		Inter_700Bold,
		Inter_800ExtraBold,
		Inter_900Black,
	});

	const { container } = styles;

	return (
		<>
			{fontsLoaded ? (
				<Provider store={store}>
					<SafeAreaView style={container}>
						<HomeScreen />
					</SafeAreaView>
				</Provider>
			) : (
				<ActivityIndicator size={'large'} />
			)}
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
	},
});
