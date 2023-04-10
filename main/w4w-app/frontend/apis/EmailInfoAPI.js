import AsyncStorage from '@react-native-async-storage/async-storage';
import * as MailComposer from 'expo-mail-composer';

var base_url = 'https://csc301-backend.herokuapp.com/';

async function EmailInfoAPI(q1, q2, q3, q4) {
	var teacherEmail = '';
	var username = '';
	var homeroom = '';

	let user = await AsyncStorage.getItem('user');
	var tokenz = JSON.parse(user).token;
	await fetch(base_url + 'quiz/email-info/', {
		method: 'GET',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: `Bearer ${tokenz}`,
		},
	})
		.then(async (response) => {
			data = await response.json();
			if (response.status == 200) {
				console.log('200');
				teacherEmail = data.teacher_email;
				username = data.name;
				homeroom = data.homeroom;
			} else if (response.status == 400) {
				console.log('400');
				username = data.name;
			}

			const subject = '[Water for the World] Answers from ' + username;
			const emailTemplate = `
				Student name: ${username}
				Homeroom: ${homeroom}

				Here are the student's answers to the post-questionnaires:

				
				Question 1:
				----------------
				${q1}

				
				Question 2:
				---------------- 
				${q2}


				Question 3: 
				----------------
				${q3}


				Question 4: 
				----------------
				${q4} 




				Thank you for participating in Water for the World!
				
				Note to teacher -- Please email W4TW at W4TW@gmail.com and let us know your thoughts for improving the app (or thanks) and also HOW MANY STUDENTS completed the workshop so that we can tract its usage.  Thank you, W4TW. 
				`;
			MailComposer.composeAsync({
				recipients: [teacherEmail],
				subject: subject,
				body: emailTemplate,
			}).catch(() =>
				Alert.alert('Unable To Send Email', undefined, [
					{
						text: 'OK',
					},
				])
			);
		})
		.catch(function (error) {
			console.log(
				'There has been a problem with your fetch operation: ' + error.message
			);
		});
}
export default EmailInfoAPI;
