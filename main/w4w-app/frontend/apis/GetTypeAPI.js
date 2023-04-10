import AsyncStorage from '@react-native-async-storage/async-storage';

var base_url = 'https://csc301-backend.herokuapp.com/';
async function GetTypeAPI (email) {
    var zambonie;
    var type = "";
    zambonie = await fetch(base_url + 'accounts/get-type/', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "email": email}),
    }).then(async (response) => {
            if (response.status == 200) {
                var data;
                data = await response.json();
                type = data["type"]
                } else {
                console.log("invalid request");
            }


        }).catch(function(error) {
            console.log('There has been a problem with your fetch operation: ' + error.message);
            });
        
        return type;
}
export default GetTypeAPI;