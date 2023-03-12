import { Dimensions, StyleSheet, View,} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


import Intro from './components/Intro';
import SignIn from './components/SignIn';
import PreQ from './components/PreQ';
import TeacherSignup from './components/TeacherSignup';
import StudentSignup from './components/StudentSignup';
import Login from './components/Login';
import StudentWelcome from './components/StudentWelcome';
import TeacherWelcome from './components/TeacherWelcome';
import PreQ2 from './components/PreQ2';
import PreQ3 from './components/PreQ3';
import StudentHR from './components/StudentHR';
import TeacherHR from './components/TeacherHR';
import Game from './components/Game';
import PostQ1 from './components/PostQ1';
import PostQ2 from './components/PostQ2';
import SubmitResp from './components/SubmitResp';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    
       <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Intro" component={Intro}/>
          <Stack.Screen name="Sign in" component={SignIn} />
          <Stack.Screen name="Pre questionnaire 1" component={PreQ}/>
          <Stack.Screen name="Pre questionnaire 2" component={PreQ2}/>
          <Stack.Screen name="Pre questionnaire 3" component={PreQ3}/>
          <Stack.Screen name="Game" component={Game}/>
          <Stack.Screen name="Teacher signup" component={TeacherSignup} />
          <Stack.Screen name="Student signup" component={StudentSignup} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Student welcome" component={StudentWelcome} />
          <Stack.Screen name="Teacher welcome" component={TeacherWelcome} />
          <Stack.Screen name="Student hr" component={StudentHR} />
          <Stack.Screen name="Teacher hr" component={TeacherHR} />
          <Stack.Screen name="Post questionnaire 1" component={PostQ1}/>
          <Stack.Screen name="Post questionnaire 2" component={PostQ2}/>
          <Stack.Screen name="Submit response" component={SubmitResp}/>     
        </Stack.Navigator>
      </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#1E1E1E',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  }
});
