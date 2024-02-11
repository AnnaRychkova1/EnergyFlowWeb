import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

function apiIsiToastError() {
     iziToast.error({
      title: '🥺 Ooops...',
      message:
        'An error occurred while fetching results. Please try again later.',
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

function noQuery() {
    iziToast.error({
      title: '🥺 Ooops...',
      message: 'Please, input query!',
      position: 'center',
    });
}

function noResults() {
     iziToast.error({
        title: '🥺 Ooops...',
        message:
          'Sorry, there are no results matching your search. Please try again!',
        position: 'bottomCenter',
      });
}

export default { apiIsiToastError, endOfSearchIsiToast, noQuery, noResults };
