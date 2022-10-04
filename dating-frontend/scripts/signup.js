// Declare all the buttons
const continueButton = document.getElementById('continue-btn');
const submitButton = document.getElementById('submit-btn');

// Declare all input fields and drop down menu
const fullName = document.getElementById('name').value;
const email = document.getElementById('email').value; 
const phoneNumber = document.getElementById('phone-number').value; 
const age = document.getElementById('age').value; 
const gender = document.getElementById('gender').value; 
const genderInterested = document.getElementById('gender-interested').value;  

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

}

continueButton.addEventListener('click',continueSignup)