const homeSection = document.getElementById('home');
const favoriteSection = document.getElementById('favorite');

const goToFavorite =document.getElementById('go-to-favorite');
const logout =document.getElementById('logout');

const toFavorite = () => {
  homeSection.style.display="none";
  favoriteSection.style.display="block"
}

const logoutToLanding = () => {
  window.location.replace('landing.html');
}

logout.addEventListener('click',logoutToLanding);
goToFavorite.addEventListener('click',toFavorite);