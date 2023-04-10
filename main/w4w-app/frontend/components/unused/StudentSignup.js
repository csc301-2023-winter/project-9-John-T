import { Dimensions, StyleSheet, Text, View, Image, Pressable, TextInput, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useState } from 'react';
import StudentSignupAPI from '../../apis/StudentSignupAPI';


// Student Signup Page (Not Used)
export default function StudentSignup({ navigation }) {
  const [email, setEmail] = useState('');
  const [password1, setPassword1] = useState('');
  const [firstName, setFirstName] = useState('');
  const [password2, setPassword2] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [grade, setGrade] = useState('');
  const [school, setSchool] = useState('');
  const [error, setError] = useState('');
  return (
    <View style={styles.background}>
      <Image source={require('../../assets/EWB.png')}  style={styles.ewblogo}/>
      {/* <View style={styles.backinputview}> */}
      <Pressable style = {{marginLeft : - Dimensions.get('window').width/ 1.2, marginTop: Dimensions.get('window').height/50}} onPress={async () => {
        navigation.navigate("Sign in")
      }}>
        <Icon name='arrow-left' color='#03DAC5' size={25} />
      </Pressable>
  {/* </View> */}
      <Icon name='user-graduate' color='#03DAC5' size={50} style={styles.icon}/>
      <View style={styles.errview}>
        <Text style={styles.error}>
        {error}
        </Text>
        </View>
      <TextInput
        style={styles.input}
        placeholder="Email [Required]"
        placeholderTextColor={'#03DAC5'}
        label = "User name"
        onChangeText={e => setEmail(e)}
      />
      <TextInput
        style={styles.input}
        placeholder="First name [Required]"
        placeholderTextColor={'#03DAC5'}
        label = "User name"
        onChangeText={e => setFirstName(e)}
      />
      <TextInput
        style={styles.input}
        placeholder="Last name [Required]"
        placeholderTextColor={'#03DAC5'}
        label = "User name"
        onChangeText={e => setLastName(e)}
      />
      <TextInput
        style={styles.input}
        placeholder="School"
        placeholderTextColor={'#03DAC5'}
        label = "User name"
        onChangeText={e => setSchool(e)}
      />
      <TextInput
        style={styles.input}
        placeholder="City"
        placeholderTextColor={'#03DAC5'}
        label = "User name"
        onChangeText={e => setCity(e)}
      />
      <TextInput
        style={styles.input}
        placeholder="Country"
        placeholderTextColor={'#03DAC5'}
        label = "User name"
        onChangeText={e => setCountry(e)}
      />
      <TextInput
        style={styles.input}
        placeholder="Age"
        placeholderTextColor={'#03DAC5'}
        keyboardType='numeric'
        label = "User name"
        onChangeText={e => setAge(e)}
      />
      <TextInput
        style={styles.input}
        placeholder="What Grade are you in? [Eg. 12]"
        placeholderTextColor={'#03DAC5'}
        label = "User name"
        keyboardType='numeric'
        onChangeText={e => setGrade(e)}
      />
      <TextInput secureTextEntry={true}
        style={styles.input}
        placeholder="Password [Required]"
        placeholderTextColor={'#03DAC5'}
        label = "User name"
        onChangeText={e => setPassword1(e)}
      />
       <TextInput secureTextEntry={true}
        style={styles.input}
        placeholder="Confirm Password [Required]"
        placeholderTextColor={'#03DAC5'}
        label = "User name"
        onChangeText={e => setPassword2(e)}
      />
      <View style = {styles.inputview}>
      <Pressable style={styles.button2} onPress={ async () => {
            var delta = await StudentSignupAPI(email, password1, password2, firstName, lastName, age, city, country, grade, school);
            if (delta === 0) {
              navigation.navigate("Sign in")
            } else {
              setError("Please fill the required fields properly.");
            }
          }}>
          <Text style={styles.textButton}>
            Register
          </Text>
          <View style={styles.arrow} >
            <Icon name='angle-right' color='#03DAC5' size={15}/>
          </View>
        </Pressable>
      </View>
      {/* <Image source={require('../assets/WFTW.png')}  style={{left: 0, top: 0, width: 110, height: 115, alignSelf: 'center'}}/>
        <Image source={require('../assets/EWB.png')}  style={{right: -150, bottom: 750, width: 100, height:50, alignSelf: 'center'}}/> */}
    <Image source={require('../../assets/WFTW.png')} style={styles.w4twlogo}/>
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
    marginTop: Dimensions.get('window').height / 20,
    borderColor: '#03DAC5',
    borderRadius: 999,
    borderWidth: 2,
    backgroundColor: '#2C2C2C',
    alignSelf: 'flex-start',
  },
  button2: {
    width:  Dimensions.get('window').width / 3,
    flexDirection: 'row',
    padding: 15,
    marginTop: Dimensions.get('window').height / 50,
    borderColor: '#03DAC5',
    borderRadius: 999,
    borderWidth: 2,
    backgroundColor: '#2C2C2C',
  },
  arrow:{
    flex: 1,
    marginTop: 2
  },
  icon:{
    marginTop: Dimensions.get('window').height/80
  },
  inputview:{
    flex:2
  },
  input:{
    color: 'white',
    backgroundColor:'#2C2C2C',
    width: 4 * Dimensions.get('window').width/7,
    borderRadius: 15,
    height:  Dimensions.get('window').height/23 ,
    paddingLeft: 20,
    borderColor: '#393939',
    borderWidth: 2,
    marginTop: Dimensions.get('window').height/80
  },
  backinputview:{
    backgroundColor: '#1E1E1E',
    padding:0,
    top: 0,
    right: 120,
  },
  error:{
    color: '#ff000f',
    textAlign:'center',
    fontSize:15,
    padding:20,
    fontWeight: 'bold'
  },
  errview:{
    backgroundColor: '#1E1E1E',
    height: Dimensions.get('window').height/70,
    width: Dimensions.get('window').width,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: Dimensions.get('window').height/100,
  },
  ewblogo:{
    // right: Dimensions.get('window').width / -1.55,
    // bottom: Dimensions.get('window').height / -20,
    marginTop: Dimensions.get('window').height / 20,
    marginBottom: Dimensions.get('window').height / -10,
    marginRight: Dimensions.get('window').width / 15,
    alignSelf: 'flex-end',
    width: Dimensions.get('window').width / 5,
    height: Dimensions.get('window').height / 17.5,
  },
  w4twlogo: {
    // marginTop: Dimensions.get('window').height / 25,
    marginBottom: Dimensions.get('window').height/20,
    alignSelf: 'center',
    width: Dimensions.get('window').width / 3,
    height: Dimensions.get('window').height / 5,
    flex: 1,
  },
});
