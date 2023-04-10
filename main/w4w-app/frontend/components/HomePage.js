import React from "react";
import { Dimensions, StyleSheet, View, Text, Image, Pressable, SafeAreaView,} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Main Home Page
export default function HomePage({ navigation }) {

  return (
    <SafeAreaView style={styles.background}> 
        <View>
            <Image source={require('../assets/EWB.png')}  style={styles.ewblogo}/>

            <Text  numberOfLines={1} adjustsFontSizeToFit style= {styles.text}>Welcome</Text>

            <Text numberOfLines={5} adjustsFontSizeToFit style={styles.textUnder}>
                This app supports the purpose of{'\n'}

                <View style={styles.urls}>
                    <Pressable onPress={() => navigation.navigate("W4W Info")}>
                    <Text style={{ textDecorationLine: 'underline', color: 'lightblue', fontSize: 18}}>Water for the World Workshop</Text>
                    </Pressable>
                </View>

                {'\n'} - to introduce the issues surrounding clean drinking water in different parts of the world.
            </Text>
            
            <Text  numberOfLines={5} adjustsFontSizeToFit style= {styles.textUnder}>If you have been asked by your instructor/teacher/presenter to login, please continue with the login button</Text>

            <Pressable style={styles.loginButton} onPress={async () => {
                    let user = await AsyncStorage.getItem("user");

                    if (user == null){
                        navigation.navigate('Student login');
                    } else {
                        navigation.navigate("Already logged")
                }}}>

                <Text style={styles.textButton}>
                Login
                </Text>
                <View style={styles.arrow} >
                <Icon name='angle-right' color='#03DAC5' size={15}/>
                </View>
            </Pressable>

            {/* Tap Water Animation GIF */}
            <Image source={require('../assets/blended-tap.gif')}  style={styles.gifstyle}/>

            {/* Skip to Pre-Questionnaire */}
            <Pressable style={styles.skipButton1} numberOfLines={1} onPress={() => navigation.navigate("Pre questionnaire 1")}>
                <Text style={styles.textButton}>
                Skip to Pre-Questionnaire
                </Text>
                <View style={styles.arrow} >
                <Icon name='angle-right' color='#03DAC5' size={15}/>
                </View>
            </Pressable>

            {/* Skip to Filter */}
            <Pressable style={styles.skipButton2} numberOfLines={1} onPress={() => navigation.navigate("filterintro")}>
                <Text style={styles.textButton}>
                Skip to Filter Building
                </Text>
                <View style={styles.arrow} >
                <Icon name='angle-right' color='#03DAC5' size={15}/>
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
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text:{
        color: '#03DAC5',
        textAlign:'center',
        fontSize:30,
        fontWeight: 'bold',
    },
    textUnder:{
        color: '#03DAC5',
        marginTop: Dimensions.get('window').height/65,
        textAlign:'center',
        fontSize:18,
        marginHorizontal: Dimensions.get('window').width/ 12,
    },
    urls:{
        marginHorizontal: Dimensions.get('window').width/ 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textButton:{
        color: '#03DAC5',
        textAlign:'center',
        fontSize:14,
        fontWeight: 'bold',
        flex: 5
    },
    loginButton: {
        width:  Dimensions.get('window').width / 3,
        flexDirection: 'row',
        padding: 12,
        alignSelf:'center',
        marginTop: Dimensions.get('window').height / 105,
        borderColor: '#03DAC5',
        borderRadius: 999,
        borderWidth: 2,
        backgroundColor: '#2C2C2C'
    },
    skipButton1: {
        width:  Dimensions.get('window').width / 1.8,
        flexDirection: 'row',
        padding: 12,
        marginTop: Dimensions.get('window').height / 45,
        alignSelf:'center',
        marginBottom: Dimensions.get('window').height/ -80,
        borderColor: '#03DAC5',
        borderRadius: 999,
        borderWidth: 2,
        backgroundColor: '#2C2C2C'
    },
    skipButton2: {
        width:  Dimensions.get('window').width / 1.8,
        flexDirection: 'row',
        padding: 12,
        marginTop: Dimensions.get('window').height / 40,
        alignSelf:'center',
        marginBottom: Dimensions.get('window').height/ 130,
        borderColor: '#03DAC5',
        borderRadius: 999,
        borderWidth: 2,
        backgroundColor: '#2C2C2C'
    },
    arrow:{
        marginTop: 2
    },
    gifstyle:{
        alignSelf: 'center',
        marginTop: Dimensions.get('window').height / 50,
        marginBottom: Dimensions.get('window').height/ 270,
        width: Dimensions.get('window').width / 1.75,
        height: Dimensions.get('window').height / 3.2,
        right: Dimensions.get('window').width / 12,
    },
    ewblogo:{
        width: Dimensions.get('window').width / 5,
        height: Dimensions.get('window').height / 17.5,
        position: 'absolute',
        top: 10,
        right: 20,
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
