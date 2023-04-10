var base_url = 'https://csc301-backend.herokuapp.com/';
async function StudentSignupAPI (email, password, password2, firstName, lastName, age, city, country, grade, school) {
    var zambonie;
    var costa = 0;
    zambonie = await fetch(base_url + 'accounts/register-student/', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "email": email, "password": password, "password2": password2, "first_name": firstName, "last_name": lastName, "age": age, "city":city,
        "country":country, "grade": grade, "school":school}),
    }).then(async (response) => {
            if (response.status == 200) {
                ;
                } else {
                console.log("Please fill the required fields: Email, First Name, Last Name, Password, Confirm Password");
                costa = -1;
            }


        }).catch(function(error) {
            console.log('There has been a problem with your fetch operation: ' + error.message);
            });
        
        return costa;
}
export default StudentSignupAPI;