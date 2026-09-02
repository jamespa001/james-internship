import axios from 'axios';

export const HOT_COLLECTIONS_URL =
  'https://us-central1-nft-cloud-functions.cloudfunctions.net/hotCollections';

export async function fetchNetworkData(url) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch hot collections data:', error);
    return [];
  }
}
