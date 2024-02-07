import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

function apiIsiToastError() {
     iziToast.error({
      title: '🥺 Ooops...',
      message:
        'An error occurred while fetching images. Please try again later.',
      position: 'center',
    });
}

function endOfSearchIsiToast() {
    iziToast.info({
        title: '🥺 Ooops...',
        message:
          "We're sorry, but you've reached the end of search results.",
        position: 'bottomCenter',
      });
}

export default { apiIsiToastError, endOfSearchIsiToast };
