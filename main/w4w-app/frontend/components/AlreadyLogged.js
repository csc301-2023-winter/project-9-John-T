import React, { useEffect, useState } from 'react';
import {
	Dimensions,
	StyleSheet,
	View,
	Text,
	Image,
	Pressable,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-async-storage/async-storage';


// Already Logged In Page
export default function AlreadyLogged({ navigation }) {
	const [name, setName] = useState('');

	useEffect(() => {
		// declare the data fetching function
		const fetchData = async () => {
			let user = await AsyncStorage.getItem('user');
			let parsed = await JSON.parse(user);
			var name = parsed.name;
			setName(name);
		};
		// call the function
		fetchData()
			// make sure to catch any error
			.catch(console.error);
	}, []);

	return (
		<View style={styles.background}>
			<Image source={require('../assets/EWB.png')} style={styles.ewblogo}/>

			<Pressable
				style={{ marginLeft: -Dimensions.get('window').width / 1.2 }}
				onPress={async () => {
					navigation.navigate('Home page');
				}}
			>
				<Icon name="arrow-left" color="#03DAC5" size={25} />
			</Pressable>

			<Text numberOfLines={5} adjustsFontSizeToFit style={styles.textUnder}>
				You have already logged in to {"\n"} {name}
			</Text>

            {/* Log Out & Go to Home Page */}
			<Text numberOfLines={5} adjustsFontSizeToFit style={styles.textUnder}>
				If you wish to Logout
			</Text>
			<Pressable
				style={styles.navigateButtons}
				onPress={async () => {
					await AsyncStorage.removeItem('user');
					navigation.navigate('Home page');
				}}
			>
				<Text style={styles.textButton}>Logout</Text>
				<View style={styles.arrow}>
					<Icon name="angle-right" color="#03DAC5" size={15} />
				</View>
			</Pressable>

            {/* Continue to Pre-Questionnaire */}
			<Text numberOfLines={5} adjustsFontSizeToFit style={styles.textUnder}>
				If you wish to continue logged in to {name}
			</Text>
			<Pressable
				style={styles.navigateButtons}
				numberOfLines={1}
				onPress={async () => {
					navigation.navigate('Pre questionnaire 1');
				}}
			>
				<Text style={styles.textButton}>Continue</Text>
				<View style={styles.arrow}>
					<Icon name="angle-right" color="#03DAC5" size={15} />
				</View>
			</Pressable>

			<Image source={require('../assets/WFTW.png')} style={styles.w4twlogo} />
		</View>
	);
}

const styles = StyleSheet.create({
	background: {
		backgroundColor: '#1E1E1E',
		height: Dimensions.get('window').height,
		width: Dimensions.get('window').width,
	},
	textUnder: {
		color: '#03DAC5',
		marginTop: Dimensions.get('window').height / 12,
		textAlign: 'center',
		fontSize: 18,
		marginLeft: Dimensions.get('window').width / 12,
		marginRight: Dimensions.get('window').width / 12,
	},
	textButton: {
		color: '#03DAC5',
		textAlign: 'center',
		fontSize: 14,
		fontWeight: 'bold',
		flex: 5,
	},
	navigateButtons: {
		width: Dimensions.get('window').width / 2,
		flexDirection: 'row',
		padding: 15,
		marginLeft: Dimensions.get('window').width / 4,
		marginTop: Dimensions.get('window').height / 18,
		borderColor: '#03DAC5',
		borderRadius: 999,
		borderWidth: 2,
		backgroundColor: '#2C2C2C',
	},
	arrow: {
		flex: 1,
		marginTop: 2,
	},
	ewblogo: {
		marginTop: Dimensions.get('window').height / 20,
		marginBottom: Dimensions.get('window').height / -20,
		marginRight: Dimensions.get('window').width / 15,
		alignSelf: 'flex-end',
		width: Dimensions.get('window').width / 5,
		height: Dimensions.get('window').height / 17.5,
	},
	w4twlogo: {
		alignSelf: 'center',
		width: Dimensions.get('window').width / 3,
		height: Dimensions.get('window').height / 10,
		flex: 1,
	},
});
