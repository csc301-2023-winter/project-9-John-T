import AsyncStorage from '@react-native-async-storage/async-storage';

var base_url = 'https://csc301-backend.herokuapp.com/';
async function ListRoomsAPI () {
    var zambonie;
    var data = [null];
    let user = await AsyncStorage.getItem('user');  
    let parsed = JSON.parse(user);  
    var tokenz = parsed.token;
    zambonie = await fetch(base_url + 'homeroom/show-rooms/', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${tokenz}`
        },
    }).then(async (response) => {
            if (response.status == 200) {
                data = await response.json();
                } else {
                console.log("invalid request");
            }


        }).catch(function(error) {
            console.log('There has been a problem with your fetch operation: ' + error.message);
            });
        
        return data;
}
export default ListRoomsAPI;