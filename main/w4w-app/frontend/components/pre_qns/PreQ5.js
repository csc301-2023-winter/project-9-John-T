import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
	Dimensions,
	StyleSheet,
	View,
	Text,
	Image,
	Pressable,
	Linking,
	SafeAreaView
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/FontAwesome5';


// PreQ5 Page
export default function PreQ5({ navigation }) {
	return (
		<SafeAreaView style={styles.background}>
			<Image source={require('../../assets/EWB.png')}  style={styles.ewblogo}/>

            {/* Back to PreQ4 Page */}
			<Pressable style = {{marginLeft : - Dimensions.get('window').width/ 1.2}}
					onPress={async () => {
						navigation.navigate('Pre questionnaire 4');
					}}
				>
					<Icon name='arrow-left' color='#03DAC5' size={25} />
			</Pressable>

			<Text style={styles.textCaption}>Global Literacy Rate</Text>
			<Text style={styles.subtext}>
				The literacy rate is defined by the percentage of the population of a
				given age group that can read and write. As you can see below, there
				is a trend of low literacy rates for countries in Sub-Saharan Africa.
			</Text>

            {/* Map Image */}
			<View style={styles.ImageContainer}>
				<Image
					source={require('../../assets/globalLiteracyRate.png')}
					style={{
						width: Dimensions.get('window').width,
						height: Dimensions.get('window').height / 2.5,
						marginTop: Dimensions.get('window').height / 40,
						resizeMode: 'contain',
					}}
				/>
			</View>

            {/* Map Source Info */}
			<Text style={styles.sourceText}>
				Source:{' '}
				<Text
					style={styles.sourceLink}
					onPress={() =>
						Linking.openURL(
							'https://ourworldindata.org/grapher/cross-country-literacy-rates?tab=map&country=East+Asia+%26+Pacific~Sub-Saharan+Africa~Europe+%26+Central+Asia~Latin+America+%26+Caribbean~Middle+East+%26+North+Africa~South+Asia'
						)
					}
				>
					Our World in Data
				</Text>
			</Text>

            {/* Next Page */}
			<Pressable
				style={styles.nextButton}
				numberOfLines={1}
				onPress={() => navigation.navigate('Pre questionnaire 6')}
			>
				<Text style={styles.textButton}>Next</Text>
				<View style={styles.arrow}>
					<FontAwesome5 name="angle-right" color="#03DAC5" size={15} />
				</View>
			</Pressable>
		
			<Image source={require('../../assets/WFTW.png')} style={styles.w4twlogo}/>
			<StatusBar style="auto" />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	background: {
		backgroundColor: '#1E1E1E',
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1,
	},
	textCaption: {
		color: '#03DAC5',
		marginTop: Dimensions.get('window').height / 50,
		textAlign: 'center',
		fontSize: 30,
		fontWeight: 'bold',
		textDecorationLine: 'underline',
	},
	subtext: {
		color: '#03DAC5',
		marginTop: Dimensions.get('window').height / 15,
		textAlign: 'center',
		fontSize: 15,
		flexDirection: 'column',
		width: Dimensions.get('window').width / 1.2,
	},
	sourceText: {
		color: '#03DAC5',
		marginTop: Dimensions.get('window').height / 50,
	},
	sourceLink: {
		color: '#0044CC',
		textDecorationLine: 'underline',
	},
	nextButton: {
		width: Dimensions.get('window').width / 2,
		flexDirection: 'row',
		padding: 12,
		borderColor: '#03DAC5',
		borderRadius: 999,
		borderWidth: 2,
		backgroundColor: '#2C2C2C',
		marginTop: Dimensions.get('window').height / 15,
		marginBottom: Dimensions.get('window').height / 15,
		alignItems: 'center',
	},
	arrow: {
		flex: 1,
		marginTop: 2,
	},
	textButton: {
		color: '#03DAC5',
		textAlign: 'center',
		fontSize: 14,
		fontWeight: 'bold',
		flex: 5,
	},
	ewblogo:{
        right: Dimensions.get('window').width / -3,
        bottom: Dimensions.get('window').height / -18,
        width: Dimensions.get('window').width / 5,
    	height: Dimensions.get('window').height / 17.5,
      },
    w4twlogo: {
        bottom: Dimensions.get('window').height / 180,
        alignItems: 'flex-start',
		width: Dimensions.get('window').width / 4,
    	height: Dimensions.get('window').height / 15.5,
		position: 'absolute',
        bottom: 20,
        left: 10,
    },
});
