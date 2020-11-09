/**
 * @description 
 * @param
 * */ 
const customMediaQueryMax = (maxWidth) =>
  `@media (max-width: ${maxWidth}px)`;

/**
 * @description 
 * @param
 * */ 
const customMediaQueryMin = (minWidth) =>
    `@media (min-width: ${minWidth}px)`;

export const screenSize = {
  custom: customMediaQueryMax,
  desktop: customMediaQueryMin(1025),
  tablet: customMediaQueryMax(890),
  // tablet: customMediaQueryMax(1024),
  phone: customMediaQueryMax(576),
};