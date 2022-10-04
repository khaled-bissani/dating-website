// Declare all the buttons
const continueButton = document.getElementById('continue-btn');
const submitButton = document.getElementById('submit-btn');

// Declare all input fields and drop down menu
const fullName = document.getElementById('name');
const email = document.getElementById('email'); 
const phoneNumber = document.getElementById('phone-number'); 
const age = document.getElementById('age'); 
const gender = document.getElementById('gender'); 
const genderInterested = document.getElementById('gender-interested');  

const baseLandingURL = "http://127.0.0.1:8000/api/v0.1/landing/";

const postAPI = async (api_url, api_data, api_token = null) => {
    try{
        return await axios.post(
            api_url,
            api_data,
            { headers:{
                    'Authorization' : "token " + api_token
                }
            }
        );
    }catch(error){
        console.log("Error from POST API", error);
    }
}

// const landingSignup = async () => {
//     const signup_url = `${baseLandingURL}/signup`;
//     const response_signup = await postAPI(signup_url);
//     console.log( response_signup.data.data);
// }

const continueSignup = () => {
    // regex to check email format
    const emailFormat=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if (fullName.value == '') {
        fullName.style.borderColor = "red"; 
        fullName.style.borderWidth = "2px";
        fullName.placeholder = "No name";
    }
    if (phoneNumber.value == '') {
        phoneNumber.style.borderColor = "red"; 
        phoneNumber.style.borderWidth = "2px";
        phoneNumber.placeholder = "No number";
    }
    if (age.value == '') {
        age.style.borderColor = "red"; 
        age.style.borderWidth = "2px";
        age.placeholder = "No age";
    }
    if (email.value == '') {
        email.style.borderColor = "red"; 
        email.style.borderWidth = "2px";
        email.placeholder = "No email";
    }
    else if(!emailFormat.test(email.value)){
        email.style.borderColor = "red"; 
        email.style.borderWidth = "2px";
        email.value = '';
        email.placeholder = "Not valid email";
    }
    else{
        const signup= new FormData();
        signup.append('name',fullName.value);
        signup.append("email", email.value);
        signup.append("phone_number", phoneNumber.value);
        signup.append("age", age.value);
        signup.append("gender_interested",genderInterested.value);
        signup.append("gender",gender.value);

        axios.post('http://127.0.0.1:8000/api/v0.1/landing/signup',signup)
        .then(res=> console.log(res))
        .catch(err =>console.log(err));
    }
}

continueButton.addEventListener('click',continueSignup)