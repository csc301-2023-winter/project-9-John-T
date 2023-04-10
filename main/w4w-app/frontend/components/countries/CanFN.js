import React from "react";
import { Dimensions, StyleSheet, View, Text, Image, Pressable, SafeAreaView, Linking } from "react-native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/FontAwesome5';


// Canada First Nations Page
export default function CanFN({ route, navigation }){
    const {moneyval, f1, f2, f3, f4, f5, f6, f7, f8, isNew} = route.params;

    return(
        <SafeAreaView style={styles.background}>
            <Image source={require('../../assets/EWB.png')}  style={styles.ewblogo}/>
            
            {/* Back to Filter Building Instructions Page */}
            <Pressable style = {{marginLeft : - Dimensions.get('window').width/ 1.2}} onPress={async () => {
                navigation.navigate("GameIns")
                }}>
                <Icon name='arrow-left' color='#03DAC5' size={25} />
            </Pressable>

            <Text style={styles.textCaption}>Canada First Nations</Text>
            <Text style={styles.subtext} numberOfLines={9}>
                Languages: English, French, Cree, Inuktitut, Ojibwe, Innu, Dene, Mi’kmaq, Sioux, Atikamekw and others {"\n"}
                Life Expectancy: 72.5 Years {"\n"}
                Median Income (CAD$): $18,962 {"\n"}
                Improved Drinking Water: 23% of population
            </Text>
            <Pressable onPress={() => Linking.openURL('https://www.sac-isc.gc.ca/eng/1614387410146/1614387435325')}>
                <Text style={styles.subtext}> 
                    <Text numberOfLines={2} style={styles.url}>Communities with long-term boil water advisories</Text>
                    : {">"}30
                </Text>
            </Pressable>
            <Text style={styles.subtext}>
                Population: {"> "}1 million
            </Text>

            <Text style={styles.textCaption2}>Instructions</Text>
            <Text style={styles.subtext} numberOfLines={36}>
                1. Loosely put a piece of cheese cloth at the bottom of the filter, then put a piece of cotton plug above that. {"\n"}
                2. Place two layers of fine sand over the cotton plug, followed by 2 layers of coarse sand, followed by one layer each of fine gravel and coarse gravel. {"\n"}
                3. Now, test your water filter to find out how well your filter works and whether or not the filtered water is drinkable.
            </Text>
            <Text style={styles.subtext2}>
                Note: You receive less funding than the rest of Canada and costs for materials are 5 times higher than the rest of Canada due to geographical and political issues. {"\n"} {"\n"}
            </Text>

            {/* Continue to Filter Building Page */}
            <Pressable style={styles.playButton} numberOfLines={1} onPress={() => navigation.navigate("Game", {moneyVal: moneyval, country: 'canadaFN', f1: f1, f2: f2, f3: f3, f4: f4, f5:f5, f6:f6, f7:f7, f8:f8, isNew:isNew})}>
                <Text style={styles.textButton}>
                    Play Simulation
                </Text>
                <View style={styles.arrow} >
                <FontAwesome5 name='angle-right' color='#03DAC5' size={15}/>
                </View>
            </Pressable>

            <Image source={require('../../assets/WFTW.png')} style={styles.w4twlogo}/>
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
        marginTop: Dimensions.get('window').height / 76,
        height: Dimensions.get('window').height/12, 
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
    textCaption2: {
        color: '#03DAC5',
        marginTop: Dimensions.get('window').height / 65,
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
    subtext: {
        color: '#03DAC5',
        marginTop: Dimensions.get('window').height /350,
        textAlign: 'left',
        fontSize: 16,
        flexDirection: 'column',
        width: Dimensions.get('window').width / 1.2,
    },
    url: {
        fontSize: 16, 
        textDecorationLine: 'underline', 
        color: 'lightblue',
        flexDirection: 'column',
        width: Dimensions.get('window').width / 1.2
    },
    playButton: {
        width:  Dimensions.get('window').width / 2,
        flexDirection: 'row',
        padding: 12,
        borderColor: '#03DAC5',
        borderRadius: 999,
        borderWidth: 2,
        backgroundColor: '#2C2C2C',
        alignItems: 'center',
        marginBottom: Dimensions.get('window').height/15,
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
    subtext2: {
        color: '#03DAC5',
        marginTop: Dimensions.get('window').height / 64,
        textAlign: 'left',
        fontSize: 13,
        flexDirection: 'column',
        width: Dimensions.get('window').width / 1.2,
    },
    ewblogo:{
        bottom: Dimensions.get('window').height / -15,
        width: Dimensions.get('window').width / 5,
    	height: Dimensions.get('window').height / 17.5,
        alignSelf: 'flex-end',
        right: "5%",
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