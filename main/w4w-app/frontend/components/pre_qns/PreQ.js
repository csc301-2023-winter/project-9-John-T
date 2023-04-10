import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
	Dimensions,
	StyleSheet,
	View,
	Text,
	Image,
	Pressable,
	SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


// PreQ1 Page
export default function PreQ({ navigation }) {
	return (
		<SafeAreaView style={styles.background}>
			<Image source={require('../../assets/EWB.png')} style={styles.ewblogo} />

            {/* Back to Home Page */}
			<Pressable
				style={{ marginLeft: -Dimensions.get('window').width / 1.2 }}
				onPress={() => {
					navigation.navigate('Home page');
				}}
			>
				<Icon name="arrow-left" color="#03DAC5" size={25} />
			</Pressable>

			<Text style={styles.textCaption}>Introduction</Text>
			<Text style={styles.subtext}>
				The Water for the World Workshop introduces participants to the issues
				of clean water access and how local economy, geography and literacy are
				all connected. Using this app, you will try to build a water filter to
				access clean water for yourself!
			</Text>

            {/* Next Page */}
			<View style={styles.skipContainer}>
				<Pressable
					style={styles.nextButton}
					numberOfLines={1}
					onPress={() => navigation.navigate('Pre questionnaire 2')}
				>
					<Text style={styles.textButton}>Start</Text>
					<View style={styles.arrow}>
						<FontAwesome5 name="angle-right" color="#03DAC5" size={15} />
					</View>
				</Pressable>
			</View>
			
			<Image source={require('../../assets/WFTW.png')} style={styles.w4twlogo} />
			<StatusBar style="auto" />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	background: {
		backgroundColor: '#1E1E1E',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	textCaption: {
		color: '#03DAC5',
		marginTop: Dimensions.get('window').height / 20,
		height: Dimensions.get('window').height / 7,
		textAlign: 'center',
		fontSize: 30,
		fontWeight: 'bold',
		textDecorationLine: 'underline',
	},
	subtext: {
		color: '#03DAC5',
		textAlign: 'center',
		fontSize: 16,
		flexDirection: 'column',
		width: Dimensions.get('window').width / 1.5,
		height: Dimensions.get('window').height / 2,
	},
	skipContainer: {
		flex: 2,
	},
	nextButton: {
		width: Dimensions.get('window').width / 2,
		flexDirection: 'row',
		padding: 12,
		borderColor: '#03DAC5',
		borderRadius: 999,
		borderWidth: 2,
		backgroundColor: '#2C2C2C',
		alignItems: 'center',
	},
	arrow: {
		flex: 1,
	},
	textButton: {
		color: '#03DAC5',
		textAlign: 'center',
		fontSize: 14,
		fontWeight: 'bold',
		flex: 5,
	},
	ewblogo: {
		bottom: Dimensions.get('window').height / -18,
		width: Dimensions.get('window').width / 5,
		height: Dimensions.get('window').height / 17.5,
		alignSelf: 'flex-end',
		right: '5%',
	},
	w4twlogo: {
		bottom: Dimensions.get('window').height / 112,
		alignItems: 'flex-start',
		width: Dimensions.get('window').width / 4,
		height: Dimensions.get('window').height / 15.5,
		position: 'absolute',
		bottom: 20,
		left: 10,
	},
});
