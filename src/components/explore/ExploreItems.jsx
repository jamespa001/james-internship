import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Skeleton Related
import { getSkeletonArray } from '../../utils/skeletonUtils';
import ExploreItemsSkeleton from './ExploreItemsSkeleton';

// Network Fetch Related
import { fetchNetworkData, EXPLORE_ITEMS_URL } from '../../services/api';

// Countdown Timer Related
import CountdownTimer from '../UI/CountdownTimer';

const ExploreItems = () => {
  const [exploreItems, setExploreItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleItemsCount, setVisibleItemsCount] = useState(8);

  const fetchItems = async (url) => {
    setLoading(true);

    try {
      const data = await fetchNetworkData(url);
      setExploreItems(data);

      // Set initial visible count to 8
      setVisibleItemsCount(8);
    } catch (error) {
      console.error('Failed to fetch explore items:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems(EXPLORE_ITEMS_URL);
  }, []);

  // Handle filter selection
  const handleFilterChange = (e) => {
    const filterValue = e.target.value;

    let url = filterValue
      ? `${EXPLORE_ITEMS_URL}?filter=${filterValue}`
      : EXPLORE_ITEMS_URL;

    fetchItems(url);
  };

  // Handle 'load more'
  const handleLoadMore = (e) => {
    e.preventDefault();

    if (visibleItemsCount == 8) {
      setVisibleItemsCount(12);
    } else if (visibleItemsCount == 12) {
      setVisibleItemsCount(16);
    }
  };

  // Placeholder array for the skeleton loader while fetching real data.
  const exploreItemsToDisplay = loading
    ? getSkeletonArray(visibleItemsCount)
    : exploreItems.slice(0, visibleItemsCount);

  return (
    <>
      <div>
        <select id="filter-items" defaultValue="" onChange={handleFilterChange}>
          <option value="">Default</option>
          <option value="price_low_to_high">Price, Low to High</option>
          <option value="price_high_to_low">Price, High to Low</option>
          <option value="likes_high_to_low">Most liked</option>
        </select>
      </div>

      {exploreItemsToDisplay.map((exploreItem, index) => (
        <div
          key={exploreItem.id || index}
          className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12"
          style={{ display: 'block', backgroundSize: 'cover' }}
        >
          {loading ? (
            <ExploreItemsSkeleton />
          ) : (
            <div className="nft__item">
              <div className="author_list_pp">
                <Link
                  to="/author"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                >
                  <img className="lazy" src={exploreItem.authorImage} alt="" />
                  <i className="fa fa-check"></i>
                </Link>
              </div>
              <CountdownTimer expiryDate={exploreItem.expiryDate} />

              <div className="nft__item_wrap">
                <div className="nft__item_extra">
                  <div className="nft__item_buttons">
                    <button>Buy Now</button>
                    <div className="nft__item_share">
                      <h4>Share</h4>
                      <a href="" target="_blank" rel="noreferrer">
                        <i className="fa fa-facebook fa-lg"></i>
                      </a>
                      <a href="" target="_blank" rel="noreferrer">
                        <i className="fa fa-twitter fa-lg"></i>
                      </a>
                      <a href="">
                        <i className="fa fa-envelope fa-lg"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <Link to="/item-details">
                  <img
                    src={exploreItem.nftImage}
                    className="lazy nft__item_preview"
                    alt=""
                  />
                </Link>
              </div>
              <div className="nft__item_info">
                <Link to="/item-details">
                  <h4>{exploreItem.title}</h4>
                </Link>
                <div className="nft__item_price">{exploreItem.price} ETH</div>
                <div className="nft__item_like">
                  <i className="fa fa-heart"></i>
                  <span>{exploreItem.likes}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
      {visibleItemsCount < exploreItems.length && !loading && (
        <div className="col-md-12 text-center">
          <Link
            to=""
            id="loadmore"
            className="btn-main lead"
            onClick={handleLoadMore}
          >
            Load more
          </Link>
        </div>
      )}
    </>
  );
};

export default ExploreItems;
