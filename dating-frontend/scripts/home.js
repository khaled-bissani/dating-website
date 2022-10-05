const homeSection = document.getElementById('home');
const favoriteSection = document.getElementById('favorite');
const profileSection = document.getElementById('profile');

const goToFavorite =document.getElementById('go-to-favorite');
const goToProfile =document.getElementById('go-to-profile');
const logout =document.getElementById('logout');

const toFavorite = () => {
  homeSection.style.display="none";
  favoriteSection.style.display="block";
  profileSection.style.display="none";
}

const toProfile = () => {
  profileSection.style.display="block";
  homeSection.style.display="none";
  favoriteSection.style.display="none";
}

const logoutToLanding = () => {
  window.location.replace('landing.html');
}

logout.addEventListener('click',logoutToLanding);
goToFavorite.addEventListener('click',toFavorite);
goToProfile.addEventListener('click',toProfile);