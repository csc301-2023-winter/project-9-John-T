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


// Introduction to Filter Building Page
export default function FilterIntro({ navigation }) {
    return (
        <SafeAreaView style={styles.background}>
            <Image source={require('../../assets/EWB.png')}  style={styles.ewblogo}/>

            {/* Back to PreQ8 Page */}
            <Pressable style = {{marginLeft : - Dimensions.get('window').width/ 1.2}}
					onPress={async () => {
						navigation.navigate('Pre questionnaire 8');
					}}
				>
                <Icon name='arrow-left' color='#03DAC5' size={25} />
            </Pressable>

            <Text style={styles.textCaption}>Now it's your turn!</Text>
			<Text style={styles.subtext}>
                To get clean drinking water from contaminated water it is important 
                to remove all the particles that can carry diseases and then boil
                (or add an agent such as Chlorine) which will then kill all the bacteria
                and viruses remaining.{"\n\n"}
                Make sure to try to build a filter in at least TWO countries.{"\n\n"}
                Make at least one filter from List A and one from List B.
			</Text>

            {/* Next Page */}
            <Pressable
				style={styles.nextButton}
				numberOfLines={1}
				onPress={() => navigation.navigate('GameIns')}
			>
				<Text style={styles.textButton}>Next</Text>
				<View style={styles.arrow}>
					<Icon name="angle-right" color="#03DAC5" size={15} />
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
		fontSize: 18,
		flexDirection: 'column',
		width: Dimensions.get('window').width / 1.5,
		height: Dimensions.get('window').height / 2,
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
        bottom: Dimensions.get('window').height / -150,
        alignItems: 'flex-start',
        width: Dimensions.get('window').width / 4,
        height: Dimensions.get('window').height / 15.5,
        position: 'absolute',
        bottom: 20,
        left: 10,
    },
});