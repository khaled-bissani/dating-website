const logout =document.getElementById('logout');

const logoutToLanding = () => {
    window.location.replace('landing.html');
  }

logout.addEventListener('click',logoutToLanding)