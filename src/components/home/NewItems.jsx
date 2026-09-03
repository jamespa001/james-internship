import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Network Fetch Related
import { fetchNetworkData, NEW_ITEMS_URL } from '../../services/api';

// Slider Related
import Slider from 'react-slick';
import { getSliderSettings } from '../../utils/sliderSettings';

// Skeleton Related
import { getSkeletonArray } from '../../utils/skeletonUtils';
import NewItemsSkeleton from './NewItemsSkeleton';

// Countdown Timer Related
import CountdownTimer from '../UI/CountdownTimer';

const NewItems = () => {
  const [newItems, setNewItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const data = await fetchNetworkData(NEW_ITEMS_URL);
        setNewItems(data);
      } catch (error) {
        console.error('Failed to fetch new items:', error);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  // Slider Settings
  const sliderSettings = getSliderSettings();

  // Placeholder array for the skeleton loader while fetching real data.
  const newItemsToDisplay = loading ? getSkeletonArray(7) : newItems;

  return (
    <section id="section-items" className="no-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>New Items</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          <div className="col-lg-12" data-aos="fade-up" data-aos-delay="250">
            <Slider {...sliderSettings}>
              {newItemsToDisplay.map((newItem) => (
                <div key={newItem.id}>
                  <div className="nft_slider_item">
                    {loading ? (
                      // Display skeleton while loading.
                      <NewItemsSkeleton />
                    ) : (
                      // Display real data
                      <div className="nft__item">
                        <div className="author_list_pp">
                          <Link
                            to={`/author/${newItem.authorId}`}
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="Creator: Monica Lucas"
                          >
                            <img
                              className="lazy"
                              src={newItem.authorImage}
                              alt=""
                            />
                            <i className="fa fa-check"></i>
                          </Link>
                        </div>
                        <CountdownTimer expiryDate={newItem.expiryDate} />

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
                                <a href="#">
                                  <i className="fa fa-envelope fa-lg"></i>
                                </a>
                              </div>
                            </div>
                          </div>

                          <Link to={`/item-details/${newItem.nftId}`}>
                            <img
                              src={newItem.nftImage}
                              className="lazy nft__item_preview"
                              alt=""
                            />
                          </Link>
                        </div>
                        <div className="nft__item_info">
                          <Link to={`/item-details/${newItem.nftId}`}>
                            <h4>{newItem.title}</h4>
                          </Link>
                          <div className="nft__item_price">
                            {newItem.price} ETH
                          </div>
                          <div className="nft__item_like">
                            <i className="fa fa-heart"></i>
                            <span>{newItem.likes}</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewItems;
