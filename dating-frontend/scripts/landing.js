const toLogin = document.getElementById('toLogin');
const toSignup = document.getElementById('toSignup');

// Declare all the blocks signup and login
const openSignup = document.getElementById('signup');
const openContinueSignup = document.getElementById('continue-signup');
const openLogin = document.getElementById('login');

const goToLogin = () => {
    openLogin.style.display="block";
    openSignup.style.display="none";
    openContinueSignup.style.display="none";
}

const goToSignup = () => {
    openSignup.style.display="block";
    openContinueSignup.style.display="none";
    openLogin.style.display="none";
}

toLogin.addEventListener('click',goToLogin);
toSignup.addEventListener('click',goToSignup);