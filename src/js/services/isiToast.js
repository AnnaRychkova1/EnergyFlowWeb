import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

function apiIsiToastError() {
     iziToast.error({
      title: '🥺 Ooops...',
      message:
        'An error occurred while fetching results. Please try again later.',
       position: 'bottomCenter',
       color: 'rgba(152, 151, 151, 0.979)',
    });
}

function endOfSearchIsiToast() {
    iziToast.info({
        title: '🥺 Ooops...',
        message:
          "We're sorry, but you've reached the end of search results.",
        position: 'bottomCenter',
        color: 'rgba(152, 151, 151, 0.979)',
      });
}

function noQuery() {
    iziToast.error({
      title: '🥺 Ooops...',
      message: 'Please, input query!',
      position: 'bottomCenter',
      color: 'rgba(152, 151, 151, 0.979)',
    });
}

function noResults() {
     iziToast.error({
        title: '🥺 Ooops...',
        message:
          'Sorry, there are no results matching your search. Please try again!',
       position: 'bottomCenter',
       color: 'rgba(152, 151, 151, 0.979)',
      });
}

export default { apiIsiToastError, endOfSearchIsiToast, noQuery, noResults };
