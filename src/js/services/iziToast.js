import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import icons from '/img/icons/symbol-defs.svg';

function successResult(message) {
  iziToast.show({
    position: 'topCenter',
    iconUrl: `${icons}#dumbbell-big`,
    title: 'Congradulation!',
    titleSize: '20px',
    message: message,
    messageSize: '20px',
    titleColor: '7e847f',
    messageColor: 'black',
    backgroundColor: '#a6b0b0bd',
    layout: 1,
    theme: 'light',
    timeout: 5000,
  });
}

function errorResult(message) {
  iziToast.show({
    position: 'topCenter',
    iconUrl: '/img/icons/all-icons/dumbbell-big.svg',
    // iconUrl: `${icons}#dumbbell-big`,
    title: 'Upps!',
    titleSize: '20px',
    message: message,
    messageSize: '20px',
    titleColor: '7e847f',
    messageColor: 'black',
    backgroundColor: '#red',
    layout: 1,
    theme: 'light',
    timeout: 5000,
  });
}

export { successResult, errorResult };
