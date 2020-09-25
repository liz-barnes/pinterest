// import userData from '../../helpers/data/userData';
// import boardData from '../../helpers/data/boardData';

const randomId = (min, max) => Math.round(Math.random() * (max - min) + min);

const boardForm = () => {
  $('#board-form').html(
    `<h2>Add Board</h2>
    <div id="success-message"></div>
    <form>
      <div id="error-message"></div>
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" class="form-control" id="input-board-name" placeholder="Example: Embroidery">
      </div>
      <div class="form-group">
        <label for="board-image">Board Image</label>
        <input type="text" class="form-control" id="input-board-image" placeholder="Paste URL">
      </div>
      <button id="save-board-btn" type="submit" class="btn btn-info"><i class="fas fa-plus-circle"></i> Add Board</button>
    </form>`
  );

  $('#save-board-btn').on('click', (e) => {
    e.preventDefault();

    const projects = {
      id: randomId(5, 50000000),
      name: $('#input-board-name').val() || false,
      imageUrl: $('#input-board-image').val() || false,
    };

    if (Object.values(projects).includes(false)) {
      $('#error-message').html(
        `<div class="alert alert-danger" role="alert">
        Please complete all fields
      </div>`
      );
    } else {
      $('#error-message').html('');
    }
  });
};

export default { boardForm };
// boardData.getBoards().then((response) => {
//   response.forEach((board) => {
//     $('select').append(`<option value=${board.id}>${board.boardId}</option>`);
//   });
// });

// farmerData.getAllFarmers().then((response) => {
//   response.forEach((item) => {
//     $('select').append(`<option value=${item.uid}>${item.name}</option>`);
//   });
// });

// $('#add-cow-btn').on('click', (e) => {
//   e.preventDefault();

//   const data = {
//     breed: $('#breed').val() || false,
//     location: $('#location').val() || false,
//     name: $('#name').val() || false,
//     weight: $('#weight').val() || false,
//     farmerUid: $('#farmer').val() || false
//   };

//   console.warn(data);

//   if (Object.values(data).includes(false)) {
//     $('#error-message').html(
//       `<div class="alert alert-danger" role="alert">
//       Please complete all fields
//     </div>`
//     );
//   } else {
//     $('#error-message').html('');

//     cowData.addCow(data)
//       .then(() => {
//         $('#success-message').html(
//           `<div class="alert alert-success" role="alert">
//           Mooooo! Your cow was added!
//         </div>`
//         );
//       }).catch((error) => console.warn(error));

//     setTimeout(() => {
//       $('#success-message').html('');
//     }, 3000);

//     $('#breed').val('');
//     $('#location').val('');
//     $('#name').val('');
//     $('#weight').val('');
//     $('#farmer').val('');
//   }
// });
