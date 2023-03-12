import React, { Component } from "react";
import { Dimensions, StyleSheet, View, Text, Image, Pressable} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function SignIn({ navigation }) {
  return (
    <View style={styles.background}>
      <Text  numberOfLines={1} adjustsFontSizeToFit style= {styles.text}>Welcome</Text>
      <Text  numberOfLines={5} adjustsFontSizeToFit style= {styles.textUnder}>This app supports the purpose of Water for the World Workshop- to introduce the issues surrounding clean drinking water in different parts of the world.</Text>
      <Pressable style={styles.button} onPress={() => navigation.navigate("Login")}>
        <Text style={styles.textButton}>
          Login
        </Text>
        <View style={styles.arrow} >
          <Icon name='angle-right' color='#03DAC5' size={15}/>
        </View>
      </Pressable>
      <Pressable style={styles.button2} numberOfLines={1} onPress={() => navigation.navigate("Teacher signup")}>
        <Text style={styles.textButton}>
          Teacher signup
        </Text>
        <View style={styles.arrow} >
          <Icon name='angle-right' color='#03DAC5' size={15}/>
        </View>
      </Pressable>
      <Pressable style={styles.button2} numberOfLines={1} onPress={() => navigation.navigate("Student signup")}>
        <Text style={styles.textButton}>
          Student signup
        </Text>
        <View style={styles.arrow} >
          <Icon name='angle-right' color='#03DAC5' size={15}/>
        </View>
      </Pressable>
      <Pressable style={styles.button2} numberOfLines={1} onPress={() => navigation.navigate("Pre questionnaire 1")}>
        <Text style={styles.textButton}>
          Pre-Questionnaire
        </Text>
        <View style={styles.arrow} >
          <Icon name='angle-right' color='#03DAC5' size={15}/>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#1E1E1E',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
  text:{
    color: '#03DAC5',
    marginTop: Dimensions.get('window').height/12,
    textAlign:'center',
    fontSize:30,
    fontWeight: 'bold',
  },
  textUnder:{
    color: '#03DAC5',
    marginTop: Dimensions.get('window').height/12,
    textAlign:'center',
    fontSize:18,
    marginLeft: Dimensions.get('window').width/ 12,
    marginRight: Dimensions.get('window').width/ 12,
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
    marginLeft: Dimensions.get('window').width / 3,
    marginTop: Dimensions.get('window').height / 12,
    borderColor: '#03DAC5',
    borderRadius: 999,
    borderWidth: 2,
    backgroundColor: '#2C2C2C'
  },
  button2: {
    width:  Dimensions.get('window').width / 2,
    flexDirection: 'row',
    padding: 15,
    marginLeft: Dimensions.get('window').width / 4,
    marginTop: Dimensions.get('window').height / 18,
    borderColor: '#03DAC5',
    borderRadius: 999,
    borderWidth: 2,
    backgroundColor: '#2C2C2C'
  },
  arrow:{
    flex: 1,
    marginTop: 2
  }
});
