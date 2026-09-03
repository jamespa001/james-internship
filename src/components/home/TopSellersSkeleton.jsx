import React from 'react';

// Use existing Skeleton component
import Skeleton from '../UI/Skeleton';

// Top Sellers Skeleton
export default function TopSellersSkeleton() {
  return (
    <>
      <div className="author_list_pp">
        <div className="author_list_pp-skeleton">
          <Skeleton width="50px" height="50px" borderRadius="50%" />
          <i className="fa fa-check"></i>
        </div>
      </div>
      <div className="author_list_info">
        <div>
          <Skeleton width="120px" height="16px" borderRadius="4px" />
        </div>
        <div>
          <Skeleton width="60px" height="14px" borderRadius="4px" />
        </div>
      </div>
    </>
  );
}
