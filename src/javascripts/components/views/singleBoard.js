import axios from 'axios';
import apiKeys from '../../helpers/apiKeys.json';
import getPins from '../../helpers/data/pinData';
import pinCard from '../cards/pinCard';
// import getBoards from '../../helpers/data/boardData';

const baseUrl = apiKeys.firebaseKeys.databaseURL;
// import allBoards from './projectBoard';

const buildSingleBoardView = () => {
  $('#app').html('');
  getPins.getPins()
    .then((response) => {
      if (response.length) {
        response.forEach((pin) => {
          $('#app').append(pinCard.buildPinCard(pin));
        });
      } else {
        $('#app').append('<h2>NO PINS</h2>');
      }
    });
};
const showSingleBoard = () => {
  $('body').on('click', '.project-card', (e) => {
    const target = e.target.id;
    console.warn(target, 'clicked');
    buildSingleBoardView();
  });
};

// const singleBoardViewClickEvent = () => {

// }

const getUserBoards = (userId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/projects.json?orderBy="userId"&equalTo="${userId}"`)
    .then((response) => {
      const userBoards = response.data;
      const boards = [];
      if (userBoards) {
        Object.keys(userBoards).forEach((boardId) => {
          boards.push(userBoards[boardId]);
        });
      }
      resolve(boards);
    })
    .catch((error) => reject(error));
});

// get all pins by boardId
// const boardPins = [];

export default { showSingleBoard, getUserBoards };
