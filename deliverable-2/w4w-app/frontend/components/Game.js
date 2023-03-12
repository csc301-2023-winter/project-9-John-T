import { Dimensions, StyleSheet, Text, View, Pressable, TextInput, ScrollView, Image, ImageBackground} from 'react-native';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function Game({ navigation }) {
  const coalImg = require('../assets/coal.jpeg');
  const fineSandImg = require('../assets/fineSand.jpeg');
  const coarseSandImg = require('../assets/coarseSand.jpeg');
  const fineGravelImg = require('../assets/fineGravel.jpeg');
  const coarseGravelImg = require('../assets/coarseGravel.jpeg');
  const cottonImg = require('../assets/cotton.jpeg');
  const cheeseClothImg = require('../assets/cheeseCloth.jpeg');

  const [currentMaterialImg, setCurrentMaterialImg] = useState('none');
  const [currentMaterial, setCurrentMaterial] = useState('none');

  const [coal, setCoal] = useState(false);
  const [fineSand, setFineSand] = useState(false);
  const [coarseSand, setCoarseSand] = useState(false);
  const [fineGravel, setFineGravel] = useState(false);
  const [coarseGravel, setCoarseGravel] = useState(false);
  const [cotton, setCotton] = useState(false);
  const [cheeseCloth, setCheeseCloth] = useState(false);

  const [filter1, setfilter1] = useState('none');
  const [filter2, setfilter2] = useState('none');
  const [filter3, setfilter3] = useState('none');
  const [filter4, setfilter4] = useState('none');
  const [filter5, setfilter5] = useState('none');
  const [filter6, setfilter6] = useState('none');
  const [filter7, setfilter7] = useState('none');

  const [filtermat1, setfiltermat1] = useState('none');
  const [filtermat2, setfiltermat2] = useState('none');
  const [filtermat3, setfiltermat3] = useState('none');
  const [filtermat4, setfiltermat4] = useState('none');
  const [filtermat5, setfiltermat5] = useState('none');
  const [filtermat6, setfiltermat6] = useState('none');
  const [filtermat7, setfiltermat7] = useState('none');
  const getLayer = () => {
  }
  return (
    <View style={styles.background}>
        <View style={styles.filter}>
            <Pressable style = {styles.upperSpace} onPress={() => {setfilter1(currentMaterialImg); setfiltermat1(currentMaterial);}}>
              <Image source={filter1} style={styles.image}/>
            </Pressable>
            <Pressable style = {styles.upperSpace}  onPress={() => {setfilter2(currentMaterialImg); setfiltermat2(currentMaterial);}}>
              <Image source={filter2} style={styles.image}/>
            </Pressable>
            <Pressable style = {styles.upperSpace}  onPress={() => {setfilter3(currentMaterialImg); setfiltermat3(currentMaterial);}}>
              <Image source={filter3} style={styles.image}/>
            </Pressable>
            <Pressable style = {styles.upperSpace}  onPress={() => {setfilter4(currentMaterialImg); setfiltermat4(currentMaterial);}}>
              <Image source={filter4} style={styles.image}/>
            </Pressable>
            <Pressable style = {styles.upperSpace2}  onPress={() => {setfilter5(currentMaterialImg); setfiltermat5(currentMaterial);}}>
              <Image source={filter5} style={[styles.image,{borderBottomLeftRadius: 50, borderBottomRightRadius: 50}]}/>
            </Pressable>
        </View>
        <View style={styles.filter2}>
            <Pressable style = {styles.belowSpace} onPress={() => {setfilter6(currentMaterialImg); setfiltermat6(currentMaterial);}}>
              <Image source={filter6} style={styles.image}/>
            </Pressable>
            <Pressable style = {styles.belowSpace2} onPress={() => {setfilter7(currentMaterialImg); setfiltermat7(currentMaterial);}}>
              <Image source={filter7} style={[styles.image, {borderBottomLeftRadius: 30, borderBottomRightRadius: 30}]}/>
            </Pressable>
        </View>
        <View style={styles.scroll}>
          <ScrollView horizontal= {true} showsHorizontalScrollIndicator={false}>
            <Pressable style={[styles.button, {borderColor: coal? '#03DAC5': 'transparent'}]} numberOfLines={1} onPress={() => {
              setCurrentMaterialImg(coalImg);
              setCurrentMaterial('coal');
              setCoal(true);
              setFineSand(false);
              setCoarseSand(false);
              setFineGravel(false);
              setCoarseGravel(false);
              setCotton(false);
              setCheeseCloth(false);
            }}>
              <Text style={styles.textButton}>
                Activated Charcoal
              </Text>
            </Pressable>
            <Pressable style={[styles.button, {borderColor: fineSand? '#03DAC5': 'transparent'}]} numberOfLines={1} onPress={() => {
              setCoal(false);
              setFineSand(true);
              setCoarseSand(false);
              setFineGravel(false);
              setCoarseGravel(false);
              setCurrentMaterialImg(fineSandImg);
              setCurrentMaterial('fineSand');
              setCotton(false);
              setCheeseCloth(false);
            }}>
              <Text style={styles.textButton}>
                Fine Sand
              </Text>
            </Pressable>
            <Pressable style={[styles.button, {borderColor: coarseSand? '#03DAC5': 'transparent'}]} numberOfLines={1} onPress={() => {
              setCoal(false);
              setFineSand(false);
              setCoarseSand(true);
              setFineGravel(false);
              setCoarseGravel(false);
              setCurrentMaterialImg(coarseSandImg);
              setCurrentMaterial('coarseSand');
              setCotton(false);
              setCheeseCloth(false);
            }}>
              <Text style={styles.textButton}>
                Coarse Sand
              </Text>
            </Pressable>
            <Pressable style={[styles.button, {borderColor: fineGravel? '#03DAC5': 'transparent'}]} numberOfLines={1} onPress={() => {
              setCoal(false);
              setFineSand(false);
              setCoarseSand(false);
              setFineGravel(true);
              setCoarseGravel(false);
              setCurrentMaterialImg(fineGravelImg);
              setCurrentMaterial('fineGravel');
              setCotton(false);
              setCheeseCloth(false);
            }}>
              <Text style={styles.textButton}>
                Fine Gravel
              </Text>
            </Pressable>
            <Pressable style={[styles.button, {borderColor: coarseGravel? '#03DAC5': 'transparent'}]} numberOfLines={1} onPress={() => {
              setCoal(false);
              setFineSand(false);
              setCoarseSand(false);
              setFineGravel(false);
              setCoarseGravel(true);
              setCurrentMaterialImg(coarseGravelImg);
              setCurrentMaterial('coarseGravel');
              setCotton(false);
              setCheeseCloth(false);
            }}>
              <Text style={styles.textButton}>
                Coarse Gravel
              </Text>
            </Pressable>
            <Pressable style={[styles.button, {borderColor: cotton? '#03DAC5': 'transparent'}]} numberOfLines={1} onPress={() => {
              setCoal(false);
              setFineSand(false);
              setCoarseSand(false);
              setFineGravel(false);
              setCoarseGravel(false);
              setCurrentMaterialImg(cottonImg);
              setCurrentMaterial('cotton');
              setCotton(true);
              setCheeseCloth(false);
            }}>
              <Text style={styles.textButton}>
                Cotton
              </Text>
            </Pressable>
            <Pressable style={[styles.button, {borderColor: cheeseCloth? '#03DAC5': 'transparent'}]} numberOfLines={1} onPress={() => {
              setCoal(false);
              setFineSand(false);
              setCoarseSand(false);
              setFineGravel(false);
              setCoarseGravel(false);
              setCurrentMaterialImg(cheeseClothImg);
              setCurrentMaterial('cheeseCloth');
              setCotton(false);
              setCheeseCloth(true);
            }}>
              <Text style={styles.textButton}>
                Cheese Cloth
              </Text>
            </Pressable>
          </ScrollView>
        </View>
        <View style={styles.buttonLayer}>
          <Pressable style={styles.button2} onPress={() => navigation.navigate("Post questionnaire 1")}>
            <Text style={styles.textButton}>
              Next
            </Text>
            <View style={styles.arrow}>
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
    flexDirection: 'column',
    paddingTop: Dimensions.get('window').height*1/14,
  },
  upperSpace:{
    backgroundColor: 'transparent',
    borderBottomWidth: 2,
    borderBottomColor: '#03DAC5',
    justifyContent: 'center',
    alignItems: 'center',
    flex:1
  },
  upperSpace2:{
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    flex:1
  },
  filter:{
    backgroundColor: 'transparent',
    height: Dimensions.get('window').height*4/7,
    width: Dimensions.get('window').width*2/3,
    flexDirection: 'column',
    borderColor: '#03DAC5',
    borderWidth: 2,
    borderTopWidth: 0,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    flex: 5
  },
  filter2:{
    backgroundColor: 'transparent',
    height: Dimensions.get('window').height*1/10,
    width: Dimensions.get('window').width*1/3,
    flexDirection: 'column',
    borderColor: '#03DAC5',
    borderWidth: 2,
    borderTopWidth: 0,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    flex: 1
  },
  belowSpace: {
    backgroundColor: 'transparent',
    borderBottomWidth: 2,
    borderBottomColor: '#03DAC5',
    justifyContent: 'center',
    alignItems: 'center',
    flex:1
  },
  belowSpace2: {
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    flex:1
  },
  scroll:{
    backgroundColor: 'transparent',
    height: Dimensions.get('window').height*1/7,
    width: Dimensions.get('window').width,
    marginTop: Dimensions.get('window').height*1/14,
    marginBottom: Dimensions.get('window').height*1/14,
    paddingLeft: 10,
    paddingRight: 10,
    flex: 1
  },
  textButton:{
    color: '#03DAC5',
    textAlign:'center',
    fontSize:14,
    fontWeight: 'bold',
    flex: 5
  },
  button2: {
    width:  Dimensions.get('window').width / 3,
    flexDirection: 'row',
    padding: 12,
    borderColor: '#03DAC5',
    borderRadius: 999,
    borderWidth: 2,
    backgroundColor: '#2C2C2C'
  },
  buttonLayer:{
    flex: 1,
    marginTop: -Dimensions.get('window').height*1/20,
  },
  button: {
    height: '75%',
    paddingTop: 15,
    paddingLeft: 20,
    paddingRight: 20,
    marginLeft: 30,
    borderColor: 'transparent',
    borderRadius: 999,
    borderWidth: 2,
    backgroundColor: '#2C2C2C'
  },
  image:{
    height: '99%',
    width: '99%'
  },
  arrow:{
    flex: 1,
    marginTop: 2
  }
});
