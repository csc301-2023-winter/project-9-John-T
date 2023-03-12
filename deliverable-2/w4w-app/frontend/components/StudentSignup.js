import { Dimensions, StyleSheet, Text, View, Pressable, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';


export default function StudentSignup({ navigation }) {
  return (
    <View style={styles.background}>
      <Icon name='user-graduate' color='#03DAC5' size={50} style={styles.icon}/>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor={'#03DAC5'}
        label = "User name"
      />
      <TextInput
        style={styles.input}
        placeholder="First name"
        placeholderTextColor={'#03DAC5'}
        label = "User name"
      />
      <TextInput
        style={styles.input}
        placeholder="Last name"
        placeholderTextColor={'#03DAC5'}
        label = "User name"
      />
      <TextInput
        style={styles.input}
        placeholder="School"
        placeholderTextColor={'#03DAC5'}
        label = "User name"
      />
      <TextInput
        style={styles.input}
        placeholder="Homeroom"
        placeholderTextColor={'#03DAC5'}
        label = "User name"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor={'#03DAC5'}
        label = "User name"
      />
      <View style = {styles.inputview}>
        <Pressable style={styles.button} onPress={() => navigation.navigate("Student welcome")}>
          <Text style={styles.textButton}>
            Get Started
          </Text>
          <View style={styles.arrow} >
            <Icon name='angle-right' color='#03DAC5' size={15}/>
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
  text:{
    color: '#03DAC5',
    marginTop: Dimensions.get('window').height/6,
    textAlign:'center',
    fontSize:30,
    fontWeight: 'bold'
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
  arrow:{
    flex: 1,
    marginTop: 2
  },
  icon:{
    marginTop: Dimensions.get('window').height / 10,
    flex: 1
  },
  inputview:{
    flex:2
  },
  input:{
    color: 'white',
    backgroundColor:'#2C2C2C',
    width: 4 * Dimensions.get('window').width/7,
    borderRadius: 15,
    height:  Dimensions.get('window').height/18 ,
    paddingLeft: 20,
    borderColor: '#393939',
    borderWidth: 2,
    marginTop: Dimensions.get('window').height/24
  }
});
