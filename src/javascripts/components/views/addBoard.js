import boardForm from '../form/addBoard';

const addBoardView = () => {
  $('#app').append('<div id="board-form"></div>');
  $('#app').append('<button class="btn btn-success" id="add-board-btn">Add Board</button>');
};

const addBoardEvent = () => {
  addBoardView();
  $('#add-board-btn').on('click', (e) => {
    boardForm.boardForm();
    console.warn('clicked', e);
    $('#add-board-btn').remove();
  });
};

export default { addBoardView, addBoardEvent };
