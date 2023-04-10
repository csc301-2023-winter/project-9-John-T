import { useState } from 'react';
import {
	Dimensions,
	StyleSheet,
	Text,
	View,
	Image,
	Pressable,
	TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-async-storage/async-storage';


// Student Login Page
export default function StudentLogin({ navigation }) {
	const [email, setEmail] = useState('');
	const [name, setName] = useState('');
	const [error, setError] = useState('');

	return (
		<>
			<View style={styles.background}>
				<Image source={require('../assets/EWB.png')} style={styles.ewblogo} />

                {/* Back Arrow to Home Page */}
				<Pressable
					style={{ marginLeft: -Dimensions.get('window').width / 1.2 }}
					onPress={async () => {
						navigation.navigate('Home page');
					}}
				>
					<Icon name="arrow-left" color="#03DAC5" size={25} />
				</Pressable>

                {/* User Image */}
				<Icon
					name="user-circle"
					color="#03DAC5"
					size={100}
					style={styles.icon}
				/>
				<View style={styles.errview}>
					<Text style={styles.error}>{error}</Text>
				</View>

                {/* Instructor's Email */}
				<TextInput
					style={styles.input}
					placeholder="Your instructor's email"
					onChangeText={(newE) => setEmail(newE)}
					placeholderTextColor={'#03DAC5'}
					label="Email"
				/>

                {/* Student's Name */}
				<TextInput
					style={styles.input}
					placeholder="Your name"
					placeholderTextColor={'#03DAC5'}
					onChangeText={(newP) => setName(newP)}
					label="Text"
				/>

                {/* Student Login */}
				<View style={styles.inputview}>
					<Pressable
						style={styles.loginButton}
						onPress={() => {
							AsyncStorage.setItem(
								'user',
								JSON.stringify({
									teacherEmail: email,
									name: name,
								})
							);
							navigation.navigate('Home page');
						}}
					>
						<Text style={styles.textButton}>Login</Text>
						<View style={styles.arrow}>
							<Icon name="angle-right" color="#03DAC5" size={15} />
						</View>
					</Pressable>
				</View>

				<Image source={require('../assets/WFTW.png')} style={styles.w4twlogo} />
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	background: {
		backgroundColor: '#1E1E1E',
		height: Dimensions.get('window').height,
		width: Dimensions.get('window').width,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
	},
	error: {
		color: '#ff000f',
		textAlign: 'center',
		fontSize: 15,
		padding: 20,
		fontWeight: 'bold',
	},
	textButton: {
		color: '#03DAC5',
		textAlign: 'center',
		fontSize: 14,
		fontWeight: 'bold',
		flex: 5,
	},
	loginButton: {
		width: Dimensions.get('window').width / 3,
		flexDirection: 'row',
		padding: 15,
		marginTop: Dimensions.get('window').height / 12,
		borderColor: '#03DAC5',
		borderRadius: 999,
		borderWidth: 2,
		backgroundColor: '#2C2C2C',
	},
	arrow: {
		flex: 1,
		marginTop: 2,
	},
	icon: {
		marginTop: Dimensions.get('window').height / 50,
		flex: 1,
		marginBottom: 0,
	},
	errview: {
		backgroundColor: '#1E1E1E',
		height: Dimensions.get('window').height / 70,
		width: Dimensions.get('window').width,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
	},
	inputview: {
		flex: 3,
	},
	input: {
		color: 'white',
		backgroundColor: '#2C2C2C',
		width: (4 * Dimensions.get('window').width) / 7,
		borderRadius: 15,
		height: Dimensions.get('window').height / 18,
		paddingLeft: 20,
		borderColor: '#393939',
		borderWidth: 2,
		marginTop: Dimensions.get('window').height / 18,
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
		marginBottom: Dimensions.get('window').height / 30,
		alignSelf: 'center',
		width: Dimensions.get('window').width / 3,
		height: Dimensions.get('window').height / 6,
		flex: 1,
	},
});
