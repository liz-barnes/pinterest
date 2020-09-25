import axios from 'axios';
import apiKeys from '../../helpers/apiKeys.json';
// import getBoards from '../../helpers/data/boardData';

const baseUrl = apiKeys.firebaseKeys.databaseURL;
// import allBoards from './projectBoard';

const showSingleBoard = () => {
  $('body').on('click', '.project-card', (e) => {
    const target = e.target.id;
    console.warn(target, 'clicked');
  });
};

// const buildSingleBoardView = () => {
//   $('#app').html('');
//   getBoards.getBoards()
//     .then((response) => {
//       if (response.userId === ) {
//       //   response.forEach((item) => {
//       //     $('#app').append(card.cowMaker(item));
//       //   });
//       // } else {
//       //   $('#app').append('<h2>NO COWS</h2>');
//       // }
//       // $('#app').append('');
//     });
// };

const getUserBoards = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/projects.json?orderBy="userId"&equalTo="-MHwVPNlT57Im8XQlvIb"`)
    .then((response) => {
      const userBoards = response.data;
      const boards = [];
      if (userBoards) {
        Object.keys(userBoards).forEach((boardId) => {
          boards.push(userBoards[boardId]);
        });
      }
      resolve(boards);
      console.warn(boards);
    })
    .catch((error) => reject(error));
});

// get all pins by boardId
// const boardPins = [];

export default { showSingleBoard, getUserBoards };
