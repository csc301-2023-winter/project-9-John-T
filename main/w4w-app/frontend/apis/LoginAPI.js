import AsyncStorage from '@react-native-async-storage/async-storage';

var base_url = 'https://csc301-backend.herokuapp.com/';
async function LoginAPI (email, password) {
    var zambonie;
    var costa = 0;
    zambonie = await fetch(base_url + 'accounts/login/', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "email": email, "password": password }),
    }).then(async (response) => {
            if (response.status == 200) {
                var data;
                data = await response.json();
                if (data["access"]) {
                    await AsyncStorage.setItem("user", JSON.stringify({ "email": email, "password": password, "token": data["access"] }));
                    }
                else {
                    console.log("access token generation error");
                    costa = -2;
                    }
                } else {
                console.log("invalid email and/or password combination");
                costa = -1;
            }


        }).catch(function(error) {
            console.log('There has been a problem with your fetch operation: ' + error.message);
            });
        
        return costa;
}
export default LoginAPI;