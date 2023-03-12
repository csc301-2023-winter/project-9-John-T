import { StyleSheet, Text, View, Button, TextInput, Dimensions, FlatList, Pressable } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function SubmitResp ({ navigation }) {
    return (
        <View style={styles.background}>
            <Text style={styles.textCaption}> Submit response </Text>
            <TextInput
                style={styles.input}
                placeholder="Teacher Email"
                placeholderTextColor={'#03DAC5'}
                label = "User name"
            />
            <View style={styles.skipContainer}>
                <Pressable style={styles.button2} numberOfLines={1} onPress={() => navigation.navigate("Student welcome")}>
                    <Text style={styles.textButton}>
                        Send
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
    textCaption: {
        color: '#03DAC5',
        marginTop: Dimensions.get('window').height / 8,
        height: Dimensions.get('window').height/7,
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
    input:{
        color: 'white',
        backgroundColor:'#2C2C2C',
        width: 4 * Dimensions.get('window').width/5,
        borderRadius: 15,
        height:  Dimensions.get('window').height/18 ,
        paddingLeft: 20,
        borderColor: '#393939',
        borderWidth: 2,
        marginTop: Dimensions.get('window').height/24
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
      },
});