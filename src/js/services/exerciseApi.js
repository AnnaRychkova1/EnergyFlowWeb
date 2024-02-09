import axios from 'axios';

// const BASE_URL =
// const API_KEY =

// async function searchExerciseByName  {
//   const response = await axios
//     .get(`${BASE_URL}/`, {
//       params: {
//         key: API_KEY,

//       },
//     })
//   return response.data;
// }

export async function fetchQuoteFromServer() {
  try {
    const response = await axios.get(
      'https://energyflow.b.goit.study/api/quote'
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
