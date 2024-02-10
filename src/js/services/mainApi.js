import axios from 'axios';

import { filterExercise, nameExercise } from '../exercises-details';
export const BASE_URL = 'https://energyflow.b.goit.study/api';


const ENDPOINT_QUOTE = 'quote';
const ENDPOINT_FILTER = 'exercises';

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
  const response = await axios
      .get(`${BASE_URL}/${ENDPOINT_FILTER}?${filterExercise}=${nameExercise}`, {
        params: { 
        keyword: keyword,
        limit,
        page,
          },
      })
  return response.data;
}

export { fetchQuoteFromServer, searchExerciseByFilters };

