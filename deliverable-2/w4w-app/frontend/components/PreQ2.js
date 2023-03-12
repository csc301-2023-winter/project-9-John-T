import { StatusBar } from 'expo-status-bar';
import React, { Component } from "react";
import { useState } from 'react';
import { Dimensions, StyleSheet, View, Text, Image, Pressable, Modal } from "react-native";
import { Slider } from "react-native-elements";
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';




export default function PreQ2({ navigation }) {
    const [range, setRange] = useState('0');
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.background}>
            <Text style={styles.textCaption}>Clean Water Access</Text>
            <Text style={styles.subtext}>
                There are nearly 80 billion people in the world.
                How many don’t have access to clean drinking water in their home?
            </Text>
            <Text style={styles.sliderText}>{range}</Text>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalContainer}>
                        <Text style ={ styles.text}> 800 million people - 1 in 10 of the world’s population - don’t have clean drinking water within a 30-minute trip from their home and 1 in 4 (2 billion!) don’t have it in their home {'\n'}</Text>
                        <Pressable style={styles.button2} numberOfLines={1} onPress={()=> {setModalVisible(!modalVisible)}}>
                            <Text style={styles.textButton}>Learned</Text>
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
            
            <View style={styles.skipContainer}>
                <Pressable style={styles.button2} numberOfLines={1} onPress={() => navigation.navigate("Pre questionnaire 3")}>
                    <Text style={styles.textButton}>
                        Next
                    </Text>
                    <View style={styles.arrow} >
                        <FontAwesome5 name='angle-right' color='#03DAC5' size={15}/>
                    </View>
                </Pressable>
            </View>
      
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
        flexDirection: 'column'
    },
    bold: {fontWeight: 'bold'},
    italic: {fontStyle: 'italic'},
    underline: {textDecorationLine: 'underline'
    },
    textCaption: {
        color: '#03DAC5',
        marginTop: Dimensions.get('window').height / 8,
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
        height: Dimensions.get('window').height/6,
    },
    skipContainer: {
        flex: 2,
        marginTop: Dimensions.get('window').height/4,
    },
    button2: {
        width:  Dimensions.get('window').width / 2,
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
    textButton:{
        color: '#03DAC5',
        textAlign:'center',
        fontSize:14,
        fontWeight: 'bold',
        flex:5,
        // marginTop: Dimensions.get('window').height/2,

    },
    sliderText:{
        fontSize:40,
        fontWeight: 'bold',
        color:'#03DAC5',
        // height: Dimensions.get('window').height/2,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // marginTop: ,
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
    text: {
        color: '#03DAC5',
    }
});