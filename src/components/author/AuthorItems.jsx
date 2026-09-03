import React from 'react';
import { Link } from 'react-router-dom';
import { getSkeletonArray } from '../../utils/skeletonUtils';

const AuthorItems = ({ nftItems, authorImage, loading }) => {
  // Use Skeleton array items while loading
  const displayItems = loading
    ? getSkeletonArray(Array.isArray(nftItems) ? nftItems.length : 8)
    : nftItems || [];

  return (
    <div className="de_tab_content">
      <div className="tab-1">
        <div className="row">
          {displayItems.map((displayItem, index) => (
            <div
              className="col-lg-3 col-md-6 col-sm-6 col-xs-12"
              key={displayItem.id || index}
            >
              <div className="nft__item">
                <div className="author_list_pp">
                  <Link to="">
                    <img className="lazy" src={authorImage} alt="" />
                    <i className="fa fa-check"></i>
                  </Link>
                </div>
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
                      src={displayItem?.nftImage}
                      className="lazy nft__item_preview"
                      alt=""
                    />
                  </Link>
                </div>
                <div className="nft__item_info">
                  <Link to="/item-details">
                    <h4>{displayItem?.title}</h4>
                  </Link>
                  <div className="nft__item_price">
                    {displayItem?.price
                      ? `${displayItem.price} ETH`
                      : '0.00 ETH'}
                  </div>
                  <div className="nft__item_like">
                    <i className="fa fa-heart"></i>
                    <span>{displayItem?.likes ?? 0}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AuthorItems;
