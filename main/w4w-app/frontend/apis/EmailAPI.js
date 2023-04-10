import AsyncStorage from '@react-native-async-storage/async-storage';
import parseErrorStack from 'react-native/Libraries/Core/Devtools/parseErrorStack';

var base_url = 'https://csc301-backend.herokuapp.com/';
async function EmailAPI () {
    var zambonie;
    var costa = 0;
    let user = await AsyncStorage.getItem('user');  
    let parsed = JSON.parse(user);  
    var tokenz = parsed.token;
    zambonie = await fetch(base_url + 'quiz/send-email/', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${tokenz}`,
        },
        body: JSON.stringify({"foo": "bar"})
    }).then(async (response) => {
            data = await response.json();
            if (response.status == 200) {
                ;
                } else if (data == "User don't have a homeroom"){
                    return -100
                } else {
                console.log(data);
                costa  = -1
            } 


        }).catch(function(error) {
            console.log('There has been a problem with your fetch operation: ' + error.message);
            costa  = -1
            });
        
        return costa;
}
export default EmailAPI;