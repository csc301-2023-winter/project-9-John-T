import { StatusBar } from 'expo-status-bar';
import React, { Component } from "react";
import { Dimensions, StyleSheet, View, Text, Image, Pressable, SafeAreaView } from "react-native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/FontAwesome5';


// Filter Building Instructions Page
export default function GameIns({ navigation }) {
    return (
        <SafeAreaView style={styles.background}>
            <Image source={require('../../assets/EWB.png')}  style={styles.ewblogo}/>

            {/* Back to Filter Intro Page */}
            <Pressable style = {{marginLeft : - Dimensions.get('window').width/ 1.2}} onPress={async () => {
                navigation.navigate('filterintro');
              }}>
                <Icon name='arrow-left' color='#03DAC5' size={25} />
            </Pressable>

            <Text style={styles.textCaption}>Instructions</Text>
            <Text style={styles.subtext} >Click on the material to select it. Select the layer on the filter you would like to place the material at and long press the layer to remove it.{'\n\n'} Select your country and enjoy!</Text>

            <View style={styles.skipContainer}>
                {/* List A Countries */}
                <Text style={styles.listHeader}>LIST A</Text>

                <Pressable style={styles.countryButton} numberOfLines={1} onPress={() => navigation.navigate("Canada", {moneyval: 500, f1:'none', f2:'none', f3:'none', f4: 'none', f5:'none', f6:'none', f7:'none', f8:'none', isNew: true})}>
                    <Text style={styles.textButton}>
                        Canada
                    </Text>
                    <View style={styles.arrow} >
                    <FontAwesome5 name='angle-right' color='#03DAC5' size={15}/>
                    </View>
                </Pressable>

                <Pressable style={styles.countryButton} numberOfLines={1} onPress={() => navigation.navigate("Kuwait", {moneyval: 400, f1:'none', f2:'none', f3:'none', f4: 'none', f5:'none', f6:'none', f7:'none', f8:'none', isNew: true})}>
                    <Text style={styles.textButton}>
                        Kuwait
                    </Text>
                    <View style={styles.arrow} >
                    <FontAwesome5 name='angle-right' color='#03DAC5' size={15}/>
                    </View>
                </Pressable>

                <Pressable style={styles.countryButton} numberOfLines={1} onPress={() => navigation.navigate("CanFN", {moneyval: 350, f1:'none', f2:'none', f3:'none', f4: 'none', f5:'none', f6:'none', f7:'none', f8:'none', isNew: true})}>
                    <Text style={styles.textButton}>
                        Canada First Nation
                    </Text>
                    <View style={styles.arrow} >
                    <FontAwesome5 name='angle-right' color='#03DAC5' size={15}/>
                    </View>
                </Pressable>

                {/* List B Countries */}
                <Text style={[styles.listHeader, {marginTop: Dimensions.get('window').height / 130}]}>{"\n"}LIST B </Text>

                <Pressable style={styles.countryButton} numberOfLines={1} onPress={() => navigation.navigate("SAfrica", {moneyval: 65, f1:'none', f2:'none', f3:'none', f4: 'none', f5:'none', f6:'none', f7:'none', f8:'none', isNew: true})}>
                    <Text style={styles.textButton}>
                        South Africa
                    </Text>
                    <View style={styles.arrow} >
                    <FontAwesome5 name='angle-right' color='#03DAC5' size={15}/>
                    </View>
                </Pressable>

                <Pressable style={styles.countryButton} numberOfLines={1} onPress={() => navigation.navigate("Ghana", {moneyval: 40,f1:'none', f2:'none', f3:'none', f4: 'none', f5:'none', f6:'none', f7:'none', f8:'none', isNew: true})}>
                    <Text style={styles.textButton}>
                        Ghana
                    </Text>
                    <View style={styles.arrow} >
                    <FontAwesome5 name='angle-right' color='#03DAC5' size={15}/>
                    </View>
                </Pressable>

                <Pressable style={styles.countryButton} numberOfLines={1} onPress={() => navigation.navigate("Kenya", {moneyval:30, f1:'none', f2:'none', f3:'none', f4: 'none', f5:'none', f6:'none', f7:'none', f8:'none', isNew: true})}>
                    <Text style={styles.textButton}>
                        Kenya
                    </Text>
                    <View style={styles.arrow} >
                    <FontAwesome5 name='angle-right' color='#03DAC5' size={15}/>
                    </View>
                </Pressable>

                <Pressable style={[styles.countryButton, {marginBottom: Dimensions.get('window').height / 50,}]} numberOfLines={1} onPress={() => navigation.navigate("Malawi", {moneyval: 50, f1:'none', f2:'none', f3:'none', f4: 'none', f5:'none', f6:'none', f7:'none', f8:'none', isNew: true})}>
                    <Text style={styles.textButton}>
                        Malawi
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
        flex: 1
    },
    textCaption: {
        color: '#03DAC5',
        marginTop: Dimensions.get('window').height / 90,
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
    subtext: {
        color: '#03DAC5',
        marginTop: Dimensions.get('window').height / 300,
        textAlign: 'center',
        fontSize: 16,
        flexDirection: 'column',
        width: Dimensions.get('window').width / 1.5,
    },
    listHeader: {
      color: '#03DAC5',
      marginTop: Dimensions.get('window').height / 65,
      textAlign: 'center',
      fontSize: 16,
      flexDirection: 'column',
      fontWeight: 'bold',
      width: Dimensions.get('window').width / 2,
    },
    skipContainer: {
        flex: 1
    },
    countryButton: {
        width:  Dimensions.get('window').width / -1.5,
        marginTop: Dimensions.get('window').height / 50,
        flexDirection: 'row',
        padding: 8,
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
        flex: 5
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
