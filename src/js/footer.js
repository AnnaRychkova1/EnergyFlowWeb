// import axios from 'axios';

// import iziToast from 'izitoast';
// import 'izitoast/dist/css/iziToast.min.css';

// const form = document.querySelector('.footer-form');

// document
//   .querySelector('.footer-form')
//   .addEventListener('submit', function (event) {
//     event.preventDefault();

//     const emailInput = document
//       .querySelector('.footer-input')
//       .value.trim()
//       .toLowerCase();

//     if (emailInput) {
//       sendSubscriptionRequest(emailInput);
//     } else {
//       iziToast.error({
//         title: 'Error!',
//         message:
//           'Invalid email entered. Please check the format and try again.',
//         position: 'topRight',
//       });
//     }
//   });

// async function sendSubscriptionRequest(email) {
//   const request = await axios
//     .post('https://energyflow.b.goit.study/api/subscription', {
//       email: email,
//     })
//     .then(function (response) {
//       iziToast.success({
//         title: 'Successfully!',
//         message: response.data.message,
//         position: 'topRight',
//       });
//       form.reset();
//     })
//     .catch(function (error) {
//       if (error.response.status === 409) {
//         iziToast.info({
//           title: 'Info!',
//           message: 'Subscription already exists.',
//           position: 'topRight',
//         });
//       } else {
//         iziToast.error({
//           title: 'Error!',
//           message:
//             'An error occured while sending the request. Please try again.',
//           position: 'topRight',
//         });
//       }
//     })
//     .finally(function () {
//       form.reset();
//     });
// }
