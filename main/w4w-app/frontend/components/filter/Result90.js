import { StatusBar } from 'expo-status-bar';
import React from "react";
import { Dimensions, StyleSheet, View, Text, Image, Pressable, ImageBackground } from "react-native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


// Filter Test Results (90%)
export default function Result90({ route, navigation }) {
    const { result } = route.params;
    const getImage = () => {
      if(true){
        return <Image style = {styles.filter} source={require('../../assets/100.png')} />
      }
    }

    return (
        <View style={styles.background}>
            <Image source={require('../../assets/EWB.png')}  style={styles.ewblogo}/>
            <Text style={styles.textCaption}>Test Results</Text>
            {getImage()}
            <Text style={styles.subtext}>
                Your dirty water is now {result}% clean water. {'\n\n'}
                If you add an antibacterial agent or boil this water, it is probably okay to drink.  
            </Text>

            <View style={styles.skipContainer}>
                <Pressable style={styles.button1} numberOfLines={1} onPress={() => navigation.navigate("GameIns")}>
                    <Text style={styles.textButton}>
                        Visit a different country
                    </Text>
                    <View style={styles.arrow} >
                    <FontAwesome5 name='angle-right' color='#03DAC5' size={15}/>
                    </View>
                </Pressable>

                <View style={styles.buttonLayer}>
                    <Pressable style={styles.button2} numberOfLines={1} onPress={() => navigation.navigate("Home page")}>
                        <View style={styles.arrow2} >
                            <FontAwesome5 name='angle-left' color='#03DAC5' size={15}/>
                        </View>
                        <Text style={styles.textButton}>
                            Home
                        </Text>
                    </Pressable>
                    
                    <Pressable style={styles.button3} numberOfLines={1} onPress={() => navigation.navigate("welldone")}>
                        <Text style={styles.textButton}>
                            Continue
                        </Text>
                        <View style={styles.arrow} >
                        <FontAwesome5 name='angle-right' color='#03DAC5' size={15}/>
                        </View>
                    </Pressable>
                </View>  
            </View>
            <Image source={require('../../assets/WFTW.png')} style={styles.w4twlogo}/>
            <StatusBar style="auto" />
        </View>
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
    bold: {fontWeight: 'bold'},
    italic: {fontStyle: 'italic'},
    underline: {textDecorationLine: 'underline'
    },
    textCaption: {
        color: '#03DAC5',
        marginTop: Dimensions.get('window').height / 20,
        height: Dimensions.get('window').height/7,
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
        height: Dimensions.get('window').height/2,
    },
    buttonLayer:{
        flexDirection: 'row',
        marginTop: Dimensions.get('window').height*1/70,
        marginBottom: Dimensions.get('window').height*1/30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    skipContainer: {
        flex: 1,
        marginTop: -Dimensions.get('window').height/3,
      },
    button1: {
        width:  Dimensions.get('window').width / 1.35,
        marginTop: Dimensions.get('window').height/36,
        flexDirection: 'row',
        padding: 12,
        borderColor: '#03DAC5',
        borderRadius: 999,
        borderWidth: 2,
        backgroundColor: '#2C2C2C',
        alignSelf: 'center',
      },
    button2: {
        width:  Dimensions.get('window').width / 3,
        marginBottom: Dimensions.get('window').height/36,
        marginRight: Dimensions.get('window').width/30,
        flexDirection: 'row',
        padding: 12,
        borderColor: '#03DAC5',
        borderRadius: 999,
        borderWidth: 2,
        backgroundColor: '#2C2C2C',
        alignItems: 'center',
      },
    button3: {
        width:  Dimensions.get('window').width / 3,
        marginBottom: Dimensions.get('window').height/36,
        marginLeft: Dimensions.get('window').width/30,
        flexDirection: 'row',
        padding: 12,
        borderColor: '#03DAC5',
        borderRadius: 999,
        borderWidth: 2,
        backgroundColor: '#2C2C2C',
        alignItems: 'center',
      },
      arrow:{
        flex: 1,
        marginTop: 2
      },
      arrow2:{
        flex: 1,
        marginTop: 2,
        marginLeft: Dimensions.get('window').width / 30,
      },
      textButton:{
        color: '#03DAC5',
        textAlign:'center',
        fontSize:14,
        fontWeight: 'bold',
        flex: 5,
      },
      filter:{
        width: Dimensions.get('window').width / 4,
        height: Dimensions.get('window').height / 4,
        flexDirection: 'row',
        padding: 12,
        right: Dimensions.get('window').width / 23,
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