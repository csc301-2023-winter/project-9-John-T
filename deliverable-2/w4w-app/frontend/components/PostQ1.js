import React, { Component } from "react";
import { Dimensions, StyleSheet, View, Text, Image, Pressable, Modal, TextInput } from "react-native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


export default function PostQ1({ navigation }){
    return (
        <View style={styles.background}>
            <Text style={styles.textCaption}>Question 1</Text>
            <Text style={styles.subtext}>
                How did the money and literacy rate you were given
                for each affect your ability to build a water filter?
            </Text>
            <TextInput
                multiline
                numberOfLines={6}
                maxLength={200}
                style={styles.input}
                placeholder="Comment"
                placeholderTextColor={'#03DAC5'}
                label = "User name"
            />

        <View style = {styles.inputview}>
                <Pressable style={styles.button} onPress={() => navigation.navigate("Post questionnaire 2")}>
                <Text style={styles.textButton}>
                    Next
                </Text>
                <View style={styles.arrow} >
                    <FontAwesome5 name='angle-right' color='#03DAC5' size={15}/>
                </View>
                </Pressable>
            </View>
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
    input:{
        color: 'white',
        backgroundColor:'#2C2C2C',
        width: 4 * Dimensions.get('window').width/5,
        borderRadius: 15,
        height:  Dimensions.get('window').height/4 ,
        padding: 10,
        borderColor: '#393939',
        borderWidth: 2,
        marginTop: Dimensions.get('window').height/18,
        textAlign: 'left',
    },
    inputview:{
        flex:2
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
        flex: 5
    },
    button: {
        width:  Dimensions.get('window').width / 3,
        flexDirection: 'row',
        padding: 15,
        marginTop: Dimensions.get('window').height / 24,
        borderColor: '#03DAC5',
        borderRadius: 999,
        borderWidth: 2,
        backgroundColor: '#2C2C2C'
    },
});