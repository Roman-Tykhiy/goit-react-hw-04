import axios from 'axios';

const API_KEY = `ilIAntpK_nFpR_ep_xy-ARsothDVATzTkwHo_uZF0VI`;
// BrK3Fv3F4h4gDgIx1NWKvvU6r8IAfeVAqPueOQflH7c

export const fetchImages = async (query, page, perPage = 16) => {
  const response = await axios.get(`https://api.unsplash.com/search/photos?`, {
    params: {
      client_id: API_KEY,
      query: query,
      page: page,
      per_page: perPage,
      order_by: `views`,
      orientation: `landscape`,
    },
  });
  return response.data;
};