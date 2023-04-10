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
import AsyncStorage from '@react-native-async-storage/async-storage';


// Post-Filter Well Done Page
export default function WellDone({ navigation }){
    return (
        <SafeAreaView style={styles.background}>  
            <Image source={require('../assets/EWB.png')}  style={styles.ewblogo}/>

            <Text style={styles.textCaption}>
                Well Done!
            </Text>
            <Text style={styles.subtext}>
                Now you have built filters from both list A and B {"(if you haven't already, build another one)"}, and you will realise how
                difficult it is for some people in sub-Saharan Africa to access clean water. {"\n"}{"\n"}
                Press CONTINUE to answer questions about the exercise or press FINISH to end the app.
            </Text>

            {/* Back to Filter Building Instructions Page */}
            <Pressable style={styles.backButton} numberOfLines={1} onPress={() => navigation.navigate("GameIns")}>
                    <Text style={styles.textButton}>
                            Back to Filter Build
                    </Text>
                    <View style={styles.arrow} >
                        <Icon name='angle-right' color='#03DAC5' size={15}/>
                    </View>
            </Pressable>
            
            {/* Continue to Post Questions Page */}
            <Pressable style={styles.nextButton1} numberOfLines={1} onPress={async () => {
                let user = await AsyncStorage.getItem("user")
                if (user == null){
                    navigation.navigate('Post questionnaire Non Login'); 
                }  else {
                    navigation.navigate('Post questionnaire 1');
                    }
            }}>
                <Text style={styles.textButton}>
                    Continue
                </Text>
                <View style={styles.arrow} >
                    <Icon name='angle-right' color='#03DAC5' size={15}/>
                </View>
            </Pressable>

            {/* Continue to Thank You Page */}
            <Pressable style={styles.nextButton2} numberOfLines={1} onPress={() => navigation.navigate("Thank you")}>
                <Text style={styles.textButton}>
                    Finish
                </Text>
                <View style={styles.arrow} >
                <Icon name='angle-right' color='#03DAC5' size={15}/>
                </View>
            </Pressable>

            <Image source={require('../assets/WFTW.png')} style={styles.w4twlogo}/>
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
        marginBottom: Dimensions.get('window').height / 20,
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
    subtext: {
        color: '#03DAC5',
        marginTop: Dimensions.get('window').height / 36,
        marginBottom: Dimensions.get('window').height / 12,
        textAlign: 'center',
        fontSize: 20,
        flexDirection: 'column',
        width: Dimensions.get('window').width / 1.25,
    },
    backButton: {
        width:  Dimensions.get('window').width / 1.5,
        flexDirection: 'row',
        padding: 12,
        borderColor: '#03DAC5',
        borderRadius: 999,
        borderWidth: 2,
        backgroundColor: '#2C2C2C',
        alignSelf: 'center',
    },
    nextButton1: {
        width:  Dimensions.get('window').width / 2,
        marginTop: Dimensions.get('window').height/15,
        flexDirection: 'row',
        padding: 12,
        borderColor: '#03DAC5',
        borderRadius: 999,
        borderWidth: 2,
        backgroundColor: '#2C2C2C',
        alignSelf: 'center',
    },
    nextButton2: {
        width:  Dimensions.get('window').width / 2,
        marginTop: Dimensions.get('window').height/15,
        marginBottom: Dimensions.get('window').height/15,
        flexDirection: 'row',
        padding: 12,
        borderColor: '#03DAC5',
        borderRadius: 999,
        borderWidth: 2,
        backgroundColor: '#2C2C2C',
        alignSelf: 'center',
    },
    textButton:{
        color: '#03DAC5',
        textAlign:'center',
        fontSize:14,
        fontWeight: 'bold',
        flex: 5,
    },
    ewblogo:{
        bottom: Dimensions.get('window').height / -15,
        width: Dimensions.get('window').width / 5,
    	height: Dimensions.get('window').height / 17.5,
        alignSelf: 'flex-end',
        right: "5%",
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