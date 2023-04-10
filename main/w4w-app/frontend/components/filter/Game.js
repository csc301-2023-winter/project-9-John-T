import { Dimensions, StyleSheet, Text, View, Pressable, ScrollView, Image, Modal} from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useEffect } from 'react'


// Filter Building Page
export default function Game({ route, navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [modalVisible3, setModalVisible3] = useState(false);
  const [modalVisible4, setModalVisible4] = useState(false);
  const [modalVisible5, setModalVisible5] = useState(false);
  const { moneyVal, country , f1, f2, f3, f4, f5, f6, f7, f8, isNew} = route.params;

  // Images of the filter materials
  const fineSandImg = require('../../assets/fineSand.jpeg');
  const coarseSandImg = require('../../assets/coarseSand.jpeg');
  const fineGravelImg = require('../../assets/fineGravel.jpeg');
  const coarseGravelImg = require('../../assets/coarseGravel.jpeg');
  const cottonImg = require('../../assets/cotton.jpeg');
  const cheeseClothImg = require('../../assets/cheeseCloth.jpeg');

 // Money and material cost
 const [money, setMoney] = useState(moneyVal);
 const cheeseClothVal = (country == 'canadaFN')? 25: 5;
 const cottonVal = (country == 'canadaFN')? 25: 5;
 const coarseGravelVal = (country == 'canadaFN')? 50: 10;
 const fineGravelVal = (country == 'canadaFN')? 50: 10;
 const rubberBandVal = 25;
 const coarseSandVal = (country == 'canadaFN')? 100: 20;
 const fineSandVal = (country == 'canadaFN')? 100: 20;

 // Messages for chance cards
 const messageCanada = 'Well done! You donated $50 to Engineers Without Borders/Water for the World which helped a country in need to access clean water. You still have more than enough money to build a great filter!';
 const messageLose5 = "You are stopped by an army checkpoint which requires a 'tax'. The amount to spend on the filter is reduced by $5";
 const messageLose52 = "A government official 'diverts' funds for your project. Your funds are reduced by $5";
 const messageGain30 = "You receive a grant from Water for the World/Engineers without Borders - you have an extra $30 to spend on your filter";


 // Pointers to the selected material and its corresponding image
 const [currentMaterialImg, setCurrentMaterialImg] = useState(null);
 const [currentMaterial, setCurrentMaterial] = useState('none');
 const [currentMaterialCost, setCurrentMaterialCost] = useState(0);

 const [fineSand, setFineSand] = useState(false);
 const [coarseSand, setCoarseSand] = useState(false);
 const [fineGravel, setFineGravel] = useState(false);
 const [coarseGravel, setCoarseGravel] = useState(false);
 const [cotton, setCotton] = useState(false);
 const [cheeseCloth, setCheeseCloth] = useState(false);

 // Images for the filter layers
 const [filter1, setfilter1] = useState(null);
 const [buttonFilter, setbuttonFilter] = useState(null);
 const [filter3, setfilter3] = useState(null);
 const [filter4, setfilter4] = useState(null);
 const [filter5, setfilter5] = useState(null);
 const [filter6, setfilter6] = useState(null);
 const [filter7, setfilter7] = useState(null);
 const [filter8, setfilter8] = useState(null);

 // Materials stored inside the filter layers
 const [filtermat1, setfiltermat1] = useState('none');
 const [filtermat2, setfiltermat2] = useState('none');
 const [filtermat3, setfiltermat3] = useState('none');
 const [filtermat4, setfiltermat4] = useState('none');
 const [filtermat5, setfiltermat5] = useState('none');
 const [filtermat6, setfiltermat6] = useState('none');
 const [filtermat7, setfiltermat7] = useState('none');
 const [filtermat8, setfiltermat8] = useState('none');

 useEffect(()=>{
   setfiltermat1(f1);
   setfiltermat2(f2);
   setfiltermat3(f3);
   setfiltermat4(f4);
   setfiltermat5(f5);
   setfiltermat6(f6);
   setfiltermat7(f7);
   setfiltermat8(f8);
 
   // Set filter 1 image
   if(f1 == 'cheeseCloth'){
     setfilter1(cheeseClothImg);
   }
   else if(f1 == 'cotton'){
     setfilter1(cottonImg);
   }
   else if(f1 == 'coarseGravel'){
     setfilter1(coarseGravelImg);
   }
   else if(f1 == 'fineGravel'){
     setfilter1(fineGravelImg);
   }
   else if(f1 == 'coarseSand'){
     setfilter1(coarseSandImg);
   }
   else if(f1 == 'fineSand'){
     setfilter1(fineSandImg);
   }
 
   // Set filter 2 image
   if(f2 == 'cheeseCloth'){
     setbuttonFilter(cheeseClothImg);
   }
   else if(f2 == 'cotton'){
     setbuttonFilter(cottonImg);
   }
   else if(f2 == 'coarseGravel'){
     setbuttonFilter(coarseGravelImg);
   }
   else if(f2 == 'fineGravel'){
     setbuttonFilter(fineGravelImg);
   }
   else if(f2 == 'coarseSand'){
     setbuttonFilter(coarseSandImg);
   }
   else if(f2 == 'fineSand'){
     setbuttonFilter(fineSandImg);
   }
 
   // Set filter 3 image
   if(f3 == 'cheeseCloth'){
     setfilter3(cheeseClothImg);
   }
   else if(f3 == 'cotton'){
     setfilter3(cottonImg);
   }
   else if(f3 == 'coarseGravel'){
     setfilter3(coarseGravelImg);
   }
   else if(f3 == 'fineGravel'){
     setfilter3(fineGravelImg);
   }
   else if(f3 == 'coarseSand'){
     setfilter3(coarseSandImg);
   }
   else if(f3 == 'fineSand'){
     setfilter3(fineSandImg);
   }
 
   // Set filter 4 image
   if(f4 == 'cheeseCloth'){
     setfilter4(cheeseClothImg);
   }
   else if(f4 == 'cotton'){
     setfilter4(cottonImg);
   }
   else if(f4 == 'coarseGravel'){
     setfilter4(coarseGravelImg);
   }
   else if(f4 == 'fineGravel'){
     setfilter4(fineGravelImg);
   }
   else if(f4 == 'coarseSand'){
     setfilter4(coarseSandImg);
   }
   else if(f4 == 'fineSand'){
     setfilter4(fineSandImg);
   }
 
   // Set filter 5 image
   if(f5 == 'cheeseCloth'){
     setfilter5(cheeseClothImg);
   }
   else if(f5 == 'cotton'){
     setfilter5(cottonImg);
   }
   else if(f5 == 'coarseGravel'){
     setfilter5(coarseGravelImg);
   }
   else if(f5 == 'fineGravel'){
     setfilter5(fineGravelImg);
   }
   else if(f5 == 'coarseSand'){
     setfilter5(coarseSandImg);
   }
   else if(f5 == 'fineSand'){
     setfilter5(fineSandImg);
   }
 
   // Set filter 6 image
   if(f6 == 'cheeseCloth'){
     setfilter6(cheeseClothImg);
   }
   else if(f6 == 'cotton'){
     setfilter6(cottonImg);
   }
   else if(f6 == 'coarseGravel'){
     setfilter6(coarseGravelImg);
   }
   else if(f6 == 'fineGravel'){
     setfilter6(fineGravelImg);
   }
   else if(f6 == 'coarseSand'){
     setfilter6(coarseSandImg);
   }
   else if(f2 == 'fineSand'){
     setfilter6(fineSandImg);
   }
 
   // Set filter 7 image
   if(f7 == 'cheeseCloth'){
     setfilter7(cheeseClothImg);
   }
   else if(f7 == 'cotton'){
     setfilter7(cottonImg);
   }
   else if(f7 == 'coarseGravel'){
     setfilter7(coarseGravelImg);
   }
   else if(f7 == 'fineGravel'){
     setfilter7(fineGravelImg);
   }
   else if(f7 == 'coarseSand'){
     setfilter7(coarseSandImg);
   }
   else if(f7 == 'fineSand'){
     setfilter7(fineSandImg);
   }
 
   // Set filter 8 image
   if(f8 == 'cheeseCloth'){
     setfilter8(cheeseClothImg);
   }
   else if(f8 == 'cotton'){
     setfilter8(cottonImg);
   }
   else if(f8 == 'coarseGravel'){
     setfilter8(coarseGravelImg);
   }
   else if(f8 == 'fineGravel'){
     setfilter8(fineGravelImg);
   }
   else if(f8 == 'coarseSand'){
     setfilter8(coarseSandImg);
   }
   else if(f8 == 'fineSand'){
     setfilter8(fineSandImg);
   }

   // Random generator for Canada to donate money
   if(country=='canada'&& isNew){
     var rand = Math.floor(Math.random() * 2) + 1 ;
     if(rand%2==0){
       setModalVisible2(true);
       setMoney(money-50);
     }
   }
 }, []);

 // Popup for Insufficient Funds
 const lackofFundsModal = () => {
   return (
     <View style={styles.centeredView}>
       <Modal
         animationType="slide"
         transparent={true}
         visible={modalVisible}
         onRequestClose={() => {
           setModalVisible(!modalVisible);
         }}
       >
         <View style={styles.centeredView}>
           <View style={styles.modalView}>
             <Text style={styles.answerView}>Insufficient funds</Text>
             <Pressable
               style={[styles.buttonAns, styles.buttonClose]}
               onPress={() => setModalVisible(!modalVisible)}
             >
               <Text style={styles.textButton}>OK</Text>
             </Pressable>
           </View>
         </View>
       </Modal>
     </View>
   );
 };

 // Popup for chance cards

 // Canada donates $50 or a country from List B receives $35
 const loseFundsModal = () => {
   return (
     <View style={styles.centeredView}>
       <Modal
         animationType="slide"
         transparent={true}
         visible={modalVisible2}
         onRequestClose={() => {
           setModalVisible2(!modalVisible2);
         }}
       >
         <View style={styles.centeredView}>
           <View style={styles.modalView}>
             <Text style={styles.answerView}>{messageCanada}</Text>
             <Pressable
               style={[styles.buttonAns, styles.buttonClose]}
               onPress={() => setModalVisible2(!modalVisible2)}
             >
               <Text style={styles.textButton}>OK</Text>
             </Pressable>
           </View>
         </View>
       </Modal>
     </View>
   );
 };

 // Loses $5 due to army checkpoint tax
 const loseFundsModalMid1 = () => {
   return (
     <View style={styles.centeredView}>
       <Modal
         animationType="slide"
         transparent={true}
         visible={modalVisible3}
         onRequestClose={() => {
           setModalVisible3(!modalVisible3);
         }}
       >
         <View style={styles.centeredView}>
           <View style={styles.modalView}>
               <Text style={styles.answerView}>{messageLose5}</Text>              
             <Pressable
               style={[styles.buttonAns, styles.buttonClose]}
               onPress={() => setModalVisible3(!modalVisible3)}
             >
               <Text style={styles.textButton}>OK</Text>
             </Pressable>
           </View>
         </View>
       </Modal>
     </View>
   );
 };

 // Loses $5 due to government diverting funds
 const loseFundsModalMid2 = () => {
   return (
     <View style={styles.centeredView}>
       <Modal
         animationType="slide"
         transparent={true}
         visible={modalVisible4}
         onRequestClose={() => {
           setModalVisible4(!modalVisible4);
         }}
       >
         <View style={styles.centeredView}>
           <View style={styles.modalView}>
             <Text style={styles.answerView}>{messageLose52}</Text>              
             <Pressable
               style={[styles.buttonAns, styles.buttonClose]}
               onPress={() => setModalVisible4(!modalVisible4)}
             >
               <Text style={styles.textButton}>OK</Text>
             </Pressable>
           </View>
         </View>
       </Modal>
     </View>
   );
 };

 // Receives $30 grant
 const loseFundsModalMid3 = () => {
   return (
     <View style={styles.centeredView}>
       <Modal
         animationType="slide"
         transparent={true}
         visible={modalVisible5}
         onRequestClose={() => {
           setModalVisible5(!modalVisible5);
         }}
       >
         <View style={styles.centeredView}>
           <View style={styles.modalView}>
               <Text style={styles.answerView}>{messageGain30}</Text>
             <Pressable
               style={[styles.buttonAns, styles.buttonClose]}
               onPress={() => setModalVisible5(!modalVisible5)}
             >
               <Text style={styles.textButton}>OK</Text>
             </Pressable>
           </View>
         </View>
       </Modal>
     </View>
   );
 };

 // Reset entire filter and funds to starting state
 const resetGame = () => {
   setFineSand(false);
   setCoarseSand(false);
   setFineGravel(false);
   setCoarseGravel(false);
   setCotton(false);
   setCheeseCloth(false);

   setCurrentMaterialImg(null);
   setCurrentMaterial('none');

   // Remove all images
   setfilter1(null);
   setbuttonFilter(null);
   setfilter3(null);
   setfilter4(null);
   setfilter5(null);
   setfilter6(null);
   setfilter7(null);
   setfilter8(null);

   // Remove all materials inside the filter
   setfiltermat1('none');
   setfiltermat2('none');
   setfiltermat3('none');
   setfiltermat4('none');
   setfiltermat5('none');
   setfiltermat6('none');
   setfiltermat7('none');
   setfiltermat8('none');

   // Reset money
   if(country == 'canada'){
     setMoney(500);
   }
   else if(country=='canadaFN'){
     setMoney(350);
   }
   else if(country=='ghana'){
     setMoney(40);
   }
   else if(country=='kenya'){
     setMoney(30);
   }
   else if(country=='kuwait'){
     setMoney(400);
   }
   else if(country=='malawi'){
     setMoney(50);
   }
   else if(country=='SA'){
     setMoney(65);
   }

   // Random generator for Canada to donate money
   if(country=='canada'){
     var rand = Math.floor(Math.random() * 2) + 1 ;
     if(rand%2==0){
       setModalVisible2(true);
       setMoney(money-50);
     }
   }
 };

 return (
   <View style={styles.background}>
     <View style={styles.backBox}>
       <Pressable onPress={async () => {  
         if(country == 'canada'){
           navigation.navigate("Canada", {f1:filtermat1, f2: filtermat2, f3: filtermat3, f4:filtermat4, f5:filtermat5, f6: filtermat6, f7: filtermat7, f8: filtermat8, moneyval:money, isNew:false});
         }
         else if(country=='canadaFN'){
           navigation.navigate("CanFN", {f1:filtermat1, f2: filtermat2, f3: filtermat3, f4:filtermat4, f5:filtermat5, f6: filtermat6, f7: filtermat7, f8: filtermat8, moneyval:money, isNew:false});
         }
         else if(country=='ghana'){
           navigation.navigate("Ghana", {f1:filtermat1, f2: filtermat2, f3: filtermat3, f4:filtermat4, f5:filtermat5, f6: filtermat6, f7: filtermat7, f8: filtermat8, moneyval:money, isNew:false});
         }
         else if(country=='kenya'){
           navigation.navigate("Kenya", {f1:filtermat1, f2: filtermat2, f3: filtermat3, f4:filtermat4, f5:filtermat5, f6: filtermat6, f7: filtermat7, f8: filtermat8, moneyval:money, isNew:false});
         }
         else if(country=='kuwait'){
           navigation.navigate("Kuwait", {f1:filtermat1, f2: filtermat2, f3: filtermat3, f4:filtermat4, f5:filtermat5, f6: filtermat6, f7: filtermat7, f8: filtermat8, moneyval:money, isNew:false});
         }
         else if(country=='malawi'){
           navigation.navigate("Malawi", {f1:filtermat1, f2: filtermat2, f3: filtermat3, f4:filtermat4, f5:filtermat5, f6: filtermat6, f7: filtermat7, f8: filtermat8, moneyval:money, isNew:false});
         }
         else if(country=='SA'){
           navigation.navigate("SAfrica", {f1:filtermat1, f2: filtermat2, f3: filtermat3, f4:filtermat4, f5:filtermat5, f6: filtermat6, f7: filtermat7, f8: filtermat8, moneyval:money, isNew:false});
         }
         }}>
         <Icon name='arrow-left' color='#03DAC5' size={25} />
       </Pressable>
       <Text style={styles.moneyText}>Money: {money}</Text>
     </View>
     
     {/* Top 6 Layers of Filter */}
     <View style={styles.topFilter}>
           {/* Actions on Filter */}

           {/* Filter Layer 1 */}
           <Pressable style = {styles.upperSpace} onPress={() => {
             // Adding filtermat1
             if(money >= currentMaterialCost && filtermat1 != currentMaterial || filtermat1 == currentMaterial){
               // get cost of filtermat1
               let Material1Cost;
               if (filtermat1 == 'none'){
                 Material1Cost = 0;
               }
               else if(filtermat1 == 'cheeseCloth'){
                 Material1Cost = cheeseClothVal;
               }
               else if(filtermat1 == 'cotton'){
                 Material1Cost = cottonVal;
               }
               else if(filtermat1 == 'coarseGravel'){
                 Material1Cost = coarseGravelVal;
               }
               else if(filtermat1 == 'fineGravel'){
                 Material1Cost = fineGravelVal;
               }
               else if(filtermat1 == 'coarseSand'){
                 Material1Cost = coarseSandVal;
               }
               else if(filtermat1 == 'fineSand'){
                 Material1Cost = fineSandVal;
               }

               setfilter1(currentMaterialImg);
               setfiltermat1(currentMaterial);

               if(money >= 5 && (country== 'ghana' || country == 'SA' || country == 'kenya' || country=='malawi')){
                 var rand = Math.floor(Math.random() * 5) + 1 ;
                   if(rand==1){
                     var rand2 = Math.floor(Math.random() * 3) + 1 ;
                     if(rand2 == 1){
                       setModalVisible3(!modalVisible3);
                       setMoney(money - currentMaterialCost + Material1Cost - 5);
                     }
                     else if(rand2 == 2){
                       setModalVisible4(!modalVisible4);
                       setMoney(money - currentMaterialCost + Material1Cost - 5);
                     }
                     else if(rand2 == 3){
                       setModalVisible5(!modalVisible5);
                       setMoney(money - currentMaterialCost + Material1Cost + 30);
                     }
                   }
                   else{
                       setMoney(money - currentMaterialCost + Material1Cost);
                   }
               }
               else{
                 setMoney(money - currentMaterialCost + Material1Cost);
               }
             }
             else{
               setModalVisible(!modalVisible);
             }
           }}
             // Removing filtermat1 
             onLongPress={() => {setfilter1(null);
               if(filtermat1 != 'none'){
                 // get cost of filtermat1
                 let Material1Cost = 0;
                 if(filtermat1 == 'cheeseCloth'){
                   Material1Cost = cheeseClothVal;
                 }
                 else if(filtermat1 == 'cotton'){
                   Material1Cost = cottonVal;
                 }
                 else if(filtermat1 == 'coarseGravel'){
                   Material1Cost = coarseGravelVal;
                 }
                 else if(filtermat1 == 'fineGravel'){
                   Material1Cost = fineGravelVal;
                 }
                 else if(filtermat1 == 'coarseSand'){
                   Material1Cost = coarseSandVal;
                 }
                 else if(filtermat1 == 'fineSand'){
                   Material1Cost = fineSandVal;
                 }
                 // refund filter material of filtermat1
                 setMoney(money + Material1Cost)
               }
               setfiltermat1('none');
             }}
           >
             {filter1 && <Image source={filter1} style={styles.image}/>}
           </Pressable>

           {/* Filter Layer 2 */}
           <Pressable style = {styles.upperSpace}   onPress={() => {
             // Adding filtermat2
             if(money >= currentMaterialCost && filtermat2 != currentMaterial || filtermat2 == currentMaterial){
               // get cost of filtermat2
               let Material2Cost;
               if (filtermat2 == 'none'){
                 Material2Cost = 0;
               }
               else if(filtermat2 == 'cheeseCloth'){
                 Material2Cost = cheeseClothVal;
               }
               else if(filtermat2 == 'cotton'){
                 Material2Cost = cottonVal;
               }
               else if(filtermat2 == 'coarseGravel'){
                 Material2Cost = coarseGravelVal;
               }
               else if(filtermat2 == 'fineGravel'){
                 Material2Cost = fineGravelVal;
               }
               else if(filtermat2 == 'coarseSand'){
                 Material2Cost = coarseSandVal;
               }
               else if(filtermat2 == 'fineSand'){
                 Material2Cost = fineSandVal;
               }

               setbuttonFilter(currentMaterialImg); 
               setfiltermat2(currentMaterial);

               if(money >= 5 && (country== 'ghana' || country == 'SA' || country == 'kenya' || country=='malawi')){
                 var rand = Math.floor(Math.random() * 5) + 1 ;
                 if(rand==1){
                   var rand2 = Math.floor(Math.random() * 3) + 1 ;
                   if(rand2 == 1){
                     setModalVisible3(!modalVisible3);
                     setMoney(money - currentMaterialCost + Material2Cost - 5);
                   }
                   else if(rand2 == 2){
                     setModalVisible4(!modalVisible4);
                     setMoney(money - currentMaterialCost + Material2Cost - 5);
                   }
                   else if(rand2 == 3){
                     setModalVisible5(!modalVisible5);
                     setMoney(money - currentMaterialCost + Material2Cost + 30);
                   }
                 }
                 else{
                     setMoney(money - currentMaterialCost + Material2Cost);
                 }
               }
               else{
                   setMoney(money - currentMaterialCost + Material2Cost);
               }
             }
             else{
               setModalVisible(!modalVisible);
             }
           }}
             // Removing filtermat2
             onLongPress={() => {setbuttonFilter(null);
               if(filtermat2 != 'none'){
                 // get cost of filtermat2
                 let Material2Cost = 0;
                 if(filtermat2 == 'cheeseCloth'){
                   Material2Cost = cheeseClothVal;
                 }
                 else if(filtermat2 == 'cotton'){
                   Material2Cost = cottonVal;
                 }
                 else if(filtermat2 == 'coarseGravel'){
                   Material2Cost = coarseGravelVal;
                 }
                 else if(filtermat2 == 'fineGravel'){
                   Material2Cost = fineGravelVal;
                 }
                 else if(filtermat2 == 'coarseSand'){
                   Material2Cost = coarseSandVal;
                 }
                 else if(filtermat2 == 'fineSand'){
                   Material2Cost = fineSandVal;
                 }
                 // refund filter material of filtermat2
                 setMoney(money + Material2Cost)
               }
               setfiltermat2('none');
             }}
           >
             {buttonFilter && <Image source={buttonFilter} style={styles.image}/>}
           </Pressable>

           {/* Filter Layer 3 */}
           <Pressable style = {styles.upperSpace}  onPress={() => {
             // Adding filtermat3
             if(money >= currentMaterialCost && filtermat3 != currentMaterial || filtermat3 == currentMaterial){
               // get cost of filtermat3
               let Material3Cost;
               if (filtermat3 == 'none'){
                 Material3Cost = 0;
               }
               else if(filtermat3 == 'cheeseCloth'){
                 Material3Cost = cheeseClothVal;
               }
               else if(filtermat3 == 'cotton'){
                 Material3Cost = cottonVal;
               }
               else if(filtermat3 == 'coarseGravel'){
                 Material3Cost = coarseGravelVal;
               }
               else if(filtermat3 == 'fineGravel'){
                 Material3Cost = fineGravelVal;
               }
               else if(filtermat3 == 'coarseSand'){
                 Material3Cost = coarseSandVal;
               }
               else if(filtermat3 == 'fineSand'){
                 Material3Cost = fineSandVal;
               }

               setfilter3(currentMaterialImg); 
               setfiltermat3(currentMaterial);
               
               if(money >= 5 && (country== 'ghana' || country == 'SA' || country == 'kenya' || country=='malawi')){
                 var rand = Math.floor(Math.random() * 5) + 1 ;
                 if(rand==1){
                   var rand2 = Math.floor(Math.random() * 3) + 1 ;
                   if(rand2 == 1){
                     setModalVisible3(!modalVisible3);
                     setMoney(money - currentMaterialCost + Material3Cost - 5);
                   }
                   else if(rand2 == 2){
                     setModalVisible4(!modalVisible4);
                     setMoney(money - currentMaterialCost + Material3Cost - 5);
                   }
                   else if(rand2 == 3){
                     setModalVisible5(!modalVisible5);
                     setMoney(money - currentMaterialCost + Material3Cost + 30);
                   }
                 }
                 else{
                     setMoney(money - currentMaterialCost + Material3Cost);
                 }
               }
               else{
                   setMoney(money - currentMaterialCost + Material3Cost);
               }
             }
             else{
               setModalVisible(!modalVisible);
             }}}
             // Removing filtermat3
             onLongPress={() => {setfilter3(null);
               if(filtermat3 != 'none'){
                 // get cost of filtermat3
                 let Material3Cost = 0;
                 if(filtermat3 == 'cheeseCloth'){
                   Material3Cost = cheeseClothVal;
                 }
                 else if(filtermat3 == 'cotton'){
                   Material3Cost = cottonVal;
                 }
                 else if(filtermat3 == 'coarseGravel'){
                   Material3Cost = coarseGravelVal;
                 }
                 else if(filtermat3 == 'fineGravel'){
                   Material3Cost = fineGravelVal;
                 }
                 else if(filtermat3 == 'coarseSand'){
                   Material3Cost = coarseSandVal;
                 }
                 else if(filtermat3 == 'fineSand'){
                   Material3Cost = fineSandVal;
                 }
                 // refund filter material of filtermat3
                 setMoney(money + Material3Cost)
               }
               setfiltermat3('none');
             }}
           >
             {filter3 && <Image source={filter3} style={styles.image}/>}
           </Pressable>

           {/* Filter Layer 4 */}
           <Pressable style = {styles.upperSpace}  onPress={() => {
             // Adding filtermat4
             if(money >= currentMaterialCost && filtermat4 != currentMaterial || filtermat4 == currentMaterial){
               // get cost of filtermat4
               let Material4Cost;
               if (filtermat4 == 'none'){
                 Material4Cost = 0;
               }
               else if(filtermat4 == 'cheeseCloth'){
                 Material4Cost = cheeseClothVal;
               }
               else if(filtermat4 == 'cotton'){
                 Material4Cost = cottonVal;
               }
               else if(filtermat4 == 'coarseGravel'){
                 Material4Cost = coarseGravelVal;
               }
               else if(filtermat4 == 'fineGravel'){
                 Material4Cost = fineGravelVal;
               }
               else if(filtermat4 == 'coarseSand'){
                 Material4Cost = coarseSandVal;
               }
               else if(filtermat4 == 'fineSand'){
                 Material4Cost = fineSandVal;
               }

               setfilter4(currentMaterialImg); 
               setfiltermat4(currentMaterial);

               if(money >= 5 && (country== 'ghana' || country == 'SA' || country == 'kenya' || country=='malawi')){
                 var rand = Math.floor(Math.random() * 5) + 1 ;
                 if(rand==1){
                   var rand2 = Math.floor(Math.random() * 3) + 1 ;
                   if(rand2 == 1){
                     setModalVisible3(!modalVisible3);
                     setMoney(money - currentMaterialCost + Material4Cost - 5);
                   }
                   else if(rand2 == 2){
                     setModalVisible4(!modalVisible4);
                     setMoney(money - currentMaterialCost + Material4Cost - 5);
                   }
                   else if(rand2 == 3){
                     setModalVisible5(!modalVisible5);
                     setMoney(money - currentMaterialCost + Material4Cost + 30);
                   }
                 }
                 else{
                     setMoney(money - currentMaterialCost + Material4Cost);
                 }
               }
               else{
                   setMoney(money - currentMaterialCost + Material4Cost);
               }
             }
             else{
               setModalVisible(!modalVisible);
             }}}
             // Removing filtermat4
             onLongPress={() => {setfilter4(null);
               if(filtermat4 != 'none'){
                 // get cost of filtermat4
                 let Material4Cost = 0;
                 if(filtermat4 == 'cheeseCloth'){
                   Material4Cost = cheeseClothVal;
                 }
                 else if(filtermat4 == 'cotton'){
                   Material4Cost = cottonVal;
                 }
                 else if(filtermat4 == 'coarseGravel'){
                   Material4Cost = coarseGravelVal;
                 }
                 else if(filtermat4 == 'fineGravel'){
                   Material4Cost = fineGravelVal;
                 }
                 else if(filtermat4 == 'coarseSand'){
                   Material4Cost = coarseSandVal;
                 }
                 else if(filtermat4 == 'fineSand'){
                   Material4Cost = fineSandVal;
                 }
                 // refund filter material of filtermat4
                 setMoney(money + Material4Cost)
               }
               setfiltermat4('none');
             }}
           >
             {filter4 && <Image source={filter4} style={styles.image}/>}
           </Pressable>

           {/* Filter Layer 5 */}
           <Pressable style = {styles.upperSpace}  onPress={() => {
             // Adding filtermat5
             if(money >= currentMaterialCost && filtermat5 != currentMaterial || filtermat5 == currentMaterial){
               // get cost of filtermat5
               let Material5Cost;
               if (filtermat5 == 'none'){
                 Material5Cost = 0;
               }
               else if(filtermat5 == 'cheeseCloth'){
                 Material5Cost = cheeseClothVal;
               }
               else if(filtermat5 == 'cotton'){
                 Material5Cost = cottonVal;
               }
               else if(filtermat5 == 'coarseGravel'){
                 Material5Cost = coarseGravelVal;
               }
               else if(filtermat5 == 'fineGravel'){
                 Material5Cost = fineGravelVal;
               }
               else if(filtermat5 == 'coarseSand'){
                 Material5Cost = coarseSandVal;
               }
               else if(filtermat5 == 'fineSand'){
                 Material5Cost = fineSandVal;
               }

               setfilter5(currentMaterialImg); 
               setfiltermat5(currentMaterial);

               if(money >= 5 && (country== 'ghana' || country == 'SA' || country == 'kenya' || country=='malawi')){
                 var rand = Math.floor(Math.random() * 5) + 1 ;
                 if(rand==1){
                   var rand2 = Math.floor(Math.random() * 3) + 1 ;
                   if(rand2 == 1){
                     setModalVisible3(!modalVisible3);
                     setMoney(money - currentMaterialCost + Material5Cost - 5);
                   }
                   else if(rand2 == 2){
                     setModalVisible4(!modalVisible4);
                     setMoney(money - currentMaterialCost + Material5Cost - 5);
                   }
                   else if(rand2 == 3){
                     setModalVisible5(!modalVisible5);
                     setMoney(money - currentMaterialCost + Material5Cost + 30);
                   }
                 }
                 else{
                     setMoney(money - currentMaterialCost + Material5Cost);
                 }
               }
               else{
                   setMoney(money - currentMaterialCost + Material5Cost);
               }
             }
             else{
               setModalVisible(!modalVisible);
             }}}
             // Removing filtermat5
             onLongPress={() => {setfilter5(null);
               if(filtermat5 != 'none'){
                 // get cost of filtermat5
                 let Material5Cost = 0;
                 if(filtermat5 == 'cheeseCloth'){
                   Material5Cost = cheeseClothVal;
                 }
                 else if(filtermat5 == 'cotton'){
                   Material5Cost = cottonVal;
                 }
                 else if(filtermat5 == 'coarseGravel'){
                   Material5Cost = coarseGravelVal;
                 }
                 else if(filtermat5 == 'fineGravel'){
                   Material5Cost = fineGravelVal;
                 }
                 else if(filtermat5 == 'coarseSand'){
                   Material5Cost = coarseSandVal;
                 }
                 else if(filtermat5 == 'fineSand'){
                   Material5Cost = fineSandVal;
                 }
                 // refund filter material of filtermat5
                 setMoney(money + Material5Cost)
               }
               setfiltermat5('none');
             }}
           >
             {filter5 && <Image source={filter5} style={styles.image}/>}
           </Pressable>

           {/* Filter Layer 6 */}
           <Pressable style = {styles.upperSpace2} onPress={() => {
             // Adding filtermat6
             if(money >= currentMaterialCost && filtermat6 != currentMaterial || filtermat6 == currentMaterial){
               // get cost of filtermat6
               let Material6Cost;
               if (filtermat6 == 'none'){
                 Material6Cost = 0;
               }
               else if(filtermat6 == 'cheeseCloth'){
                 Material6Cost = cheeseClothVal;
               }
               else if(filtermat6 == 'cotton'){
                 Material6Cost = cottonVal;
               }
               else if(filtermat6 == 'coarseGravel'){
                 Material6Cost = coarseGravelVal;
               }
               else if(filtermat6 == 'fineGravel'){
                 Material6Cost = fineGravelVal;
               }
               else if(filtermat6 == 'coarseSand'){
                 Material6Cost = coarseSandVal;
               }
               else if(filtermat6 == 'fineSand'){
                 Material6Cost = fineSandVal;
               }

               setfilter6(currentMaterialImg); 
               setfiltermat6(currentMaterial);

               if(money >= 5 && (country== 'ghana' || country == 'SA' || country == 'kenya' || country=='malawi')){
                 var rand = Math.floor(Math.random() * 5) + 1 ;
                 if(rand==1){
                   var rand2 = Math.floor(Math.random() * 3) + 1 ;
                   if(rand2 == 1){
                     setModalVisible3(!modalVisible3);
                     setMoney(money - currentMaterialCost + Material6Cost - 5);
                   }
                   else if(rand2 == 2){
                     setModalVisible4(!modalVisible4);
                     setMoney(money - currentMaterialCost + Material6Cost - 5);
                   }
                   else if(rand2 == 3){
                     setModalVisible5(!modalVisible5);
                     setMoney(money - currentMaterialCost + Material6Cost + 30);
                   }
                 }
                 else{
                     setMoney(money - currentMaterialCost + Material6Cost);
                 }
               }
               else{
                   setMoney(money - currentMaterialCost + Material6Cost);
               }
             }
             else{
               setModalVisible(!modalVisible);
             }}}
             // Removing filtermat6
             onLongPress={() => {setfilter6(null);
               if(filtermat6 != 'none'){
                 // get cost of filtermat6
                 let Material6Cost = 0;
                 if(filtermat6 == 'cheeseCloth'){
                   Material6Cost = cheeseClothVal;
                 }
                 else if(filtermat6 == 'cotton'){
                   Material6Cost = cottonVal;
                 }
                 else if(filtermat6 == 'coarseGravel'){
                   Material6Cost = coarseGravelVal;
                 }
                 else if(filtermat6 == 'fineGravel'){
                   Material6Cost = fineGravelVal;
                 }
                 else if(filtermat6 == 'coarseSand'){
                   Material6Cost = coarseSandVal;
                 }
                 else if(filtermat6 == 'fineSand'){
                   Material6Cost = fineSandVal;
                 }
                 // refund filter material of filtermat6
                 setMoney(money + Material6Cost)
               }
               setfiltermat6('none');
             }}
           >
             {filter6 && <Image source={filter6} style={[styles.image,{borderBottomLeftRadius: 50, borderBottomRightRadius: 50}]}/>}
           </Pressable>
       </View>

       {/* Bottom 2 Layers of Filter */}
       <View style={styles.buttonFilter}>
           {/* Actions on Filter */}

           {/* Filter Layer 7 */}
           <Pressable style = {styles.belowSpace} onPress={() => {
             // Adding filtermat7
             if(money >= currentMaterialCost && filtermat7 != currentMaterial || filtermat7 == currentMaterial){
               // get cost of filtermat7
               let Material7Cost;
               if (filtermat7 == 'none'){
                 Material7Cost = 0;
               }
               else if(filtermat7 == 'cheeseCloth'){
                 Material7Cost = cheeseClothVal;
               }
               else if(filtermat7 == 'cotton'){
                 Material7Cost = cottonVal;
               }
               else if(filtermat7 == 'coarseGravel'){
                 Material7Cost = coarseGravelVal;
               }
               else if(filtermat7 == 'fineGravel'){
                 Material7Cost = fineGravelVal;
               }
               else if(filtermat7 == 'coarseSand'){
                 Material7Cost = coarseSandVal;
               }
               else if(filtermat7 == 'fineSand'){
                 Material7Cost = fineSandVal;
               }

               setfilter7(currentMaterialImg); 
               setfiltermat7(currentMaterial);

               if(money >= 5 && (country== 'ghana' || country == 'SA' || country == 'kenya' || country=='malawi')){
                 var rand = Math.floor(Math.random() * 5) + 1 ;
                 if(rand==1){
                   var rand2 = Math.floor(Math.random() * 3) + 1 ;
                   if(rand2 == 1){
                     setModalVisible3(!modalVisible3);
                     setMoney(money - currentMaterialCost + Material7Cost - 5);
                   }
                   else if(rand2 == 2){
                     setModalVisible4(!modalVisible4);
                     setMoney(money - currentMaterialCost + Material7Cost - 5);
                   }
                   else if(rand2 == 3){
                     setModalVisible5(!modalVisible5);
                     setMoney(money - currentMaterialCost + Material7Cost + 30);
                   }
                 }
                 else{
                     setMoney(money - currentMaterialCost + Material7Cost);
                 }
               }
               else{
                   setMoney(money - currentMaterialCost + Material7Cost);
               }
             }
             else{
               setModalVisible(!modalVisible);
             }}}
             // Removing filtermat7
             onLongPress={() => {setfilter7(null);
               if(filtermat7 != 'none'){
                 // get cost of filtermat7
                 let Material7Cost = 0;
                 if(filtermat7 == 'cheeseCloth'){
                   Material7Cost = cheeseClothVal;
                 }
                 else if(filtermat7 == 'cotton'){
                   Material7Cost = cottonVal;
                 }
                 else if(filtermat7 == 'coarseGravel'){
                   Material7Cost = coarseGravelVal;
                 }
                 else if(filtermat7 == 'fineGravel'){
                   Material7Cost = fineGravelVal;
                 }
                 else if(filtermat7 == 'coarseSand'){
                   Material7Cost = coarseSandVal;
                 }
                 else if(filtermat7 == 'fineSand'){
                   Material7Cost = fineSandVal;
                 }
                 // refund filter material of filtermat7
                 setMoney(money + Material7Cost)
               }
               setfiltermat7('none');
             }}
           >
             {filter7 && <Image source={filter7} style={styles.image}/>}
           </Pressable>

           {/* Filter Layer 8 */}
           <Pressable style = {styles.belowSpace2} onPress={() => {
             // Adding filtermat8
             if(money >= currentMaterialCost && filtermat8 != currentMaterial || filtermat8 == currentMaterial){
               // get cost of filtermat8
               let Material8Cost;
               if (filtermat8 == 'none'){
                 Material8Cost = 0;
               }
               else if(filtermat8 == 'cheeseCloth'){
                 Material8Cost = cheeseClothVal;
               }
               else if(filtermat8 == 'cotton'){
                 Material8Cost = cottonVal;
               }
               else if(filtermat8 == 'coarseGravel'){
                 Material8Cost = coarseGravelVal;
               }
               else if(filtermat8 == 'fineGravel'){
                 Material8Cost = fineGravelVal;
               }
               else if(filtermat8 == 'coarseSand'){
                 Material8Cost = coarseSandVal;
               }
               else if(filtermat8 == 'fineSand'){
                 Material8Cost = fineSandVal;
               }

               setfilter8(currentMaterialImg); 
               setfiltermat8(currentMaterial);

               if(money >= 5 && (country== 'ghana' || country == 'SA' || country == 'kenya' || country=='malawi')){
                 var rand = Math.floor(Math.random() * 5) + 1 ;
                 if(rand==1){
                   var rand2 = Math.floor(Math.random() * 3) + 1 ;
                   if(rand2 == 1){
                     setModalVisible3(!modalVisible3);
                     setMoney(money - currentMaterialCost + Material8Cost - 5);
                   }
                   else if(rand2 == 2){
                     setModalVisible4(!modalVisible4);
                     setMoney(money - currentMaterialCost + Material8Cost - 5);
                   }
                   else if(rand2 == 3){
                     setModalVisible5(!modalVisible5);
                     setMoney(money - currentMaterialCost + Material8Cost + 30);
                   }
                 }
                 else{
                     setMoney(money - currentMaterialCost + Material8Cost);
                 }
               }
               else{
                   setMoney(money - currentMaterialCost + Material8Cost);
               }
             }
             else{
               setModalVisible(!modalVisible);
             }}}
             // Removing filtermat8
             onLongPress={() => {setfilter8(null);
               if(filtermat8 != 'none'){
                 // get cost of filtermat8
                 let Material8Cost = 0;
                 if(filtermat8 == 'cheeseCloth'){
                   Material8Cost = cheeseClothVal;
                 }
                 else if(filtermat8 == 'cotton'){
                   Material8Cost = cottonVal;
                 }
                 else if(filtermat8 == 'coarseGravel'){
                   Material8Cost = coarseGravelVal;
                 }
                 else if(filtermat8 == 'fineGravel'){
                   Material8Cost = fineGravelVal;
                 }
                 else if(filtermat8 == 'coarseSand'){
                   Material8Cost = coarseSandVal;
                 }
                 else if(filtermat8 == 'fineSand'){
                   Material8Cost = fineSandVal;
                 }
                 // refund filter material of filtermat8
                 setMoney(money + Material8Cost)
               }
               setfiltermat8('none');
             }}
           >
             {filter8 && <Image source={filter8} style={[styles.image, {borderBottomLeftRadius: 30, borderBottomRightRadius: 30}]}/>}
           </Pressable>
       </View>

       {/* Popup for Insufficient Funds */}
       {lackofFundsModal()}
       {/* Popup for Chance Cards */}
       {loseFundsModal()}
       {/* Popup for Midgame Chance Cards */}
       {loseFundsModalMid1()}
       {loseFundsModalMid2()}
       {loseFundsModalMid3()}

       {/* Material Scroll List */}
       <View style={styles.scroll}>
         <Text style={styles.caption}>{"\n"}Scroll for more {"\n"}</Text>

         {/* Fine Sand */}
         <ScrollView horizontal= {true} showsHorizontalScrollIndicator={false}>
           <Pressable style={[styles.materialButton, {borderColor: fineSand? '#03DAC5': 'transparent'}]} numberOfLines={1} onPress={() => {
             setFineSand(true);
             setCoarseSand(false);
             setFineGravel(false);
             setCoarseGravel(false);
             setCurrentMaterialImg(fineSandImg);
             setCurrentMaterial('fineSand');
             setCurrentMaterialCost(fineSandVal);
             setCotton(false);
             setCheeseCloth(false);
           }}>
             <Text style={styles.textButton}>
               Fine Sand (${fineSandVal})
             </Text>
           </Pressable>

           {/* Coarse Sand */}
           <Pressable style={[styles.materialButton, {borderColor: coarseSand? '#03DAC5': 'transparent'}]} numberOfLines={1} onPress={() => {
             setFineSand(false);
             setCoarseSand(true);
             setFineGravel(false);
             setCoarseGravel(false);
             setCurrentMaterialImg(coarseSandImg);
             setCurrentMaterial('coarseSand');
             setCurrentMaterialCost(coarseSandVal);
             setCotton(false);
             setCheeseCloth(false);
           }}>
             <Text style={styles.textButton}>
               Coarse Sand (${coarseSandVal})
             </Text>
           </Pressable>

           {/* Fine Gravel */}
           <Pressable style={[styles.materialButton, {borderColor: fineGravel? '#03DAC5': 'transparent'}]} numberOfLines={1} onPress={() => {
             setFineSand(false);
             setCoarseSand(false);
             setFineGravel(true);
             setCoarseGravel(false);
             setCurrentMaterialImg(fineGravelImg);
             setCurrentMaterial('fineGravel');
             setCurrentMaterialCost(fineGravelVal);
             setCotton(false);
             setCheeseCloth(false);
           }}>
             <Text style={styles.textButton}>
               Fine Gravel (${fineGravelVal})
             </Text>
           </Pressable>

           {/* Coarse Gravel */}
           <Pressable style={[styles.materialButton, {borderColor: coarseGravel? '#03DAC5': 'transparent'}]} numberOfLines={1} onPress={() => {
             setFineSand(false);
             setCoarseSand(false);
             setFineGravel(false);
             setCoarseGravel(true);
             setCurrentMaterialImg(coarseGravelImg);
             setCurrentMaterial('coarseGravel');
             setCurrentMaterialCost(coarseGravelVal);
             setCotton(false);
             setCheeseCloth(false);
           }}>
             <Text style={styles.textButton}>
               Coarse Gravel (${coarseGravelVal})
             </Text>
           </Pressable>

           {/* Cotton */}
           <Pressable style={[styles.materialButton, {borderColor: cotton? '#03DAC5': 'transparent'}]} numberOfLines={1} onPress={() => {
             setFineSand(false);
             setCoarseSand(false);
             setFineGravel(false);
             setCoarseGravel(false);
             setCurrentMaterialImg(cottonImg);
             setCurrentMaterial('cotton');
             setCurrentMaterialCost(cottonVal);
             setCotton(true);
             setCheeseCloth(false);
           }}>
             <Text style={styles.textButton}>
               Cotton (${cottonVal})
             </Text>
           </Pressable>

           {/* Cheese Cloth */}
           <Pressable style={[styles.materialButton, {borderColor: cheeseCloth? '#03DAC5': 'transparent'}]} numberOfLines={1} onPress={() => {
             setFineSand(false);
             setCoarseSand(false);
             setFineGravel(false);
             setCoarseGravel(false);
             setCurrentMaterialImg(cheeseClothImg);
             setCurrentMaterial('cheeseCloth');
             setCurrentMaterialCost(cheeseClothVal);
             setCotton(false);
             setCheeseCloth(true);
           }}>
             <Text style={styles.textButton}>
               Cheese Cloth (${cheeseClothVal})
             </Text>
           </Pressable>
         </ScrollView>
       </View>

       {/* Button Layer */}
       <View style={styles.buttonLayer}>
         {/* Reset Filter */}
         <Pressable style={styles.resetButton} onPress={resetGame}>
           <Text style={styles.textButton}>
             Reset Filter
           </Text>
         </Pressable>

         {/* Test Filter */}
         <Pressable style={styles.testButton} onPress={() => {
             var result = '0';

             // Water Quality Calculations
             // 100%
             if(filtermat1=='coarseGravel' && filtermat2=='fineGravel' && filtermat3 =='coarseSand' && filtermat4=='coarseSand' && filtermat5=='fineSand' && filtermat6=='fineSand' &&filtermat7 == 'cotton' && filtermat8 == 'cheeseCloth'){
               result = '100';
               navigation.navigate("result100", { result: result })
             } 
             // 90%
             else if(
               (filtermat1!='coarseGravel' && filtermat2=='fineGravel' && filtermat3 =='coarseSand' && filtermat4=='coarseSand' && filtermat5=='fineSand' && filtermat6=='fineSand' &&filtermat7 == 'cotton' && filtermat8 == 'cheeseCloth')||
               (filtermat1=='coarseGravel' && filtermat2!='fineGravel' && filtermat3 =='coarseSand' && filtermat4=='coarseSand' && filtermat5=='fineSand' && filtermat6=='fineSand' &&filtermat7 == 'cotton' && filtermat8 == 'cheeseCloth')||
               (filtermat1=='coarseGravel' && filtermat2=='fineGravel' && filtermat3 !='coarseSand' && filtermat4=='coarseSand' && filtermat5=='fineSand' && filtermat6=='fineSand' &&filtermat7 == 'cotton' && filtermat8 == 'cheeseCloth')||
               (filtermat1=='coarseGravel' && filtermat2=='fineGravel' && filtermat3 =='coarseSand' && filtermat4!='coarseSand' && filtermat5=='fineSand' && filtermat6=='fineSand' &&filtermat7 == 'cotton' && filtermat8 == 'cheeseCloth')||
               (filtermat1=='coarseGravel' && filtermat2=='fineGravel' && filtermat3 =='coarseSand' && filtermat4=='coarseSand' && filtermat5!='fineSand' && filtermat6=='fineSand' &&filtermat7 == 'cotton' && filtermat8 == 'cheeseCloth')||
               (filtermat1=='coarseGravel' && filtermat2=='fineGravel' && filtermat3 =='coarseSand' && filtermat4=='coarseSand' && filtermat5=='fineSand' && filtermat6!='fineSand' &&filtermat7 == 'cotton' && filtermat8 == 'cheeseCloth')) 
             {
               result = '90';
               navigation.navigate("result90", { result: result })
             }
             // 80%
             else if(
                 (filtermat1=='coarseGravel' && filtermat2=='fineGravel' && filtermat3 =='coarseSand' && filtermat4=='coarseSand' && filtermat5=='fineSand' && filtermat6=='fineSand' && filtermat7 == 'cotton' && filtermat8 != 'cheeseCloth')
               || (filtermat1=='coarseGravel' && filtermat2=='fineGravel' && filtermat3 =='coarseSand' && filtermat4=='coarseSand' && filtermat5=='fineSand' && filtermat6=='fineSand' && filtermat7 != 'cotton' && filtermat8 == 'cheeseCloth')
               || (filtermat1!='coarseGravel' && filtermat2!='fineGravel' && filtermat3 =='coarseSand' && filtermat4=='coarseSand' && filtermat5=='fineSand' && filtermat6=='fineSand' && filtermat7 == 'cotton' && filtermat8 == 'cheeseCloth')
               || (filtermat1!='coarseGravel' && filtermat2=='fineGravel' && filtermat3 !='coarseSand' && filtermat4=='coarseSand' && filtermat5=='fineSand' && filtermat6=='fineSand' && filtermat7 == 'cotton' && filtermat8 == 'cheeseCloth')
               || (filtermat1!='coarseGravel' && filtermat2=='fineGravel' && filtermat3 =='coarseSand' && filtermat4!='coarseSand' && filtermat5=='fineSand' && filtermat6=='fineSand' && filtermat7 == 'cotton' && filtermat8 == 'cheeseCloth')
               || (filtermat1!='coarseGravel' && filtermat2=='fineGravel' && filtermat3 =='coarseSand' && filtermat4=='coarseSand' && filtermat5!='fineSand' && filtermat6=='fineSand' && filtermat7 == 'cotton' && filtermat8 == 'cheeseCloth')
               || (filtermat1!='coarseGravel' && filtermat2=='fineGravel' && filtermat3 =='coarseSand' && filtermat4=='coarseSand' && filtermat5=='fineSand' && filtermat6!='fineSand' && filtermat7 == 'cotton' && filtermat8 == 'cheeseCloth')
               || (filtermat1=='coarseGravel' && filtermat2!='fineGravel' && filtermat3 !='coarseSand' && filtermat4=='coarseSand' && filtermat5=='fineSand' && filtermat6=='fineSand' && filtermat7 == 'cotton' && filtermat8 == 'cheeseCloth')
               || (filtermat1=='coarseGravel' && filtermat2!='fineGravel' && filtermat3 =='coarseSand' && filtermat4!='coarseSand' && filtermat5=='fineSand' && filtermat6=='fineSand' && filtermat7 == 'cotton' && filtermat8 == 'cheeseCloth')
               || (filtermat1=='coarseGravel' && filtermat2!='fineGravel' && filtermat3 =='coarseSand' && filtermat4=='coarseSand' && filtermat5!='fineSand' && filtermat6=='fineSand' && filtermat7 == 'cotton' && filtermat8 == 'cheeseCloth')
               || (filtermat1=='coarseGravel' && filtermat2!='fineGravel' && filtermat3 =='coarseSand' && filtermat4=='coarseSand' && filtermat5=='fineSand' && filtermat6!='fineSand' && filtermat7 == 'cotton' && filtermat8 == 'cheeseCloth')
               || (filtermat1=='coarseGravel' && filtermat2=='fineGravel' && filtermat3 !='coarseSand' && filtermat4!='coarseSand' && filtermat5=='fineSand' && filtermat6=='fineSand' && filtermat7 == 'cotton' && filtermat8 == 'cheeseCloth')
               || (filtermat1=='coarseGravel' && filtermat2=='fineGravel' && filtermat3 !='coarseSand' && filtermat4=='coarseSand' && filtermat5!='fineSand' && filtermat6=='fineSand' && filtermat7 == 'cotton' && filtermat8 == 'cheeseCloth')
               || (filtermat1=='coarseGravel' && filtermat2=='fineGravel' && filtermat3 !='coarseSand' && filtermat4=='coarseSand' && filtermat5=='fineSand' && filtermat6!='fineSand' && filtermat7 == 'cotton' && filtermat8 == 'cheeseCloth')
               || (filtermat1=='coarseGravel' && filtermat2=='fineGravel' && filtermat3 =='coarseSand' && filtermat4!='coarseSand' && filtermat5!='fineSand' && filtermat6=='fineSand' && filtermat7 == 'cotton' && filtermat8 == 'cheeseCloth')
               || (filtermat1=='coarseGravel' && filtermat2=='fineGravel' && filtermat3 =='coarseSand' && filtermat4!='coarseSand' && filtermat5=='fineSand' && filtermat6!='fineSand' && filtermat7 == 'cotton' && filtermat8 == 'cheeseCloth')
               || (filtermat1=='coarseGravel' && filtermat2=='fineGravel' && filtermat3 =='coarseSand' && filtermat4=='coarseSand' && filtermat5!='fineSand' && filtermat6!='fineSand' && filtermat7 == 'cotton' && filtermat8 == 'cheeseCloth')
               )
               {
                 result = 'only 80% cleaned';
                 navigation.navigate("result80less", { result: result })
               }
               // < 80%
               else{
                 result = "less than 80% clean";
                 navigation.navigate("result80less", { result: result })
               }
             }
           }>
           <Text style={styles.textButton}>
             Test Filter
           </Text>
           <View style={styles.arrow}>
             <Icon name='angle-right' color='#03DAC5' size={15}/>
           </View>
         </Pressable>
       </View>
       
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
   topFilter:{
       backgroundColor: 'transparent',
       height: Dimensions.get('window').height*4/7,
       width: Dimensions.get('window').width*2/3,
       flexDirection: 'column',
       borderColor: '#03DAC5',
       borderWidth: 2,
       borderTopWidth: 0,
       borderBottomLeftRadius: 50,
       borderBottomRightRadius: 50,
       flex: 12
   },
   buttonFilter:{
       backgroundColor: 'transparent',
       height: Dimensions.get('window').height*1/10,
       width: Dimensions.get('window').width*1/3,
       flexDirection: 'column',
       borderColor: '#03DAC5',
       borderWidth: 2,
       borderTopWidth: 0,
       borderBottomLeftRadius: 30,
       borderBottomRightRadius: 30,
       flex: 2
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
       marginBottom: Dimensions.get('window').height / 20,
       paddingLeft: 10,
       paddingRight: 10,
       flex: 4
   },
   textButton:{
       color: '#03DAC5',
       textAlign:'center',
       fontSize:14,
       fontWeight: 'bold',
       flex: 5,
       padding:3, 
   },
   resetButton:{
       width:  Dimensions.get('window').width / 3,
       flexDirection: 'row',
       padding: 12,
       borderColor: '#03DAC5',
       borderRadius: 999,
       borderWidth: 2,
       backgroundColor: '#2C2C2C'
   },
   testButton: {
       width:  Dimensions.get('window').width / 3,
       flexDirection: 'row',
       marginLeft: Dimensions.get('window').width / 20,
       padding: 12,
       borderColor: '#03DAC5',
       borderRadius: 999,
       borderWidth: 2,
       backgroundColor: '#2C2C2C'
   },
   buttonLayer:{
       flexDirection: 'row',
       marginTop: -Dimensions.get('window').height / 20,
       marginBottom: Dimensions.get('window').height / 10,
       justifyContent: 'center',
       alignItems: 'center'
   },
   materialButton: {
       height: Dimensions.get('window').height / 14,
       paddingTop: 10,
       paddingBottom: 10,
       paddingLeft: 20,
       paddingRight: 20,
       marginLeft: Dimensions.get('window').width / 13,
       marginTop: Dimensions.get('window').width / 70,
       borderColor: 'transparent',
       borderRadius: 999,
       borderWidth: 2,
       backgroundColor: '#2C2C2C',
   },
   image:{
       height: '99%',
       width: '99%'
   },
   arrow:{
       flex: 1,
       marginTop: 2
   },
   caption:{
       color: '#03DAC5',
       marginTop: Dimensions.get('window').height / -12,
       marginLeft: -Dimensions.get('window').width / -1.5,
   },
   backBox:{
       flexDirection: 'row',
       justifyContent: 'space-between',
       width: Dimensions.get('window').width,
       paddingLeft: 30,
       paddingRight: 30,
       marginBottom: 20
   },
   moneyText:{
       color: '#03DAC5',
       fontSize: 17,
       fontWeight: 'bold',
   },
   centeredView: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
 },
 modalView: {
   backgroundColor: '#2C2C2C',
   borderRadius: 20,
   padding: 35,
   alignItems: 'center',
   shadowColor: '#000',
   shadowOffset: {
     width: 0,
     height: 2,
   },
   shadowOpacity: 0.25,
   shadowRadius: 4,
   elevation: 5,
   width: Dimensions.get('window').width / 1.2,
 },
 answerView: {
   textAlign: 'center',
   color: '#03DAC5',
   fontSize: 18,
   marginBottom: Dimensions.get('window').height / 30,
 },
 buttonClose: {
   backgroundColor: '#2C2C2C',
   borderColor: '#03DAC5',
 },
   buttonAns: {
   width: Dimensions.get('window').width / 3,
   flexDirection: 'row',
   padding: 15,
   borderColor: '#03DAC5',
   borderRadius: 999,
   borderWidth: 2,
   backgroundColor: '#2C2C2C',
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
