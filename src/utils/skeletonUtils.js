// getSkeletonArray
export const getSkeletonArray = (count = 7) => {
  return Array.from({ length: count }, (_, index) => ({ id: `${index}` }));
};
