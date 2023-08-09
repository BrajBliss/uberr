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
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './src/components/Tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ride from './src/screens/Ride';

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

	const Stack = createNativeStackNavigator();

	return (
		fontsLoaded && (
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen
						name='Tabs'
						component={Tabs}
						options={{
							headerShown: false,
						}}
					/>
					<Stack.Screen
						name='Ride'
						component={Ride}
						options={{
							headerShown: false,
						}}
					/>
					{/* <Tabs /> */}
				</Stack.Navigator>
			</NavigationContainer>
		)
	);
}
