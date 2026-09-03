import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Network Fetch Related
import { HOT_COLLECTIONS_URL, fetchNetworkData } from '../../services/api';

// Slider Related
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { getSliderSettings } from '../../utils/sliderSettings';

// Skeleton Related
import { getSkeletonArray } from '../../utils/skeletonUtils';
import HotCollectionsSkeleton from './HotCollectionsSkeleton';

const HotCollections = () => {
  const [hotCollections, setHotCollections] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const data = await fetchNetworkData(HOT_COLLECTIONS_URL);
        setHotCollections(data);
      } catch (error) {
        console.error('Failed to fetch hot collections:', error);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  // Slider Settings
  const sliderSettings = getSliderSettings();

  // Placeholder array for the skeleton loader while fetching real data.
  const collectionsToDisplay = loading ? getSkeletonArray(6) : hotCollections;

  return (
    <section id="section-collections" className="no-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>Hot Collections</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>

          <div className="col-lg-12">
            <Slider {...sliderSettings}>
              {collectionsToDisplay.map((item, index) => (
                <div key={item.id}>
                  <div className="nft_slider_item">
                    {loading ? (
                      // Display skeleton while loading.
                      <HotCollectionsSkeleton />
                    ) : (
                      // Display actual data
                      <div className="nft_coll">
                        <div className="nft_wrap">
                          <Link to="/item-details/">
                            <img
                              src={item.nftImage}
                              className="lazy img-fluid"
                              alt=""
                            />
                          </Link>
                        </div>
                        <div className="nft_coll_pp">
                          <Link to="/author">
                            <img
                              className="lazy pp-coll"
                              src={item.authorImage}
                              alt=""
                            />
                          </Link>
                          <i className="fa fa-check"></i>
                        </div>
                        <div className="nft_coll_info">
                          <Link to="/explore">
                            <h4>{item.title || 'Pinky Ocean'}</h4>
                          </Link>
                          <span>ERC-{item.code}</span>
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

export default HotCollections;
