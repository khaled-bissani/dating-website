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

// Declare all the fields in the continue block
const interest = document.getElementById('interest'); 
const yourLocation = document.getElementById('location'); 
const password = document.getElementById('password'); 

const landingBaseURL = "http://127.0.0.1:8000/api/v0.1/landing/";

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
        workshop_pages.Console("Error from POST API", error);
    }
}

const continueSignup = async() => {
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

        localStorage.setItem('currentUserEmail',email.value);

        const signup_url = `${landingBaseURL}signup`;
        const response_landing = await postAPI(signup_url,signup);

        document.getElementById('signup').style.display="none";
        document.getElementById('continue-signup').style.display="block";
    }
}

const submitSignup = async() => {
    if (interest.value == '') {
        interest.style.borderColor = "red"; 
        interest.style.borderWidth = "2px";
        interest.placeholder = "No interest";
    }
    if (yourLocation.value == '') {
        yourLocation.style.borderColor = "red"; 
        yourLocation.style.borderWidth = "2px";
        yourLocation.placeholder = "No location";
    }
    if (password.value == '') {
        password.style.borderColor = "red"; 
        password.style.borderWidth = "2px";
        password.placeholder = "No password";
    }
    else{
        const continueSignup= new FormData();
        continueSignup.append('email',localStorage.getItem('currentUserEmail'));
        continueSignup.append('interest',interest.value);
        continueSignup.append("location", yourLocation.value);
        continueSignup.append("password", password.value);

        const signup_url = `${landingBaseURL}continue_signup`;
        const response_landing = await postAPI(signup_url,continueSignup);

        document.getElementById('signup').style.display="none";
        document.getElementById('continue-signup').style.display="none";
        document.getElementById('login').style.display="block";
    }
}

continueButton.addEventListener('click',continueSignup)
submitButton.addEventListener('click',submitSignup)