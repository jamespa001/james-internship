import axios from 'axios';

export const HOT_COLLECTIONS_URL =
  'https://us-central1-nft-cloud-functions.cloudfunctions.net/hotCollections';

export const NEW_ITEMS_URL =
  'https://us-central1-nft-cloud-functions.cloudfunctions.net/newItems';

export const TOP_SELLERS_URL =
  'https://us-central1-nft-cloud-functions.cloudfunctions.net/topSellers';

export const EXPLORE_ITEMS_URL =
  'https://us-central1-nft-cloud-functions.cloudfunctions.net/explore';

export const AUTHORS_URL =
  'https://us-central1-nft-cloud-functions.cloudfunctions.net/authors';

export const ITEM_DETAILS_URL =
  'https://us-central1-nft-cloud-functions.cloudfunctions.net/itemDetails';

export async function fetchNetworkData(url) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch network data:', error);
    return [];
  }
}
