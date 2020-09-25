import firebase from 'firebase/app';
import 'firebase/auth';
import userData from './userData';
import auth from '../../components/auth/auth';
import navbar from '../../components/myNavbar/myNavbar';
import viewHelper from '../viewHelpers';
import singleBoard from '../../components/views/singleBoard';

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      const currentUser = userData.setCurrentUser(user);
      navbar.buildNavbar(currentUser);
      viewHelper.viewHelper();
      singleBoard.getUserBoards(currentUser.uid);
      console.warn(singleBoard.getUserBoards());
    } else {
      auth.loginButton();
      $('#nav').html('');
    }
  });
};

export default { checkLoginStatus };
