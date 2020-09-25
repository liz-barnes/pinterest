import allBoards from '../../helpers/data/boardData';
import boardCard from '../cards/projectCard';

const userBoardsView = () => {
  allBoards.getBoards()
    .then((response) => {
      if (response.length) {
        response.forEach((boardObject) => {
          $('#app').append(boardCard.buildBoardCard(boardObject));
        });
      } else {
        $('#app').append('<h2>NO FARMERS</h2>');
      }
    });
};

export default { userBoardsView };
