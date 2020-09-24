import boardView from '../components/views/projectBoard';

const viewHelper = () => {
  $('#app').html('');
  boardView.boardView();
};

export default { viewHelper };
