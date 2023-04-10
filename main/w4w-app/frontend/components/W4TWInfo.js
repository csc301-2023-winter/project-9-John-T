import React from "react";
import { Dimensions, StyleSheet, View, Text, Image, Pressable, Linking} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';


// W4TW URLs Info Page
export default function W4TWInfoPage({ navigation }) {
  return (
    <View style={styles.background}>
        <Image source={require('../assets/EWB.png')}  style={styles.ewblogo}/>

        {/* Back to Home Page */}
        <Pressable style = {styles.backArrow} onPress={async () => {
            navigation.navigate("Home page")
            }}>
            <Icon name='arrow-left' color='#03DAC5' size={25} />
        </Pressable>

        <Text  numberOfLines={2} adjustsFontSizeToFit style= {styles.text}>Water for the World {'\n\n'} (W4TW)</Text>
        <Text numberOfLines={5}  style= {styles.textUnder}>Workshops are delivered by the Engineers Without Borders (EWB) volunteers to school and university students across Canada. Workshops are also available for corporate and community events by contacting W4W at: </Text>
        
        {/* URLs */}
        <Text numberOfLines={1} adjustsFontSizeToFit style= {styles.description}> Email</Text>
        <Pressable onPress={() => Linking.openURL('mailto:waterfortheworldworkshops@gmail.com')}>
        <Text style={styles.links}>waterfortheworldworkshops@gmail.com</Text>
        </Pressable>

        <Text numberOfLines={1} adjustsFontSizeToFit style= {styles.description}> Facebook</Text>
        <Pressable onPress={() => Linking.openURL('https://www.facebook.com/WaterForTheWorld/')}>
            <Text style={styles.links}>www.facebook.com/WaterForTheWorld/</Text>
        </Pressable>

        <Text numberOfLines={1} adjustsFontSizeToFit style= {styles.description}> Instagram</Text>
        <Pressable onPress={() => Linking.openURL('https://www.instagram.com/water4tworld/?hl=en')}>
            <Text style={styles.links}>www.instagram.com/water4tworld/?hl=en</Text>
        </Pressable>

        <Text numberOfLines={1} adjustsFontSizeToFit style= {styles.description}> Twitter</Text>
        <Pressable onPress={() => Linking.openURL('https://twitter.com/EWBWater4World')}>
            <Text style={styles.links}>twitter.com/EWBWater4World</Text>
        </Pressable>

        <Text numberOfLines={1} adjustsFontSizeToFit style= {styles.description}> Website</Text>
        <Pressable onPress={() => Linking.openURL('https://www.torontopro.ewb.ca/w4tw')}>
            <Text style={styles.links}>www.torontopro.ewb.ca/w4tw</Text>
        </Pressable>

        <Image source={require('../assets/WFTW.png')} style={styles.w4twlogo}/>
    </View>
  );
}
const styles = StyleSheet.create({
    background: {
        backgroundColor: '#1E1E1E',
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
    },
    backArrow: {
        marginTop: Dimensions.get('window').height / 20,
        marginBottom: -Dimensions.get('window').height / 25,
        marginLeft : Dimensions.get('window').width / 20
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
        marginTop: Dimensions.get('window').height/20,
        textAlign:'center',
        fontSize:14,
        marginLeft: Dimensions.get('window').width/ 12,
        marginRight: Dimensions.get('window').width/ 12,
    },
    description:{
        color: '#03DAC5',
        marginTop: Dimensions.get('window').height/50,
        textAlign:'center',
        marginLeft: Dimensions.get('window').width/ 12,
        marginRight: Dimensions.get('window').width/ 12,
        fontSize:16,
    },
    links:{
        color: 'lightblue',
        textAlign:'center',
        fontSize:15,
        textDecorationLine: 'underline',
    },
    ewblogo:{
        marginTop: Dimensions.get('window').height / 15,
        marginBottom: Dimensions.get('window').height / -9,
        alignSelf: 'flex-end',
        width: Dimensions.get('window').width / 5,
        height: Dimensions.get('window').height / 17.5,
    },
    w4twlogo: {
        marginBottom: Dimensions.get('window').height/30,
        alignSelf: 'center',
        width: Dimensions.get('window').width / 3,
        height: Dimensions.get('window').height / 6,
        flex: 1,
    },
});
