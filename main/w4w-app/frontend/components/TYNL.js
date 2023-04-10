import React from "react";
import { Dimensions, StyleSheet, View, Text, Image, Pressable, Linking, SafeAreaView } from "react-native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


// Final Thank You Page, Not Logged In
export default function TYNL({ navigation }){
    return(
        <SafeAreaView style={styles.background}>
            <Image source={require('../assets/EWB.png')}  style={styles.ewblogo}/>

            <Text style={styles.textCaption}> Great Job! </Text>
            <Text style={styles.subtext} numberOfLines={7}>
                Thank you for using our app. We hope that you learn
                a lot from the simulation. Please feel free to share 
                this app to your friends and family to help us raise
                awareness regarding clean water issues in Sub-Saharan Africa.
            </Text>
            <Text style={styles.subtext2}>
                Please feel free to share this App{"\n"}
                Available for Android on Google Store and iPhone at the App Store
            </Text>

            {/* Pressable images to Play Store and App Store */}
            <Pressable onPress={() => Linking.openURL('https://play.google.com/store/games')}>
                <Image source={require('../assets/googlePlay.png')} style={styles.googlelogo}/>
            </Pressable>
            <Pressable onPress={() => Linking.openURL('https://www.apple.com/ca/app-store/')}>
                <Image source={require('../assets/appStore.png')} style={styles.applelogo}/>
            </Pressable>

            <View style={styles.skipContainer}>
                {/* Back to Home Page */}
                <Pressable style={styles.button} numberOfLines={1} onPress={async () => {navigation.navigate("Home page")}}>
                    <Text style={styles.textButton}>
                        Home
                    </Text>
                    <View style={styles.arrow} >
                        <FontAwesome5 name='angle-right' color='#03DAC5' size={15}/>
                    </View>
                </Pressable>
            </View>

            <Image source={require('../assets/WFTW.png')} style={styles.w4twlogo}/>
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
        marginTop: Dimensions.get('window').height / 20,
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
    subtext: {
        color: '#03DAC5',
        marginTop: Dimensions.get('window').height / 36,
        textAlign: 'center',
        fontSize: 16,
        flexDirection: 'column',
        width: Dimensions.get('window').width / 1.5,
        height: Dimensions.get('window').height/6,
    },
    subtext2: {
        color: '#03DAC5',
        marginTop: Dimensions.get('window').height / 64,
        textAlign: 'center',
        fontSize: 16,
        flexDirection: 'column',
        width: Dimensions.get('window').width / 1.5,
    },
    skipContainer: {
        flex: 2,
        marginTop: Dimensions.get('window').height/12,
    },
    button: {
        width:  Dimensions.get('window').width / 2,
        flexDirection: 'row',
        padding: 12,
        borderColor: '#03DAC5',
        borderRadius: 999,
        borderWidth: 2,
        backgroundColor: '#2C2C2C',
        alignItems: 'center',
        marginTop: Dimensions.get('window').height / 36,
    },
    arrow:{
        flex: 1,
        marginTop: 2
    },
    textButton:{
        color: '#03DAC5',
        textAlign:'center',
        fontSize:14,
        fontWeight: 'bold',
        flex:5,
    },
    ewblogo:{
        bottom: Dimensions.get('window').height / -18,
        width: Dimensions.get('window').width / 5,
        height: Dimensions.get('window').height / 17.5,
        alignSelf: 'flex-end',
        right: "5%"
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
    googlelogo:{
        width: Dimensions.get('window').width / 1.65,
        height: Dimensions.get('window').height / 10.5,
        marginTop: Dimensions.get('window').height / 25,
        marginBottom: Dimensions.get('window').height / 25,
    },
    applelogo:{
        width: Dimensions.get('window').width / 1.75,
        height: Dimensions.get('window').height / 10.5,
        resizeMode: 'contain',
    },
});