import AsyncStorage from '@react-native-async-storage/async-storage';

var base_url = 'https://csc301-backend.herokuapp.com/';
async function AnswerAPI (q1, q2, q3, q4) {
    var zambonie;
    var costa = 0;
    let user = await AsyncStorage.getItem('user');  
    let parsed = JSON.parse(user);  
    var tokenz = parsed.token;
    zambonie = await fetch(base_url + 'quiz/answer/', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${tokenz}`
        },
        body: JSON.stringify({ "answer_1": q1,  "answer_2": q2,  "answer_3": q3,  "answer_4": q4 })
    }).then(async (response) => {
            if (response.status == 200) {
                data = await response.json();
                } else {
                data = await response.json();
                console.log(data);
                costa  = -1
            }


        }).catch(function(error) {
            console.log('There has been a problem with your fetch operation: ' + error.message);
            costa  = -1
            });
        
        return costa;
}
export default AnswerAPI;