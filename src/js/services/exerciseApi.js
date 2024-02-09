import axios from 'axios';

// const BASE_URL =



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
