import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getBoards = () => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/projects.json`)
    .then((response) => {
      const allBoards = response.data;
      const boards = [];
      if (allBoards) {
        Object.keys(allBoards).forEach((boardId) => {
          boards.push(allBoards[boardId]);
        });
      }
      resolve(boards);
    })
    .catch((error) => reject(error));
});

const getUserBoards = (userUid) => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/projects.json?orderBy="userUid"&equalTo="${userUid}"`)
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

const deleteBoard = (userUid) => {
  getUserBoards(userUid).then((response) => {
    response.forEach((item) => {
      console.warn(item);
      // cowData.deleteCow(item.firebaseKey);
    });
  });
};

export default { getBoards, getUserBoards, deleteBoard };
