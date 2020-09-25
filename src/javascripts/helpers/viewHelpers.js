import boardView from '../components/views/projectBoard';
// import singleBoard from '../components/views/singleBoard';
// import getBoards from './data/boardData';
// import singleBoard from '../components/views/singleBoard';

const viewHelper = () => {
  $('#app').html('');
  boardView.boardView();
  // singleBoard.showSingleBoard();
  // getBoards.getBoards();
  // singleBoard.getUserBoards(userId);
};

export default { viewHelper };
