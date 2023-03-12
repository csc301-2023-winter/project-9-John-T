import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Dimensions, FlatList, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function TeacherHR ({ navigation }) {
    return (
        <View style={styles.background}>
            <Text> Teacher Homeroom room </Text>
        </View>
    );
}


const styles = StyleSheet.create({
    titleText: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    background: {
      backgroundColor: '#1E1E1E',
      height: Dimensions.get('window').height,
      width: Dimensions.get('window').width,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column'
    },

});