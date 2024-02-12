import axios from 'axios';
import { exercisesParamFilter, exercisesParamName } from '../exercises-details';
// import { exercisesParamFilter, exercisesParamName } from '../exercises';

export const BASE_URL = 'https://energyflow.b.goit.study/api';
const END_POINT_QUOTE = 'quote';
const END_POINT_FILTER = 'exercises';

async function fetchQuoteFromServer() {
  try {
    const response = await axios.get(

      `${BASE_URL}/${END_POINT_QUOTE}`

    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}



async function searchExerciseByFilters({ keyword, page = 1, limit }) {
  const response = await axios
  .get(`https://energyflow.b.goit.study/api/exercises`, {
    params: { 
      [exercisesParamFilter]: exercisesParamName,
        keyword: keyword,
        limit,
        page,
          },
      })
  return response.data;
}

export { fetchQuoteFromServer, searchExerciseByFilters };


