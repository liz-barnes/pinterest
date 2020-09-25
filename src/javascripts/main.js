import 'bootstrap';
import firebase from 'firebase/app';
import apiKeys from './helpers/apiKeys.json';
import authData from './helpers/data/authData';
// import singleBoard from './components/views/singleBoard';
// import navbar from './components/myNavbar/myNavbar';

import '../styles/main.scss';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  authData.checkLoginStatus();
  // singleBoard.getUserBoards();
  // navbar.buildNavbar();
};

init();
