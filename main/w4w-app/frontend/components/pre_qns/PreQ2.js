import { StatusBar } from 'expo-status-bar';
import React from "react";
import { useState } from 'react';
import { Dimensions, StyleSheet, View, Text, Image, Pressable, Modal, SafeAreaView } from "react-native";
import { Slider } from "react-native-elements";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/FontAwesome5';


// PreQ2 Page
export default function PreQ2({ navigation }) {
    const [range, setRange] = useState('0');
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <SafeAreaView style={styles.background}>
            <Image source={require('../../assets/EWB.png')}  style={styles.ewblogo}/>

            {/* Back to PreQ1 Page */}
            <Pressable style = {{marginLeft : - Dimensions.get('window').width/ 1.2}} onPress={async () => {
                navigation.navigate("Pre questionnaire 1")
                }}>
                <Icon name='arrow-left' color='#03DAC5' size={25} />
            </Pressable>

            <Text style={styles.textCaption}>Clean Water Access</Text>
            <Text style={styles.subtext}>
                There are 8 billion people in the world.
                How many don’t have access to clean drinking water in their home?
            </Text>
            
            {/* Slider Input */}
            <Text style={styles.sliderText}>{range}</Text>
            {/* Popup Info */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalContainer}>
                        <Text style ={ styles.answerView}> 800 million people - 1 in 10 of the world’s population - don’t have clean drinking water within a 30-minute trip from their home and 1 in 4 (2 billion!) don’t have it in their home {'\n'}</Text>
                        <Pressable style={styles.popupButton} numberOfLines={1} onPress={()=> {setModalVisible(!modalVisible)}}>
                            <Text style={styles.textButton}>OK</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            <Slider
                style= {{width:300, height:50}}
                thumbTintColor= '#03DAC5'
                onValueChange={value=>setRange(parseInt(value*999) + " " + "million")}
                minimumValue={0}
                maximumValue={1}
                value={0}
                onSlidingComplete={()=>setModalVisible(!modalVisible)}
            />
            
            {/* Next Page */}
            <View style={styles.skipContainer}>
                <Pressable style={styles.nextButton} numberOfLines={1} onPress={() => navigation.navigate("Pre questionnaire 3")}>
                    <Text style={styles.textButton}>
                        Next
                    </Text>
                    <View style={styles.arrow} >
                        <FontAwesome5 name='angle-right' color='#03DAC5' size={15}/>
                    </View>
                </Pressable>
            </View>

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
        marginTop: Dimensions.get('window').height / 15,
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
        fontSize: 20,
        flexDirection: 'column',
        width: Dimensions.get('window').width / 1.5,
        height: Dimensions.get('window').height/6,
    },
    skipContainer: {
        flex: 2,
        marginTop: Dimensions.get('window').height/4,
    },
    popupButton: {
        width:  Dimensions.get('window').width / 2,
        flexDirection: 'row',
        padding: 12,
        borderColor: '#03DAC5',
        borderRadius: 999,
        borderWidth: 2,
        backgroundColor: '#2C2C2C',
        alignItems: 'center',
    },
    nextButton: {
        width:  Dimensions.get('window').width / 2,
        flexDirection: 'row',
        padding: 12,
        borderColor: '#03DAC5',
        borderRadius: 999,
        borderWidth: 2,
        backgroundColor: '#2C2C2C',
        marginTop: -150,
        alignItems: 'center',
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
    sliderText:{
        fontSize:40,
        fontWeight: 'bold',
        color:'#03DAC5',
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        margin: 20,
        backgroundColor: '#2C2C2C',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    answerView: {
        textAlign: 'center',
        color: '#03DAC5',
        fontSize: 18,
    },
    ewblogo:{
        bottom: Dimensions.get('window').height / -18,
        width: Dimensions.get('window').width / 5,
        height: Dimensions.get('window').height / 17.5,
        alignSelf: 'flex-end',
        right: "5%",
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