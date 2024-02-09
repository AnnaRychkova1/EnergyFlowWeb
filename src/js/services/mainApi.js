import axios from 'axios';
import { filterExercise, nameExercise } from '../exercises-details';

export const BASE_URL = 'https://energyflow.b.goit.study/api';
const ENDPOINT_QUOTE = 'quote';

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

export { fetchQuoteFromServer };

