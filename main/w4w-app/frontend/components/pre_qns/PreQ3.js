import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
	Dimensions,
	StyleSheet,
	View,
	Text,
	Image,
	Pressable,
	Modal,
	TouchableOpacity,
	SafeAreaView
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/FontAwesome5';

// PreQ3 Page
export default function PreQ3({ navigation }) {
	const [modalVisible, setModalVisible] = useState(false);
	const [selectedOption, setSelectedOption] = useState(null);
	const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);

    // Country Options
	const options = [
		{ id: 1, text: 'North America' },
		{ id: 2, text: 'South America' },
		{ id: 3, text: 'Europe' },
		{ id: 4, text: 'Asia' },
		{ id: 5, text: 'Africa' },
	];

	// Check if the answer is correct or not
	// Show the corresponding message in the modal
	const handleAnswer = (id) => {
		setSelectedOption(id);
		id === 5 ? setIsCorrectAnswer(true) : setIsCorrectAnswer(false);
		setModalVisible(!modalVisible);
	};

	// Modal to show the answer message
	const AnswerModal = () => {
		let message = isCorrectAnswer
			? 'Yes, most of the people in the world living without clean water live in Sub-Saharan Africa - the part of Africa south of the Sahara.'
			: 'Wrong Answer.';

		console.log(message);

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
							<Text style={styles.answerView}>{message}</Text>
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

	return (
		<SafeAreaView style={styles.background}>
			<Image source={require('../../assets/EWB.png')}  style={styles.ewblogo}/>

            {/* Back to PreQ2 Page */}
			<Pressable style = {{marginLeft : - Dimensions.get('window').width/ 1.2}}
					onPress={async () => {
						navigation.navigate('Pre questionnaire 2');
					}}
				>
					<Icon name='arrow-left' color='#03DAC5' size={25} />
				</Pressable>

			<Text style={styles.textCaption}>
				Where do most of the people without clean water access live?
			</Text>
            
            {/* Country Options */}
			<View style={styles.optionContainer}>
				{options.map((option) => (
					<TouchableOpacity
						key={option.id}
						style={styles.optionButton}
						onPress={() => handleAnswer(option.id)}
					>
						<Text style={styles.optionText}>{option.text}</Text>
					</TouchableOpacity>
				))}
			</View>

            {/* Popup Info */}
			{AnswerModal()}

            {/* Map Image */}
			<View style={styles.ImageContainer}>
				<Image
					source={require('../../assets/waterAccessMap.jpg')}
					style={{
						width: Dimensions.get('window').width,
						height: Dimensions.get('window').height / 4,
						marginTop: Dimensions.get('window').height / 55,
						resizeMode: 'contain',
					}}
				/>
			</View>

            {/* Next Page */}
			<Pressable
				style={styles.nextButton}
				numberOfLines={1}
				onPress={() => navigation.navigate('Pre questionnaire 4')}
			>
				<Text style={styles.textButton}>Next</Text>
				<View style={styles.arrow}>
					<FontAwesome5 name="angle-right" color="#03DAC5" size={15} />
				</View>
			</Pressable>

			<Image source={require('../../assets/WFTW.png')} style={styles.w4twlogo}/>
			<StatusBar style="auto" />
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
		marginTop: Dimensions.get('window').height / 35,
		textAlign: 'center',
		fontSize: 20,
		fontWeight: 'bold',
		textDecorationLine: 'underline',
		width: Dimensions.get('window').width / 1.2,
	},
	nextButton: {
		width: Dimensions.get('window').width / 2,
		flexDirection: 'row',
		padding: 12,
		borderColor: '#03DAC5',
		borderRadius: 999,
		borderWidth: 2,
		backgroundColor: '#2C2C2C',
		marginTop: Dimensions.get('window').height / 15,
		marginBottom: Dimensions.get('window').height / 15,
		alignItems: 'center',
	},
	arrow: {
		flex: 1,
		marginTop: 2,
	},
	textButton: {
		color: '#03DAC5',
		textAlign: 'center',
		fontSize: 14,
		fontWeight: 'bold',
		flex: 5,
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
	optionContainer: {
		marginTop: Dimensions.get('window').height / 30,
	},
	optionButton: {
		backgroundColor: '#2C2C2C',
		borderColor: '#03DAC5',
		borderWidth: 2,
		padding: 8,
		borderRadius: 8,
		marginBottom: 10,
		width: Dimensions.get('window').width / 2,
	},
	optionText: {
		textAlign: 'center',
		fontSize: 12,
		fontWeight: 'bold',
		color: '#03DAC5',
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
	ewblogo:{
        right: Dimensions.get('window').width / -3,
        bottom: Dimensions.get('window').height / -18,
        width: Dimensions.get('window').width / 5,
    	height: Dimensions.get('window').height / 17.5,
      },
    w4twlogo: {
        bottom: Dimensions.get('window').height / 200,
        alignItems: 'flex-start',
        width: Dimensions.get('window').width / 4,
    	height: Dimensions.get('window').height / 15.5,
        position: 'absolute',
        bottom: 20,
        left: 10,
      },
});
