// import boardView from '../components/views/projectBoard';
// import getBoards from './data/boardData';
import singleBoard from '../components/views/singleBoard';

const viewHelper = () => {
  $('#app').html('');
  // boardView.boardView();
  // getBoards.getBoards();
  singleBoard.getUserBoards('-MHwVPNlT57Im8XQlvIb');
};

export default { viewHelper };
