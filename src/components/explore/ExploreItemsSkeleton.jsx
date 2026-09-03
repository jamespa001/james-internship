import React from 'react';

// Use existing Skeleton component
import Skeleton from '../UI/Skeleton';

// Explore Items Skeleton
export default function ExploreItemsSkeleton() {
  return (
    <div className="nft__item">
      {/* Author Profile */}
      <div className="author_list_pp">
        <div className="author_list_pp-skeleton">
          <Skeleton width="50px" height="50px" borderRadius="50%" />
          <i className="fa fa-check"></i>
        </div>
      </div>

      {/* Countdown Timer */}
      <div className="de_countdown de_countdown-skeleton">
        <Skeleton width="90px" height="20px" borderRadius="4px" />
      </div>

      {/* Main Image Preview */}
      <div className="nft__item_wrap">
        <div className="nft__item_preview">
          <Skeleton width="100%" height="250px" borderRadius="8px" />
        </div>
      </div>

      {/* Info Section */}
      <div className="nft__item_info">
        {/* Title */}
        <div className="nft__item_title-skeleton">
          <Skeleton width="70%" height="22px" borderRadius="4px" />
        </div>

        {/* Price */}
        <div className="nft__item_price-skeleton">
          <Skeleton width="40%" height="18px" borderRadius="4px" />
        </div>

        {/* Likes Count */}
        <div className="nft__item_like nft__item_like-skeleton">
          <i className="fa fa-heart"></i>
          <Skeleton width="30px" height="14px" borderRadius="4px" />
        </div>
      </div>
    </div>
  );
}
