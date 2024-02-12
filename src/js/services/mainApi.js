import axios from 'axios';
// import { exercisesParamFilter, exercisesParamName } from '../exercises';
import { filterDefault, currentPage, currentLimit } from '../exercises';
// import { exercisesParamFilter, exercisesParamName } from '../exercises-details';
// import { exercisesParamFilter, exercisesParamName } from '../exercises';

const BASE_URL = 'https://energyflow.b.goit.study/api';

const ENDPOINT_QUOTE = 'quote';
const ENDPOINT_FILTER = 'exercises';
const ENDPOINT_EXERCISES = 'filters';

async function fetchQuoteFromServer() {
  try {
    const response = await axios.get(`${BASE_URL}/${ENDPOINT_QUOTE}`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function searchExerciseByFilters({ keyword, page = 1, limit }) {
  const response = await axios.get(
    `https://energyflow.b.goit.study/api/exercises`,
    {
      params: {
        [filterDefault]: nameExercise,
        keyword: keyword,
        limit,
        page,
      },
    }
  );
  return response.data;
}

async function getExercisesByFilter({ results, page, totalPages }) {
  try {
    const response = await axios.get(`${BASE_URL}/${ENDPOINT_EXERCISES}`, {
      params: {
        filter: filterDefault,
        page: currentPage,
        limit: currentLimit,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

async function searchExerciseByID(id) {
  try {
    const { data } = await axios.get(`${BASE_URL}/${ENDPOINT_FILTER}/${id}`);
    return data;
  } catch (err) {
    console.error(err);
  }
}

export {
  fetchQuoteFromServer,
  searchExerciseByFilters,
  searchExerciseByID,
  getExercisesByFilter,
};
