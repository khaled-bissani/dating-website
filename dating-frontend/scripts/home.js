const homeSection = document.getElementById('home');
const chatSection = document.getElementById('chat');
const favoriteSection = document.getElementById('favorite');
const profileSection = document.getElementById('profile');

const goToChat =document.getElementById('go-to-chat');
const goToFavorite =document.getElementById('go-to-favorite');
const goToProfile =document.getElementById('go-to-profile');
const logout =document.getElementById('logout');

const toChat = () => {
  chatSection.style.display="block";
  homeSection.style.display="none";
  favoriteSection.style.display="none";
  profileSection.style.display="none";
}

const toFavorite = () => {
  homeSection.style.display="none";
  chatSection.style.display="none";
  favoriteSection.style.display="block";
  profileSection.style.display="none";
}

const toProfile = () => {
  profileSection.style.display="block";
  homeSection.style.display="none";
  chatSection.style.display="none";
  favoriteSection.style.display="none";
}

const logoutToLanding = () => {
  window.location.replace('landing.html');
}

goToChat.addEventListener('click',toChat);
logout.addEventListener('click',logoutToLanding);
goToFavorite.addEventListener('click',toFavorite);
goToProfile.addEventListener('click',toProfile);