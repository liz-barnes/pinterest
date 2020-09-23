import firebase from 'firebase/app';
import 'firebase/auth';

const logoutEvent = () => {
  $('#navbar-logout-button').on('click', (e) => {
    e.preventDefault();

    // NOTE FOR STUDENTS
    // Remove session storage if they log out in the same session and in case another user logs in, we want the API check to happen.
    window.sessionStorage.removeItem('ua');
    firebase.auth().signOut();
    window.location.href = '/';
  });
};

const buildNavbar = (currentUser) => {
  $('#nav').html(
    `<nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Wannabe Pinterest</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" 
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
          <li class="user-info-nav">
            Welcome, ${currentUser.name}!
          </li>
          <li class="nav-item">
            <button class="nav-link btn btn-danger p-2" id="navbar-logout-button">Logout</button>
          </li>
        </ul>
    </div>
  </nav>`
  );

  logoutEvent();
};
//  <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
//         <li class="nav-item active">
//           <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="#">Link</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
//         </li>
//       </ul>
//  <form class="form-inline my-2 my-lg-0">
//         <input class="form-control mr-sm-2" type="search" placeholder="Search">
//         <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//       </form>
export default { buildNavbar };
