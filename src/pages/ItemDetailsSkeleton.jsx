import React from 'react';
import Skeleton from '../components/UI/Skeleton';
import EthImage from '../images/ethereum.svg';

const ItemDetailsSkeleton = () => {
  return (
    <div className="row">
      {/* NFT Image Skeleton */}
      <div className="col-md-6 text-center">
        <Skeleton width="100%" height="450px" borderRadius="8px" />
      </div>

      {/* NFT Info Skeleton */}
      <div className="col-md-6">
        <div className="item_info">
          {/* Title Skeleton */}
          <h2>
            <Skeleton width="300px" height="40px" />
          </h2>

          {/* Views & Likes Counts Skeleton */}
          <div className="item_info_counts">
            <div className="item_info_views">
              <Skeleton width="60px" height="20px" />
            </div>
            <div className="item_info_like">
              <Skeleton width="60px" height="20px" />
            </div>
          </div>

          {/* Description Paragraph Skeleton */}
          <p>
            <Skeleton width="100%" height="20px" />
            <Skeleton width="90%" height="20px" />
            <Skeleton width="60%" height="20px" />
          </p>

          {/* Owner Skeleton */}
          <div className="d-flex flex-row">
            <div className="mr40">
              <h6>
                <Skeleton width="60px" height="15px" />
              </h6>
              <div className="item_author">
                <div className="author_list_pp">
                  <div className="author_list_pp-skeleton">
                    <Skeleton width="50px" height="50px" borderRadius="50%" />
                    <i className="fa fa-check"></i>
                  </div>
                </div>
                <div className="author_list_info">
                  <Skeleton width="120px" height="20px" />
                </div>
              </div>
            </div>
          </div>

          {/* Creator & Price Section Skeleton */}
          <div className="de_tab tab_simple">
            <div className="de_tab_content">
              <h6>
                <Skeleton width="60px" height="15px" />
              </h6>
              <div className="item_author">
                <div className="author_list_pp">
                  <div className="author_list_pp-skeleton">
                    <Skeleton width="50px" height="50px" borderRadius="50%" />
                    <i className="fa fa-check"></i>
                  </div>
                </div>
                <div className="author_list_info">
                  <Skeleton width="120px" height="20px" />
                </div>
              </div>
            </div>

            <div className="spacer-40"></div>

            <h6>
              <Skeleton width="50px" height="15px" />
            </h6>
            <div className="nft-item-price">
              <img
                src={EthImage}
                alt=""
                style={{
                  marginTop: '-15px',
                }}
              />
              <Skeleton width="100px" height="24px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetailsSkeleton;
