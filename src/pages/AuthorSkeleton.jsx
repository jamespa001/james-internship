import React from 'react';

// Skeleton Related
import Skeleton from '../components/UI/Skeleton';
import { getSkeletonArray } from '../utils/skeletonUtils';

export default function AuthorSkeleton() {
  return (
    <div className="row">
      {/* Profile Header Skeleton */}
      <div className="col-md-12">
        <div className="d_profile de-flex">
          <div className="de-flex-col">
            <div className="profile_avatar">
              <Skeleton width="150px" height="150px" borderRadius="50%" />
              <i className="fa fa-check"></i>
              <div className="profile_name">
                <h4>
                  <Skeleton width="200px" height="24px" />
                  <span className="profile_username">
                    <Skeleton width="100px" height="16px" />
                  </span>
                  <span id="wallet" className="profile_wallet">
                    <Skeleton width="250px" height="16px" />
                  </span>
                </h4>
              </div>
            </div>
          </div>
          <div className="profile_follow de-flex">
            <div className="de-flex-col">
              <div className="profile_follower">
                <Skeleton width="100px" height="20px" />
              </div>
              <Skeleton width="120px" height="40px" borderRadius="4px" />
            </div>
          </div>
        </div>
      </div>

      {/* NFT Items Grid Skeleton */}
      <div className="col-md-12">
        <div className="de_tab tab_simple">
          <div className="de_tab_content">
            <div className="tab-1">
              <div className="row">
                {getSkeletonArray(8).map((_, index) => (
                  <div
                    className="col-lg-3 col-md-6 col-sm-6 col-xs-12"
                    key={index}
                  >
                    <div className="nft__item">
                      <div className="author_list_pp">
                        <div className="author_list_pp-skeleton">
                          <Skeleton
                            width="50px"
                            height="50px"
                            borderRadius="50%"
                          />
                          <i className="fa fa-check"></i>
                        </div>
                      </div>
                      <div className="nft__item_wrap">
                        <Skeleton width="100%" height="200px" />
                      </div>
                      <div className="nft__item_info">
                        <h4>
                          <Skeleton width="120px" height="20px" />
                        </h4>
                        <div className="nft__item_price">
                          <Skeleton width="60px" height="15px" />
                        </div>
                        <div className="nft__item_like">
                          <Skeleton width="30px" height="15px" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
