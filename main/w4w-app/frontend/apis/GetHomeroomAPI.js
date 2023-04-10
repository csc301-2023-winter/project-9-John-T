import AsyncStorage from '@react-native-async-storage/async-storage';

var base_url = 'https://csc301-backend.herokuapp.com/';
async function GetHomeroomAPI (email) {
    var zambonie;
    var homeroom = "";
    zambonie = await fetch(base_url + 'accounts/get-homeroom/', {
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
                homeroom = data["type"]
                } else {
                console.log("invalid request");
            }


        }).catch(function(error) {
            console.log('There has been a problem with your fetch operation: ' + error.message);
            });
        
        return homeroom;
}
export default GetHomeroomAPI;