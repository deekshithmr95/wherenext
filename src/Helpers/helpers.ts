import { isEmpty, get } from 'lodash';

/**
 * isNotEmptyArray - check the given array is empty or not
 * @param arr
 * @returns boolean
 */
export function isNotEmptyArray(arr: Array<any>): boolean {
  return arr && arr.length > 0 && Array.isArray(arr);
}

/**
 * isNotEmptyObject - return boolean if object is empty or not
 * @param obj
 * @returns returns boolean
 */
export function isNotEmptyObject(obj: Object) {
  return !isEmpty(obj) && obj instanceof Object && Object.keys(obj).length > 0;
}

export const getUniqueSet = (rawData: any, key: string) => {
  let uniqueSet = new Set();
  //TODO: fix types
  return rawData.reduce((accum: Array<any>, item: any) => {
    if (!uniqueSet.has(item[key].id)) {
      uniqueSet.add(item[key].id);
      accum.push(item[key]);
    }
    return accum;
  }, []);
};

export const arrayUnique = (arr, uniqueKey) => {
  const flagList = new Set();
  return arr.filter(function (item) {
    if (!flagList.has(item[uniqueKey])) {
      flagList.add(item[uniqueKey]);
      return true;
    }
  });
};

/**
 * Flatten a multidimensional object
 *
 * For example:
 *   flattenObject({ a: 1, b: { c: 2 } })
 * Returns:
 *   { a: 1, c: 2}
 */
export const flattenObject = (obj) => {
  const flattened = {};
  Object.keys(obj).forEach((key) => {
    flattened[key] = obj[key];
  });
  return flattened;
};
