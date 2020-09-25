import axios from 'axios';
import apiKeys from '../../helpers/apiKeys.json';
import card from '../cards/projectCard';
import addBoard from './addBoard';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getAllUserBoards = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/projects.json`)
    .then((response) => {
      const allBoards = response.data;
      const boards = [];

      if (allBoards) {
        Object.keys(allBoards).forEach((boardId) => {
          boards.push(allBoards[boardId]);
        });
      }
      resolve(boards);
    }).catch((error) => reject(error));
});

const boardView = () => {
  $('#app').html('<h1>Boards</h1>');
  addBoard.addBoardEvent();
  getAllUserBoards()
    .then((response) => {
      if (response.length) {
        response.forEach((item) => {
          $('#app').append(card.buildBoardCard(item));
        });
      } else {
        $('#app').html('');
        $('#app').append('<h2>NO BOARDS</h2>');
      }
    });
};

export default { boardView, getAllUserBoards };
