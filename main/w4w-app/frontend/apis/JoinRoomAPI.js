import AsyncStorage from '@react-native-async-storage/async-storage';

var base_url = 'https://csc301-backend.herokuapp.com/';
async function JoinRoomAPI (email, homeroom_id) {
    var zambonie;
    var costa = 0;
    let user = await AsyncStorage.getItem('user');  
    let parsed = JSON.parse(user);  
    var tokenz = parsed.token;
    zambonie = await fetch(base_url + 'homeroom/join-room/', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${tokenz}`
        },
        body: JSON.stringify({ "email": email, "homeroom_id": homeroom_id })
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
export default JoinRoomAPI;