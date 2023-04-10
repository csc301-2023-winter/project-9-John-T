import { Dimensions, StyleSheet, Text, Image, Pressable} from 'react-native';
import { useEffect } from 'react'

// Introduction Page showing project partners
export default function Intro({ navigation }) {
  useEffect(() => {setTimeout(() => navigation.navigate("Home page"), 3000);}, []);
  return (
    <Pressable onPress={() => {navigation.navigate("Home page");}} style={styles.background}>
      <Text  numberOfLines={1} adjustsFontSizeToFit style= {styles.text}>Presented by:</Text>
      <Image source={require('../assets/WFTW.png')} style={styles.w4twlogo}/>
      <Image source={require('../assets/EWB.png')} style={styles.ewblogo}/>
    </Pressable>
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
    marginTop: Dimensions.get('window').height/6,
    textAlign:'center',
    fontSize:30,
    fontWeight: 'bold'
  },
  w4twlogo: {
    height: Dimensions.get('window').height/4,
    width: Dimensions.get('window').height/2,
    marginTop: Dimensions.get('window').height/16,
    marginRight: Dimensions.get('window').width/10
  },
  ewblogo: {
    height: Dimensions.get('window').height/4,
    width: Dimensions.get('window').height/2,
    marginTop: Dimensions.get('window').height/16,
    right: 20
  },

});
