import React from 'react';

// Use existing Skeleton component
import Skeleton from '../UI/Skeleton';

// Hot Collections Skeleton
export default function HotCollectionsSkeleton() {
  return (
    <div className="nft_coll">
      <div className="nft_wrap">
        <Skeleton width="100%" height="100%" />
      </div>
      <div className="nft_coll_pp">
        <Skeleton width="60px" height="60px" borderRadius="50%" />
        <i className="fa fa-check"></i>
      </div>
      <div className="nft_coll_info">
        <h4>
          <Skeleton width="120px" height="20px" />
        </h4>
        <span>
          <Skeleton width="60px" height="15px" />
        </span>
      </div>
    </div>
  );
}
