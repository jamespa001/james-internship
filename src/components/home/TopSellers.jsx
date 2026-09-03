import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Network Fetch Related
import { fetchNetworkData, TOP_SELLERS_URL } from '../../services/api';

// Skeleton Related
import { getSkeletonArray } from '../../utils/skeletonUtils';
import TopSellersSkeleton from './TopSellersSkeleton';

const TopSellers = () => {
  const [topSellers, setTopSellers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const data = await fetchNetworkData(TOP_SELLERS_URL);
        setTopSellers(data);
      } catch (error) {
        console.error('Failed to fetch new items:', error);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  // Placeholder array for the skeleton loader while fetching real data.
  const topSellersToDisplay = loading ? getSkeletonArray(12) : topSellers;

  return (
    <section id="section-popular" className="pb-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>Top Sellers</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          <div className="col-md-12">
            <ol className="author_list">
              {topSellersToDisplay.map((topSeller) => (
                <li key={topSeller.id}>
                  {loading ? (
                    <TopSellersSkeleton />
                  ) : (
                    <>
                      <div className="author_list_pp">
                        <Link to={`/author/${topSeller.authorId}`}>
                          <img
                            className="lazy pp-author"
                            src={topSeller.authorImage}
                            alt=""
                          />
                          <i className="fa fa-check"></i>
                        </Link>
                      </div>
                      <div className="author_list_info">
                        <Link to="/author">{topSeller.authorName}</Link>
                        <span>{topSeller.price} ETH</span>
                      </div>
                    </>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopSellers;
