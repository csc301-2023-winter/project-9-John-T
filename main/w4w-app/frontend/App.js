import { Dimensions, StyleSheet, View,} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


import Intro from './components/Intro';
import HomePage from './components/HomePage';
import SignIn from './components/unused/SignIn';
import AlreadyLogged from './components/AlreadyLogged';
import PreQ from './components/pre_qns/PreQ';
import TeacherSignup from './components/unused/TeacherSignup';
import StudentSignup from './components/unused/StudentSignup';
import Login from './components/unused/Login';
import StudentLogin from './components/StudentLogin';
import StudentWelcome from './components/unused/StudentWelcome';
import TeacherWelcome from './components/unused/TeacherWelcome';
import PreQ2 from './components/pre_qns/PreQ2';
import PreQ3 from './components/pre_qns/PreQ3';
import PreQ4 from './components/pre_qns/PreQ4';
import PreQ5 from './components/pre_qns/PreQ5';
import PreQ6 from './components/pre_qns/PreQ6';
import PreQ7 from './components/pre_qns/PreQ7';
import PreQ8 from './components/pre_qns/PreQ8';
import Game from './components/filter/Game';
import PostQ1 from './components/post_qns/PostQ';
import PostQ1NonLogin from './components/post_qns/PostQNonLogin';
import GameIns from './components/filter/GameInstructions';
import GameTest from './components/unused/GameTest';
import ThankYou from './components/ThankYou';
import Canada from './components/countries/Canada';
import Kuwait from './components/countries/Kuwait';
import CanFN from './components/countries/CanFN';
import SAfrica from './components/countries/SAfrica';
import Ghana from './components/countries/Ghana';
import Kenya from './components/countries/Kenya';
import Malawi from './components/countries/Malawi';
import TYNL from './components/TYNL';
import Result100 from './components/filter/Result100';
import Result90 from './components/filter/Result90';
import Result80less from './components/filter/Result80Less';
import W4WInfoPage from './components/W4TWInfo';
import WellDone from './components/WellDone';
import FilterIntro from './components/filter/FilterIntro';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    
       <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Intro" component={Intro}/>
          <Stack.Screen name="Home page" component={HomePage}/>
          <Stack.Screen name="W4W Info" component={W4WInfoPage}/>
          <Stack.Screen name="Sign in" component={SignIn} />
          <Stack.Screen name="Already logged" component={AlreadyLogged}/>
          <Stack.Screen name="Pre questionnaire 1" component={PreQ} />
          <Stack.Screen name="Pre questionnaire 2" component={PreQ2} />
          <Stack.Screen name="Pre questionnaire 3" component={PreQ3} />
          <Stack.Screen name="Pre questionnaire 4" component={PreQ4} />
          <Stack.Screen name="Pre questionnaire 5" component={PreQ5} />
          <Stack.Screen name="Pre questionnaire 6" component={PreQ6} />
          <Stack.Screen name="Pre questionnaire 7" component={PreQ7} />
          <Stack.Screen name="Pre questionnaire 8" component={PreQ8} />
          <Stack.Screen name="Game" component={Game}/>
          <Stack.Screen name="GameIns" component={GameIns}/>
          <Stack.Screen name="GameTest" component={GameTest}/>
          <Stack.Screen name="Teacher signup" component={TeacherSignup} />
          <Stack.Screen name="Student signup" component={StudentSignup} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Student login" component={StudentLogin} />
          <Stack.Screen name="Student welcome" component={StudentWelcome} />
          <Stack.Screen name="Teacher welcome" component={TeacherWelcome} />
          <Stack.Screen name="Post questionnaire 1" component={PostQ1}/>
          <Stack.Screen name="Post questionnaire Non Login" component={PostQ1NonLogin}/>
          <Stack.Screen name="Thank you" component={ThankYou}/>
          <Stack.Screen name="Tynl" component={TYNL}/>
          <Stack.Screen name="Canada" component={Canada}/>
          <Stack.Screen name="Kuwait" component={Kuwait}/>
          <Stack.Screen name="CanFN" component={CanFN}/>
          <Stack.Screen name="SAfrica" component={SAfrica}/>
          <Stack.Screen name="Ghana" component={Ghana}/>
          <Stack.Screen name="Kenya" component={Kenya}/>
          <Stack.Screen name="Malawi" component={Malawi}/>
          <Stack.Screen name="result100" component={Result100}/>
          <Stack.Screen name="result90" component={Result90}/>
          <Stack.Screen name="result80less" component={Result80less}/>
          <Stack.Screen name="welldone" component={WellDone}/>
          <Stack.Screen name="filterintro" component={FilterIntro}/>
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
